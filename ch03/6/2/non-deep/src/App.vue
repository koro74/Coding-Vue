<!--//
3.6.2 감시자 속성 (133 page)
- 감시자 속성(watch)도 옵션스 API에서 제공하는 속성 중 하나로, watch 옵션 속성으로 정의해 사용할 수 있습니다.
- watch 옵션 속성은 데이터의 변경을 감시하고, 변경이 감지될 때마다 특정 동작을 수행할 수 있게 합니다.

* 깊은 사용법
- 뷰에서 모든 데이터 속성은 값이 초기화되기 전까지 null 값을 가지고 있습니다. (135 page)
- 이후 컴포넌트가 초기화되면 정의한 값이 할당됩니다.

- 다음과 같이 데이터 속성이 정의된 코드가 있을 대 데이터는 임시로 null 값을 가지고 있다가 초기화되면서 0이 할당됩니다.
<script>
  export default {
    data: function() {
      return {
        num: 0,
      };
    },
  }
</script>

- 그런데 watch 옵션 속성은 기본적으로 null에서 0이 할당되는 순간을 감지하지 못합니다.
- 이 값 외에도 배열이나 객체의 변경도 감지하지 못합니다.
- 다음코드처럼 배열에 새로운 값을 추가하거나 객체의 속성을 변경해도 확인되지 않습니다.
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
      arr(newValue, oldValue) {
        console.log(`old value : ${oldValue}`);
        console.log(`new value : ${newValue}`);
      },
      obj(newValue, oldValue) {
        console.log(`obj old value : ${JSON.stringify(oldValue)}`);
        console.log(`obj new value : ${JSON.stringify(newValue)}`);
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