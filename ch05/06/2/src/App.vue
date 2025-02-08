<script>
  import DefaultLayout from "@/components/DefaultLayout.vue";

  export default {
    components: {
      DefaultLayout,
    },
  }
</script>

<template>
  <DefaultLayout>
    <!--// Header //-->
    <template v-slot:header>
      <header>
        <h1>Header</h1>
      </header>
    </template>

    <!--// Main //-->
    <template v-slot:main>
      <main>
        <h1>Main</h1>
      </main>
    </template>

    <!--// footer //-->
    <template v-slot:footer>
      <footer>
        <h1>footer</h1>
      </footer>
    </template>
  </DefaultLayout>
</template>