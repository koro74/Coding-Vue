<script>
  import FirstChild from '@/components/FirstChild.vue';

  export default {
    components: {
      FirstChild,
    },

    provide: function() {
      return {
        message: this.message,
        reversedMessage: this.reversedMessage,
      };
    },

    data: function() {
      return {
        message: "Hello, Vue JS!",
      };
    },

    computed: {
      reversedMessage: function() {
        return this.message.split("").reverse().join("");
      },
    },
  }
</script>

<template>
  <FirstChild />
</template>