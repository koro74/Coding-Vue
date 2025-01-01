<!--//
3.4.3 v-on 디렉티브와 수식어 사용하기
- 수식어(modifier)는 이벤트 처리 방식을 제어하는 데 사용하는 기능입니다. (106 page)
ex) @이벤트_타입.수식어
- 아래 코딩 예제는 @이벤트_타입 방식
//-->

<script>
  export default {
    methods: {
      onKeyupHandler(e) { // 키보드 누른 후 손을 땐 경우 이벤트
        if (e.keyCode === 13) { // 엔터키를친 경우
          console.log("Enter!!");
        }
      },
    },
  }
</script>

<template>
  <input type="text" @keyup="onKeyupHandler($event)" placeholder="기본 이벤트" />
  <br><br>
  <input type="text" @keyup="($event) => onKeyupHandler($event)" placeholder="=> 사용 이벤트" />  
</template>