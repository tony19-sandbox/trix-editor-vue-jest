<template>
  <div>
    <trix-editor @trix-initialize="onInit" @trix-change="onChange" />
  </div>
</template>

<script>
import 'trix'

export default {
  props: ['value'],
  methods: {
    onInit(e) {
      let el = e.target
      // HACK: change the URL field in the link dialog to allow non-urls
      let toolbar = el.toolbarElement
      toolbar.querySelector('[type=url]').type = 'text'

      // insert content
      el.value = this.value
    },
    onChange(e) {
      this.$emit('input', e.target.innerHTML)
    }
  }
}
</script>