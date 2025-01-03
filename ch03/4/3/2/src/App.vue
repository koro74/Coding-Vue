<!--//
3.4.3 v-on 디렉티브와 수식어 사용하기
- 수식어(modifier)는 이벤트 처리 방식을 제어하는 데 사용하는 기능입니다. (106 page)
ex) @이벤트_타입.수식어
- 아래 코딩 예제는 @이벤트_타입.수식어 방식
//-->

<script>
  export default {
    methods: {
      onKeyupHandler(e) {
        console.log("Enter!");
        console.log(e.key);
      },
    },
  }
</script>

<template>
  <input type="text" @keyup.enter="onKeyupHandler($event)" placeholder="@이벤트_타입.수식어" />
</template>