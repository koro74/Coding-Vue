<!--//
3.6.1 계산된 속성 (130 page)
- 계산된 속성(computed)은 옵션스 API에서 제공하는 속성 중 하나로, computed 옵션 속성으로 정의해 사용할 수 있습니다.
- computed 옵션 속성은 컴포넌트에서 자주 사용하는 데이터를 캐시해 애플리케이션의 성능을 향상시키는데 목적이 있습니다.
- 아래 코드는 computed 옵션 속성을 적용하기 전 코드입니다.
//-->

<script>
  export default {
    data: function() {
      return {
        firstName: "Gildong",
        lastName: "Hong",
      };
    },
  }
</script>

<template>
  <!--// 뷰 애플리케이션은 <template> 태그에 데이터를 바인딩할 때마다 각 데이터 속성의 값을 참조합니다. //-->
  <h1>{{ lastName }} {{ firstName }}</h1>
  <h1>{{ lastName }} {{ firstName }}</h1>
</template>