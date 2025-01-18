<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },

    data: function() {
      return {
        userName: "김철수",
        age: 30,
      };
    },
  }
</script>

<template>
  <UserProfile v-bind:user-name="userName" />
</template>