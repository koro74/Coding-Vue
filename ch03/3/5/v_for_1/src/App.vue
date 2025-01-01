<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-for : v-for 뷰에서 반복적으로 렌더링하는 HTML 요소를 생성하는데 사용하는 구문이다. (97 Page)
ex) 
1) v-for="값 in 배열" key="고유값"
2) v-for="(값, 인덱스) in 배열" :key="고유값"
//-->

<script>
  export default {
    data: function() {
      return {
        fruits: ["apple", "banna", "orange"],
        titleClass1: "red-color",
        titleClass2: "blue-color",
      };
    },
  }
</script>

<template>
  <h1 v-bind:class="titleClass1"> fruits 데이터의 반복 결과 - index 포함</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index"> <!--// v-for="(값, 인덱스) in 배열" key="고유값" 결과값은 동일 //-->
      인덱스 : {{ index }} => 값 : {{ fruit }}
    </li>
  </ul>

  <h1 v-bind:class="titleClass2"> fruits 데이터의 반복 결과 - index 제거</h1>
  <ul>
    <li v-for="fruit, index in fruits" :key="index"> <!--// v-for="값 in 배열" key="고유값" 결과값은 동일 //-->
      인덱스 : {{ index }} => 값 : {{ fruit }}
    </li>
  </ul>  
</template>

<style>
  .red-color {
    color: red;
    font-weight: bold;
  }

  .blue-color {
    color: blue;
    font-weight: bold;
  }
</style>