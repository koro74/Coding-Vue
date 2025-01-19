<script>
    export default {
        inject: ["message", "reversedMessage"],
    }
</script>

<template>
    <h1>{{ message }}</h1>
    <h2>{{ reversedMessage }}</h2>
</template>