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
       // const filter = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        //const filter = 	/((\ud83c[\udde6-\uddff]){2}|([\#\*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
        const filter = '[^\\p{L}\\p{N}]';
        let regex = new RegExp(filter,'gu');
        if(regex.test(str)){
          let checkString = str.replace(regex,'');
          this.emojiMessage = checkString;
        }
        else {
          this.emojiMessage = str;
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