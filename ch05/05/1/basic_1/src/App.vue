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
        reversedMessage: "Vue JS provide TEST!",
      };
    },
  }
</script>

<template>
  <FirstChild />
</template>