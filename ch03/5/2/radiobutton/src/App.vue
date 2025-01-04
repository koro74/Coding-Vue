<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 라디오 버튼 요소 (120 page)
- 라디오 버튼 요소는 체크박스 요소와 다르게 1개만 선택할 수 있습니다.
- v-model 디렉티브로 바인딩할 데이터 속성의 값이 value 속성의 값과 일치하면 체크 표시된 상태로 렌더링됩니다.
- <input type="radio" />
//-->

<script>
  export default {
    data: function() {
      return {
        gender: "male",
      };
    },

    methods: {
      printData: function() {
        console.log(">>>>>>> " + this.gender);
        console.log(`>>>>>>> ${this.gender}`);
      },
    },
  }
</script>

<template>
  <form id="loginForm">
    <lbel for="male">
      <!--// 초기값이 male로 되어 있어 male 라디오버튼 선택된 상태로 렌더리된다. //-->
      <input type="radio" id="male" name="gender" v-model="gender" value="male" />male
    </lbel>
    <label for="female">
      <input type="radio" id="female" name="gender" v-model="gender" value="female" />female
    </label>
    <button type="button" v-on:click="printData">확인</button>
  </form>
</template>