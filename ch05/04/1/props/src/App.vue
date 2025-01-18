<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },
  }
</script>

<template>
  <UserProfile v-bind:name="`김철수`" v-bind:age="30" />
</template>