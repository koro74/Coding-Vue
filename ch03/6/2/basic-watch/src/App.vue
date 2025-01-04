<!--//
3.6.2 감시자 속성 (133 page)
- 감시자 속성(watch)도 옵션스 API에서 제공하는 속성 중 하나로, watch 옵션 속성으로 정의해 사용할 수 있습니다.
- watch 옵션 속성은 데이터의 변경을 감시하고, 변경이 감지될 때마다 특정 동작을 수행할 수 있게 합니다.

* 기본 사용법
- watch 옵션 속성은 데이터 속성과 같은 식별자를 사용하는 함수를 값으로 가집니다. (134 page)
//-->

<script>
  export default {
    data: function() {
      return {
        inputStr: "", // inputStr 데이터 속성을 감시
      };
    },

    watch: {
      inputStr(newValue, oldValue) { // watch 옵션 속성에 inputStr 함수를 정의해야한다.
        console.log(`old value : ${oldValue}`);
        console.log(`newvalue : ${newValue}`);
      },
    },
  }
</script>
<template>
  <input type="text" v-model="inputStr" />
</template>