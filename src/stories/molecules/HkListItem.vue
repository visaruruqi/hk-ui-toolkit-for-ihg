<template>
<div class="hk-list-item-wrapper">
  <hk-card :background-color="background">

    <div class="hk-list-item">

      <hk-image
          image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"
          bottom-right-radius="0px"
          top-right-radius="0px"
      />

      <div class="content">
        <h3 class="title">{{ title }}</h3>
        <span class="badge">{{lastRoomAvailable}}</span>
        <div class="description">
          {{description}}
        </div>
      </div>
      <div class="action">
        <span>Non Refundable</span>
        <span>${{price}}</span>
        <hk-button type="primary">Select</hk-button>
      </div>
    </div>

  </hk-card>
</div>
</template>

<script>
import HkImage from "../atoms/HkImage";
import HkCard from "../atoms/HkCard";
import HkButton from "../atoms/HkButton";
export default {
  name: "HkListItem",
  components: {HkButton, HkCard, HkImage},
  props: {
    imageUrl: {
      type:String,
      default: 'https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      default: 'Lorem Ipsum'
    },
    lastRoomAvailable: {
      type: String,
      required: false,
      default: 'Only 1 remaining'
    },
    price: {
      type: Number,
      default: 199
    },
    background: {
      type: String,
      default: '#d4dde1'
    }
  }
}
</script>

<style scoped>
  .hk-list-item-wrapper {
    box-sizing: border-box;
    height: fit-content;
  }

  .hk-list-item-wrapper .hk-list-item > img {
    border-radius: 4px;
  }

  .hk-list-item-wrapper .hk-list-item {
    box-sizing: border-box;
    color: #4d4d4d;
    display: grid;
    grid-template-columns: 20% 50% 25%;
    grid-template-rows: auto;
    height: auto;
    grid-column-gap: 20px;
  }

  .hk-list-item-wrapper .hk-list-item .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  .hk-list-item-wrapper .hk-list-item .content .title {
    margin: 0;
  }
  .hk-list-item-wrapper .hk-list-item .content .badge {
    background-color: #1f4456;
    color: white;
    padding:5px;
    border-radius: 4px;
    width: fit-content;
  }
  .hk-list-item-wrapper .hk-list-item .content .description {
  }

  .hk-list-item-wrapper .hk-list-item .action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    border-left: 1px solid #a4a2a2;
  }
</style>
