<template>
  <div class="card" :style="styleObject">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      {{ footer }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HkCard',
  props: {
    title: {type: String},
    footer: {type: String},
    width: {type: String},
    backgroundColor: {type: String},
  },
  computed: {
    styleObject() {
      return {width: this.width,backgroundColor: this.backgroundColor}
    }
  },
}
</script>

<style>

.card {
  box-sizing: border-box;
  font-family: Arial;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  height: 100%;
}

.card-header {
  font-weight: bold;
}

.card-footer {
  text-align: right;
}
</style>
