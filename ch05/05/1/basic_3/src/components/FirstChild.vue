<script>
    export default {
        inject: {
            customMessage: {
                from: "message",
                default: "message : default value",
            },

            customReverseMessage: {
                from: "reversedMessage",
                default: "reversedMessage : default value",
            },
        }
    }
</script>

<template>
    <h1>{{ customMessage }}</h1>
    <h2>{{ customReverseMessage }}</h2>
</template>