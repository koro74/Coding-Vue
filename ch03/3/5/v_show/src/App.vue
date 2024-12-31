<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-show :  v-show는 v-if 디렉티브처럼 조건부 렌더링 기능을 구현하는 디렉티브 라고책에서 설명하고 있다. (95 Page)
- 쉽게 말하면 style 속성 중하나인 display: none; display: ;(block) 과 같은 동작을 하는 디렉티브라 생각하면 된다.
- 차이점은 v-if는 조건에 맞지 않는 경우 렌더링을 하지 않고, v-show는 무조건 렌더링후 참, 거짓에 따라 display 처리를 한다는 점
//-->

<script>
  export default {
    data: function() {
      return {
        condition: true,
      };
    },
  }
</script>

<template>
  <p v-show="condition">v-show 디렉티브는 조건이 참입니다.(style="display: ;" 동일)</p>
  <p v-show="!condition">v-show 디렉티브는 조건이 거짓입니다.(style="display: none;" 동일)</p>
</template>