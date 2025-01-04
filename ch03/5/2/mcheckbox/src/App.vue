<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 체크박스 요소에서 값 가져오기 (119 page)
- 체크박스 복수 선택지인 경우 v-model 디렉티브로 바인딩할 데이터를 배열로만듭니다.
- 배열에 데이터와 연결할 체크 박스 요소의 value 속성 값을 넣어주면 해당 체크박스 요소를 초기에 체크 표시된
상태로 렌더링할 수 있습니다.
- <input type="checkbox" />
//-->

<script>
  export default {
    data: function() {
      return {
        fruits: ["banana", "orange"], // 1. 렌더링 시 바나나, 오렌지체크박스 선택된 상태
        //fruits: [],                   // 2. 렌더링 시 체크박스 모두 미체크 상태
      };
    },

    methods: {
      printData: function() {
        console.log(`fruits : ${this.fruits}`); // 선택된 입력 요소의 value 속성 값 출력
        console.log("checkbox : " + this.fruits); // 선택된 입력 요소의 value 속성 값 출력
        console.log(this.fruits);                 // 선택된 엽력 요소 value 배열 값 형식으로 출력
      },
    },
  }
</script>

<template>
  <form id="loginForm">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana" />banana
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" v-model="fruits" value="orange" />orange
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruits" value="apple" />apple
    </label>
    <button type="button" v-on:click="printData">확인</button>
  </form>
</template>