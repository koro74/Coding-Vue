<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* 체크박스 요소에서 값 가져오기 (118 page)
- 사용자는 체크박스 요소에 체크 표시를 하거나 하지 않도록 상호작용할 수 있습니다.
- 초기값이 논리형 값 중 하나인 true면 초기에 체크 표시된 상태로 해당 데이터를 렌더링할 수 있습니다.
- <input type="checkbox" />
//-->

<script>
  export default {
    data: function() {
      return {
        fruits: true, // true(체크), false(미체크)
      };
    },
  }
</script>

<template>
  <form id="loginForm">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana" />banana
    </label>
  </form>
</template>