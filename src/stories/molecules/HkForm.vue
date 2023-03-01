<template>
<div class="hk-form-wrapper">
  <form class="hk-form">
    <div class="hk-form-header">
<!--        <slot name="header">-->
<!--          -->
<!--        </slot>-->
      <span>Login</span>
    </div>
    <div class="hk-form-body">
<!--      <slot name="body">-->
<!--        -->
<!--      </slot>-->
      <hk-input id="1" placeholder="Email" type="email"></hk-input>
      <hk-input id="2" placeholder="Password" type="password"></hk-input>
    </div>
    <div class="hk-form-footer">
<!--      <slot name="footer">-->
<!--        -->
<!--      </slot>-->
      <hk-button type="secondary">login</hk-button>
    </div>
  </form>
</div>
</template>

<script>
import HkButton from "../atoms/HkButton.vue";
import HkInput from "../atoms/HkInput.vue";

export default {
  name: "HkForm",
  components: {HkInput, HkButton}
}
</script>

<style scoped>
.hk-form-wrapper{
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  width: fit-content;
  border: #d2d2d2 solid 1px;
  border-radius: 10px;
}
span{
  font-size: 22px;
  color: #2c3e50;
}
.hk-form{
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
}
.hk-form-header{
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: solid 1px #4d4d4d;
}
.hk-form-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
.hk-form-footer{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}
</style>