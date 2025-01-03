<!--//
3.4.4 이벤트와 반응성
- 뷰에서 이벤트를 배우면 함께 알아야 하는 개념 중에 반응성이 있습니다.
  반응성(reacivity)은 데이터의 변화를 감지하고 자동으로 UI를 업데이트하는 기능입니다. (108 page)

  * v-memo 디렉티브로 렌더링 결과 저장하기 (110 page)
  - v-memo 디렉티브는 Vue 3.2 이상에서 사용할 수 있으며, 메모이제이션 기술로 <template> 태그의 구성 요소를
  효율적으로 렌더링하고 싶을 때 사용합니다.
  v-memo 디렉티브는 다음 형식으로 사용하며, 디렉티브에 할당된 조건을 하나라도 만족하면 v-memo 디렉티브가
  사용된 요소를 다시 렌더링합니다.
  ex) <태그 v-memo="[조건1, 조건2, ...]"></태그>
//-->

<script>
  export default {
    data: function() {
      return {
        name: "철수",
        gender: "남자",
        age: 20,
      };
    },
  }
</script>

<template>
  <div v-memo="[name, gender]">
    <p>이름: {{ name }}</p>
    <p>성별: {{ gender }}</p>
    <p>나이: {{ age }}</p>
  </div>

  <button type="button" @click="name = '영희'">이름 변경</button>
  <button type="button" @click="gender = '여자'">성별 변경</button>
  <button type="button" @click="age = 30">나이 변경</button>
</template>