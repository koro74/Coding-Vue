<!--//
3.4.1 v-on 디렉티브와 methods 옵션 속성으로 이벤트 연결하기
ex) v-on:이벤트_타입="이벤트_헨들러" (102 page)
- 이벤트 타입(click, keyup, keydown...)은 이벤트 종류를 식별하는 문자열로 자바스크립와 개념이 같음
- 뷰에서는 data 옵션 속성으로 정의했다면, 메서드는 methods 옵션 속성으로 정의
//-->

<script>
  export default {
    methods: {
      clickHandler() { // ES6의 단축 메서드명으로 표기를 해야 한다고합니다.
        alert("click!");
      },
    },
  }
</script>

<template>
  <button type="button" v-on:click="clickHandler">클릭</button>
  <br><br>
  <button type="button" v-on:dblclick="clickHandler">더블 클릭</button>
  <br><br>
  <button type="button" @dblclick="clickHandler">축약형 더블 클릭</button> <!--// 축양형 v-on:대신 @ 사용 //-->
</template>