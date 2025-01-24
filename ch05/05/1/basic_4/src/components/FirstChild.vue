<script>
    import { message, reversedMessage } from "@/keys.js";

    export default {
        inject: {
            customMessage: {
                from: message,  // import로 불러온 symbol 값
                default: "default Symbol value",
            },

            customReversedMessage: {
                from: reversedMessage, // import로 불러온 symbol 값
                default: "default Symbol value",
            },
        },
    }
</script>

<template>
    <h1>{{ customMessage }}</h1>
    <h2>{{ customReversedMessage }}</h2>
</template>