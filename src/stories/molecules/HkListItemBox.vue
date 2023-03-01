<template>
  <div class="hk-list-item-wrapper">
    <hk-card :background-color="background">

      <div class="hk-list-item">

        <div class="hk-list-item-img">
          <hk-image image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"
          />
        </div>
        <div class="hk-item-content">
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
            <hk-button type="secondary">Select</hk-button>
          </div>
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
  name: "HkListItemBox",
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
  width: 800px;
}

.hk-list-item-wrapper .hk-list-item > img {
  border-radius: 4px;
}

.hk-list-item-wrapper .hk-list-item {
  box-sizing: border-box;
  color: #d0d0d0;
  height: 400px;
  position: relative;
  background-color: #1f4456;
}
.hk-list-item-img{
  position: absolute;
  z-index: 0;
  width: 600px;
}
.hk-item-content{
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: rgb(31,68,86);
  background: linear-gradient(90deg, rgba(31,68,86,0) 0%, rgba(31,68,86,1) 77%, rgba(31,68,86,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
}
.hk-list-item-wrapper .hk-list-item .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-right: 10px;
}
.hk-list-item-wrapper .hk-list-item .content .title {
  margin: 0;
}
.hk-list-item-wrapper .hk-list-item .content .badge {
  color: #d96932;
  width: fit-content;
  align-self: flex-end;
}
.hk-list-item-wrapper .hk-list-item .content .description {
}

.hk-list-item-wrapper .hk-list-item .action {
  display: flex;
  flex-direction: row;
  padding:10px;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  width: 300px;
  border-top: 1px solid #a4a2a2;
}
</style>