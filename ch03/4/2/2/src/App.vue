<!--//
3.4.2 v-on 디렉티브와 이벤트 객체 사용하기
- 뷰에서는 이벤트 핸들러의 매개변수로 $event를 전달하면 이벤트 객체를 사용할 수 있습니다. (105 page)
- 이벤트 객체와 일반 매개변수(값)를 전달할 경우
//-->

<script>
  export default {
    methods: {
      clickHandler(event, message) {
        console.log(event);
        console.log(message);
      },
    },
  }
</script>

<template>
  <button type="button" @click="clickHandler($event, 'Hello')">클릭</button>
</template>