<!--//
3.5.3 폼 요소와 이벤트 (125 page)
* v-on keyup 이벤트 (128 page)
- 입력 요소에서 키보드의 키를 눌렀다가 뗐을 때 발생하는 이벤트입니다.
- keyup 이벤트는 주로 사용자의 키 입력에 따라 코드를 동적으로 처리해야 하는 경우에 유용합니다.
//-->

<script>
  export default {
    methods: {
      onKeyupHandler: function() {
        console.log("Keyup Event!");
      },
    },
  }
</script>

<template>
  <input type="text" v-on:keyup="onKeyupHandler" />
</template>