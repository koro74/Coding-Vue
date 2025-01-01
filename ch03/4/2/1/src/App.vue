<!--//
3.4.2 v-on 디렉티브와 이벤트 객체 사용하기
- 뷰에서는 이벤트 핸들러의 매개변수로 $event를 전달하면 이벤트 객체를 사용할 수 있습니다.
- => 를 이용 함수를 사용하는 방법도 있습니다.
//-->

<script>
  export default {
    methods: {
      clickHandler(e) {
        console.log(e);
      },
    },
  }
</script>

<template>
  <button type="button" @click="clickHandler($event)">클릭</button>
  <br><br>
  <button type="button" @click="($event) => clickHandler($event)">클릭</button>
  <br><br>
  <button type="button" @dblclick="clickHandler($event)">더블 클릭</button>
  <br><br>
  <button type="button" @dblclick="($event) => clickHandler($event)">더블 클릭</button>
</template>