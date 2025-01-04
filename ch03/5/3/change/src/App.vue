<!--//
3.5.3 폼 요소와 이벤트 (125 page)
* v-on input 이벤트 (125 page)
- input 이벤트는 입력 요소의 값이 변경될 때 발생하는 이벤트입니다.
- v-model 디렉티브는 한글, 한자처럼 IME가 필요한 문자는 값이 한 글자씩 늦게 인식되는 문제가 있습니다.
이 문제는 input 이벤트를 사용해 해결할 수 있습니다.
//-->

<script>
  export default {
    data: function() {
      return {
        message: "",
      };
    },

    methods: {
      onChangeHandler($event) {
        this.message = $event.target.value;
      },
    },
  }
</script>

<template>
  <input type="text" v-on:input="onChangeHandler($event)" />
  {{ message }}
</template>