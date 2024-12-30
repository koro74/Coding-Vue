<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-text : v-text는 값을 단순하게 텍스트로 출력하게 하는 디렉티브입니다. (88 Page)
//-->

<script>
  export default{
    data: function() {
      return {
        message: "<h1>Hello, Vue JS!</h1>",
      };
    },
  }
</script>

<template>
  <div v-text="message"></div>
</template>