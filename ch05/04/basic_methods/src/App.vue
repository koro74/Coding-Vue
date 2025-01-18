<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },

    methods: {
      printHello: function() {
        alert("안녕하세요!");
      },
    },
  }
</script>

<template>
  <UserProfile v-on:print-hello="printHello" />
</template>