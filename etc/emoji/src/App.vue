<script>
  export default {
    data: function() {
      return {
        emojiMessage: "",
        emojiInput: "",
      };
    },

    methods: {
      emojiCheckFun: function() {
        const emojiStr = this.emojiInput;
        this.emojiCheck(emojiStr);
      },

      emojiCheck: function(str) { // 윈도우 이모지 제거        
        const filter = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        console.log("filter.test(str) ??>>>>> " + filter.test(str));
        if(filter.test(str)){
          var checkString = str.replace(filter,'');
          this.emojiMessage = checkString;
        }
      },      
    },
  }
</script>

<template>
  <label for="emojiInput"><input type="text" v-model="emojiInput" style="width: 300px;" /></label>
  &nbsp;&nbsp;<button type="button" v-on:click="emojiCheckFun">이모지 체크</button>
  <h1 style="margin-top: 20px; color: red; font-weight: bold;">{{ emojiMessage }}</h1>
</template>