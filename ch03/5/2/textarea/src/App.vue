<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 여러 줄 입력 요소의 값 가져오기 (117 page)
- v-model 디렉티브를 사용하면 초기값을 초기 렌더링 화면에서 보여주거나(<script> -> <template>)
사용자가 입력한 값을 업데이트(<template> -> <script>)할 수 있습니다.
- <textarea>
//-->

<script>
  export default {
    data: function() {
      return {
        message: "",
      };
    },

    methods: {
      printData: function() {
        console.log("ID : " + this.message);
        console.log(`ID : ${this.message}`);
      },
    },
  }
</script>

<template>
  <form id="loginForm">
    <textarea v-model="message"></textarea>
    <button type="button" v-on:click="printData">데이터 출력</button>
  </form>
</template>