<template>
  <div class="input-group">
    <input class="input"
           :id="id" :name="name"
           v-model="inputValue"
           :type="type"
    placeholder=" "/>
    <label class="placeholder">
      {{ placeholder }} </label>
  </div>
</template>

<script>
export default {
  name: "HkInput",
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        inputValue: this.value,
      };
    },
    watch: {
      /*inputValue(newValue) {
        this.$emit('input', newValue);
      },*/
    },
}
</script>

<style scoped>
.input-group {
  position: relative;
}

.input {
  padding: 10px;
  border-radius: 2px;
  outline: none;
  color: #1f4456;
  border: 2px solid #d96932;
  border-radius: 3px;
}

.placeholder {
  position: absolute;
  top: 10px;
  left: 8px;
  font-size: 14px;
  padding: 0px 5px;
  color: #d96932;
  transition: 0.3s;
  pointer-events: none;
}

.input:focus + .placeholder, .input:not(:placeholder-shown) + .placeholder {
  top: -9px;
  background-color: white;
  color: #d96932;
}
</style>