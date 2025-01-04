<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 콤보박스(select box) 요소 (122 page)
- v-model 디렉티브를 사용하면 콤보박스 요소도 양방향 데이터 바인딩을 처리할 수 있습니다.
//-->

<script>
  export default {
    data: function() {
      return {
        selectItem: "cafeLatte",
      };
    },

    methods: {
      printData: function() {
        console.log(">>>>> " + this.selectItem);
        console.log(`>>>>> ${this.selectItem}`);
      },
    },
  }
</script>

<template>
  <form id="loginForm">
    <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="espresso">에스프레소</option>
      <option value="cafeLatte">카페라떼</option>
    </select>
    <button type="button" v-on:click="printData">확인</button>
  </form>
</template>