<template>
  <div ref="trix">
    <trix-editor></trix-editor>
  </div>
</template>

<script>
import 'trix'

export default {
  props: ['value'],
  mounted() {
    let el = this.$refs.trix.getElementsByTagName('trix-editor')[0]
    // HACK: change the URL field in the link dialog to allow non-urls
    let toolbar = this.$refs.trix.getElementsByTagName('trix-toolbar')[0]
    toolbar.querySelector('[type=url]').type = 'text'

    // insert content
    el.editor.insertHTML(this.value)

    el.addEventListener('trix-change', e => {
      this.$emit('input', e.target.innerHTML)
    })
  }
}
</script>