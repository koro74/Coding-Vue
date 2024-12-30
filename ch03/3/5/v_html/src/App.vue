<script>
  export default{
    data: function() {
      return {
        message: "<h1>Hello, Vue JS!</h1>",
      };
    },
  }
</script>

<template>
  <!--// {{  message }} //-->
  <div v-html="message"></div>
</template>