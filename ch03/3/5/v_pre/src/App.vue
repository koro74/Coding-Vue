<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-pre : v-pre는 컴파일할때 <template> 태그 영역을 건너뛰게 하는디렉티브 (89 Page)
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
  <!--// 
    v-pre 디렉티브가 사용되어서 <div> 태그 요소는 컴파일에서 제외 
    실행 시 단순 텍스트로 출력된다 {{ message }}
  //-->
  <div v-pre>{{ message }}</div>
</template>