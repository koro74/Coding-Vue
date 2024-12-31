<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-if : v-if는 <template> 태그 영역에서 조건부 렌터링 기능을 구현하는 디렉티브 (92 Page)
-v-if 조건문 if 동일한 동작을한다고 보면 된다.
//-->
<script>
  export default {
    data: function() {
      return {
        visible: true,
        unvisible: false,
      };
    },
  }
</script>

<template>
  <p v-if="visible">이 요소는 랜더링됩니다.</p> <!--// 조건문 visible true 참으로 랜더링 된다. //-->
  <p v-if="unvisible">이 요소는 랜더링되지 않습니다.</p> <!--// 조건문 unvisible false이나 참을 체크하고 있어 랜더링 되지 않는다.  //-->
  <p v-if="!unvisible">이 요소는 false 조건에 맞으므로 랜더링됩니다.</p> <!--// 조건문 unvisible false를 체크하고 있어 랜더링 된다. //-->
</template>

<style></style>