<template>
  <img :style="{width:widthPercent, height: heightPercent}"
       :src="imageUrl"
       :alt="altText"
       :title="titleText"
       :width="width" :height="height">
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: ''
    },
    titleText: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
    widthPercent: {
      type: String,
      default: '100%'
    },
    heightPercent: {
      type: String,
      default: '100%'
    }
  }
}
</script>
