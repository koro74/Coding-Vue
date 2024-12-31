<!--//
3.3.5 디렉티브 사용하기.

- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-bind : v-bind는 HTML 태그의 콘텐츠가 아니라 속성에 데이터를 연결할 때 사용 하는디렉티브 (90 Page)
//-->

<script>
  export default {
    data: function() {
      return {
        redClassName : "red-color",
        blueClassName : "blue-color",
        class : "yellow-color",
      };
    },
  }
</script>

<template>
  <h1 v-bind:class="redClassName">Hello, Vue JS</h1> <!--// 정규 사용 방법 //-->
  <h1 :class="blueClassName">Hello, Vue JS</h1> <!--// v-bind 생략 가능 //-->
  <h1 :class>Hello, Vue JS</h1> <!--// 3.4.x 이상 버전 부터 속성과 같은 이름으로 정의 하는 경우 생략 기능 추가 //-->
</template>

<style>
  .red-color {
    color:red;
  }

  .blue-color {
    color: blue;
  }

  .yellow-color {
    color: yellow;
  }
</style>