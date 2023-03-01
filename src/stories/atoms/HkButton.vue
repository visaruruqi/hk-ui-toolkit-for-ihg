<template>
<button class="button"
        :class="classes"
        :disabled="disabled"
        :type="type"
>
  <slot>
    Click me!
  </slot>
</button>
</template>

<script>
export default {
  name: "HkButton",
  props: {
    title: String,
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    colorClass() {

      return this.type ? `button--${this.type}` : ``;
    },
    size() {
      return this.size ? `button--${this.size}` : ``;
    },
    classes() {
      let ob={};
      if (this.colorClass)
        ob[this.colorClass] = true
      if (this.size)
        ob[this.size] = true
      return ob;
    }
  }
}
</script>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #ccc;
}


.button--primary {
  background-color: #d96932;
  color: #fff;
}

.button--secondary {
  background-color: #d96932;
  color: #fff;
  transition: all ease 500ms;
}
.button--secondary:hover{
  padding: 0.5rem 1.5rem 0.5rem 1rem;
}

.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.button--large {
  font-size: 16px;
  padding: 12px 24px;
}

.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
