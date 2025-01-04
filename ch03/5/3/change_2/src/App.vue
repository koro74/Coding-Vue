<!--//
3.5.3 폼 요소와 이벤트 (125 page)
* v-on change 이벤트 (126 page)
- change 이벤트는 폼 요소의 값이 변경되면 발생하는 이벤트입니다.
- 아래 코드는 사용자가 콤보박스로 선택한 값에 따라 가격을 다르게 보여줍니다.
- 사용자가 콤보박스로 선택한 값은 v-model 디렉티브로 양방향 데이터 바인딩만 해도 알 수 있습니다.
하지만 선택한 값에 따라 가격을 다르게 나타내는 것은 v-model 디렉티브만으로는 할 수 없습니다.
이럴 때 아래 코드처럼 change 이벤트를 사용하면 사용자가 선택한 값에 따른 처리를 추가할 수 있습니다.
//-->

<script>
  export default {
    data: function() {
      return {
        selected : "banana", // 초기값이 바나나, 500원으로 되어 있어 렌더링 시해당 값으로 출력
        price: 500,
      };
    },

    methods: {
      onChangeHandler: function($event) { //v-on change 이벤트 발생 시 호출
        if (this.selected === "banana") {
          this.price = 500;
        }

        if (this.selected === "apple") {
          this.price = 700;
        }

        if (this.selected === "selected") {
          this.price = 0;
        }
      },
    },
  }
</script>

<template>
  <select v-model="selected" v-on:change="onChangeHandler">
    <option value="selected">과일을 선택하세요.</option>
    <option value="banana">바나나</option>
    <option value="apple">사과</option>
  </select>
  가격 : {{ price }}원
</template>