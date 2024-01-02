<template>
  <div class="content g2-content">
    <div id="pdf-viewer"></div>
  </div>
</template>

<script>
import { decode64 } from "@utils/AcrouUtil";
import pdfobject from 'pdfobject'
export default {
  data: function() {
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
    pdfobject.embed(this.url, '#pdf-viewer', {height: "100vh"})
  },
  methods: {
    error: function(err) {
      console.log(err);
    }
  }
};
</script>

<style scoped>
object{
    width: 100%;
    height: -webkit-fill-available;
}
</style>