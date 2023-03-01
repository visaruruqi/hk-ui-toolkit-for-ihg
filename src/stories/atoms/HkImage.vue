<template>
  <img :style="{width:widthPercent,
  height: heightPercent,
  'border-bottom-left-radius': bottomLeftRadius,
  'border-bottom-right-radius': bottomRightRadius,
  'border-top-left-radius':topLeftRadius,
  'border-top-right-radius':topRightRadius
  }"
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
    },
    bottomLeftRadius: {
      type: String,
      default: '0px'
    },
    bottomRightRadius: {
      type: String,
      default: '0px'
    },
    topLeftRadius: {
      type: String,
      default: '0px'
    },
    topRightRadius: {
      type: String,
      default: '0px'
    },
  }
}
</script>
