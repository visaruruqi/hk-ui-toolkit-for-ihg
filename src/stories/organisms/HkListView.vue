<template>
<div class="listview-wrapper">
  <hk-list-item
      last-room-available="Only 3 remaining"
      description="This is a non-smoking 450 Sq Deluxe Room with Balcony And Two Comfortable Queen Beds and has features like Air Conditioner, Internet accessibility and so on."
      title="DELUXE TWO QUEEN BEDS WITH BALCONY"
      price="299"
      image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"
  ></hk-list-item>
  <hk-list-item
      last-room-available="Only 2 remaining"
      description="Write your unique Hollywood story with our lavish 450 Sq Deluxe Room. Enjoy lazy afternoons on outdoor sun deck with relaxed seating perfect for business travelers or vacationers alike."
      title="DELUXE KING BED WITH BALCONY"
      price="199"
      image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"

  ></hk-list-item>
  <hk-list-item
      last-room-available="Only 1 remaining"
      description="Stylish and sophisticated, 575 sq ft. The IHG Suite  at our hotel feature a generous bedroom with a king-sized bed, separate spaces for living and an ensuite bathroom."
      title="THE IHG SUITE"
      price="399"
      image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"

  ></hk-list-item>
  <hk-list-item
      last-room-available="Only 3 remaining"
      description="Experience understated elegance in a Preferred Large Room at our hotel, complete with the choice of a king-sized bed, a spacious ensuite bathroom, and complimentary Internet access."
      title="PREFERRED KING BED"
      price="400"
      image-url="https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2xlZXBpbmclMjByb29tfGVufDB8fDB8fA%3D%3D"

  ></hk-list-item>
</div>
</template>

<script>
import HkListItem from "../molecules/HkListItem";
export default {
  name: "HkListView",
  components: {HkListItem}
}
</script>

<style scoped>

</style>
