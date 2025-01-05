<!--//
3.6.2 감시자 속성 (133 page)
- 감시자 속성(watch)도 옵션스 API에서 제공하는 속성 중 하나로, watch 옵션 속성으로 정의해 사용할 수 있습니다.
- watch 옵션 속성은 데이터의 변경을 감시하고, 변경이 감지될 때마다 특정 동작을 수행할 수 있게 합니다.

* 깊은 사용법 (136 page)
- 초기값이 변경되거나 같은 값으로 변경되는 것도 watch 옵션 속성으로 감시해야 한다면 깊은 사용법을 적용해야 합니다.

- 형식)
watch: {
  dataOrComputed: { // 데이터(data)나 계산(computed)된 속성의 키(key)를 적습니다.
    handler(newVal, oldVal) {
      ...
      // 변경 사항이 있을 때 실행할 함수를 정의 합니다.
      // 이 함수는 새로운 값(newVal)과 이전 값(oldVal)을 매개변수로 받습니다.
    },

    // 중첩된 객체 또는 배열의 내부 변경을감시할지 설장합니다. 
    // true면 감시하고, false면 감시하지 않습니다. 기본값은 false입니다.
    depp: false,

    // 초기 렌더링 시 콜백 함수를 호출할지 설정합니다. true면 호출하고, false면 호출 하지 않습니다.
    // 기본값은 false입니다.
    immediate: false,

    // 콜백 함수의 실행타이밍을 결정합니다. 데이터 변경이 뷰에 반영되고, 콜백 함수가 호출되길 원하면 "post"
    // 뷰에 반영되기 전에 콜백 함수부터 호출되길 원하면 "pre", 하나의 동작에 여러 번 변경되더라도 동기적으로
    // 모든 변화를 감시하고 싶다면 "sync"입니다.
    flush: "pre",

    // Vue 3.4에서 추가된 속성으로 once 속성의 값을 true로 지정하면 변경 사항을 한번만 감시합니다.
    once: true,
  },
},
//-->

<script>
  export default {
    data: function() {
      return {
        arr: [0, 1, 2],
        obj: {name: "chulsu"},
      };
    },

    watch: {
      arr: {
        handler(newValue, oldValue) {
          console.log(`old value : ${oldValue}`);
          console.log(`new value : ${newValue}`);
        },
        deep: true,
      },

      obj: {
        handler(newValue, oldValue) {
          console.log(`obj old value : ${JSON.stringify(oldValue)}`);
          console.log(`obj new value : ${JSON.stringify(newValue)}`);
        },
        deep: true,
      },
    },
  }
</script>

<template>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button v-on:click="arr.push(3)">배열 변경</button>
  <button v-on:click="obj.age = 20">객체 변경</button>
</template>