<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-else-if, v-else : v-else-if, v-else는 if/else if/else 와 같은 구문이다. (94 Page)
//-->

<script>
  export default {
    data: function() {
      return {
        condition: "A",
      };
    },
  }
</script>

<template>
  <p v-if="condition === 'A'">condition 데이터의 값은 A입니다.</p>  <!--// condition 값은 A 해당 내용이 렌더링된다. //-->
  <p v-else-if="condition === 'B'">condition 데이터의 값은 B입니다.</p>
  <p v-else-if="condition === 'C'">condition 데이터의 값은 C입니다.</p>
  <p v-else-if="condition === 'D'">condition 데이터의 값은 D입니다.</p>
  <p v-else>어떤 조건에도 해당하지 않습니다.</p>
</template>