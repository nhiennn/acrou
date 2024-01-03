<template>
    <div class="content g2-content">

        <div>
            <div id="content-viewer">
            </div>
        </div>
    </div>
</template>

<style scoped>
#content-viewer {
    height: 80vh;
    overflow-y: scroll;
}
</style>

<script>
import * as pdfjsLib from 'pdfjs-dist/es5/build/pdf';
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;


export default {
    data: function () {
        return {};
    },
    computed: {
        url() {
            if (this.$route.params.path) {
                return decode64(this.$route.params.path);
            }
            return ''
        }
    },
    mounted() {
        this.getPdf();
    },
    methods: {
        async getPdf(page) {
            const loadingTask = pdfjsLib.getDocument(this.url);
            this.pdfDocument = await loadingTask.promise;
            this.numPage = this.pdfDocument.numPages

            let viewer = document.getElementById('content-viewer')
            for (page = 1; page <= this.numPage; page++) {
                let canvas = document.createElement("canvas");
                canvas.className = 'pdf-page-canvas';
                canvas.style.borderBottom = '1px solid #cdcdcd'
                viewer.appendChild(canvas);
                this.renderPage(page, canvas, this.scale);
            }
        },
        renderPage(pageNumber, canvas, scale) {
            this.pdfDocument.getPage(pageNumber).then(function (page){
                let viewport = page.getViewport({scale: scale});
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                page.render({canvasContext: canvas.getContext('2d'), viewport: viewport});
            });
        }
    }
};
</script>