<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 한 줄 입력 요소의 값 가져오기 (116 page)
- <input type="text">
//-->

<script>
  export default {
    data: function() {
      return {
        uid: "",
        upw: "",
      };      
    },

    methods: {
      login: function() {
        console.log(`\`\` 기호 사용 시 id: ${this.uid}`);
        console.log("큰따옴표 사용 시 id : ${this.uid}");
        console.log('작은따옴표 사용 시 id : ${this.uid}');
        console.log("${} 사용 안하고 this.uid 로 사용 하기 ID >>>> " + this.uid);
        console.log(`pw: ${this.upw}`);
      },
    },
  }
</script>

<template>
  <form id="loginForm">
    <label for="uid">아이디 : <input type="text" id="uid" v-model="uid" /></label>
    <label for="upw">비밀번호 : <input type="password" id="upw" v-model="upw" /></label>
    <button type="button" v-on:click="login">로그인</button>
  </form>
</template>