<template>
  <div class="switch-container" @click="toggleSwitch">
    <input type="checkbox" id="switch" class="switch-input" />
    <label for="switch" class="switch-label"></label>
  </div>
</template>


<script>
export default {
  name: 'HkSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSwitch() {
      this.$emit('change', event.target.checked);
      this.$emit('input', !this.value);
    },
  },
  mounted() {
    const switchInput = this.$el.querySelector('.switch-input');
    switchInput.addEventListener('change', this.toggleSwitch);

    if (this.value == true) {
      this.toggleSwitch();
    }
  },
  beforeUnmount() {
    const switchInput = this.$el.querySelector('.switch-input');
    switchInput.removeEventListener('change', this.toggleSwitch);
  },
};
</script>


<style scoped>
.switch-container {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  margin: 10px;
}

.switch-input {
  display: none;
}

.switch-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #ccc;
  cursor: pointer;
}

.switch-label::after {
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s ease-in-out;
}

.switch-input:checked + .switch-label {
  background-color: #d96932;
}

.switch-input:checked + .switch-label::after {
  transform: translateX(20px);
}

</style>

