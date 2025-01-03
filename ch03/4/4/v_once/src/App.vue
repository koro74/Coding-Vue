<!--//
3.4.4 이벤트와 반응성
- 뷰에서 이벤트를 배우면 함께 알아야 하는 개념 중에 반응성이 있습니다.
  반응성(reacivity)은 데이터의 변화를 감지하고 자동으로 UI를 업데이트하는 기능입니다. (108 page)
* v-once 디렉티브로 화면 업데이트 막기 (109 page)
//-->

<script>
  export default {
    data: function() {
      return {
        number1: 0,
        number2: 0,
      };
    },

    methods: {
      increasement1() {
        this.number1++;
      },

      increasement2() {
        this.number2++;
      },
    },
  }
</script>

<template>
  <!--//
    [증가] 버튼을 누를 때마다 화면의 숫자가 1씩 증가합니다.
    뷰 애플리케이션은 값이 바뀌면 이를 감지하고 화면을 다시 렌더링합니다.(웹 브라우저는 새로고침이 발생하지 않습니다.)
  //-->
  <h1>{{ number1 }}</h1>
  <button type="button" @click="increasement1">증가1</button>
  <br><br>
  <!--//
    뷰는 반응성 시스테이 구현되어 값이 변경되면 자동으로 감지하고 화면을 업데이트합니다.
    경우에 따란 값이 변경되어도 화면을 업데이트하고 싶지 않을 때, 이럴 때는 v-once 디렉티브를 사용합니다.
    v-once 디렉티브는 정적 디렉티브로, 이를 사용하면어떠한 요소든지 한 번만 렌더링하고 이후에는 렌더링하지 않습니다.
  //-->
  <h1 v-once>{{ number2 }}</h1>
  <button type="button" @click="increasement2">증가2</button>  
</template>