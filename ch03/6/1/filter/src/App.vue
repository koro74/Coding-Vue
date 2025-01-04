<!--//
3.6.1 계산된 속성 (130 page)
- 계산된 속성(computed)은 옵션스 API에서 제공하는 속성 중 하나로, computed 옵션 속성으로 정의해 사용할 수 있습니다.
- computed 옵션 속성은 컴포넌트에서 자주 사용하는 데이터를 캐시해 애플리케이션의 성능을 향상시키는데 목적이 있습니다.
- computed 옵션 속성은 함수를 값으로 가지는 methods 옵션 속성과 같은 속성을 값으로 가집니다.
- computed 옵션 속성에 정의 함수는 내부에서 항상 데이터를 참조하는데,  한 번 참조한 데이터는 값이 변경되기 전까지
computed 옵션 속성에 의해 캐싱됩니다.

- 꼭 캐싱이 목적이 아니더라도 computed 옵션 속성으로 데이터를 미리 만들어놓으면 코드의 가독성을 훨씬 높일 수 있습니다.
- 아래 코드는 computed 적용 (133 page) 
//-->

<script>
  export default {
    data: function() {
      return {
        numArr: [1, 2, 3, 4, 5],
      };
    },

    computed: {
      evenSum: function() {
        return this.numArr
          .filter((v) => v % 2 === 0)
          .reduce((acc, cur) => acc + cur, 0);
      },
    },
  }
</script>

<template>
  <h1>{{ evenSum }}</h1>
</template>