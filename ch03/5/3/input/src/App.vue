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
  <br>
  {{ message }}
</template>