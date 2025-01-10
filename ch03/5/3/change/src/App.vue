<!--//
3.5.3 폼 요소와 이벤트 (125 page)
* v-on input 이벤트 (125 page)
- input 이벤트는 입력 요소의 값이 변경될 때 발생하는 이벤트입니다.
- v-model 디렉티브는 한글, 한자처럼 IME가 필요한 문자는 값이 한 글자씩 늦게 인식되는 문제가 있습니다.
이 문제는 input 이벤트를 사용해 해결할 수 있습니다.
//-->

<script>
  export default {
    data: function() {
      return {
        message: "",
        skipemoji: "",
      };
    },

    methods: {
      onChangeHandler($event) {
        let val = $event.target.value;
        //this.specialChar(val);
        this.emojiCheck(val);
      },

      onKeyupHandler: function($event) {
        let val = $event.target.value;
        //this.emojiCheck(val);
      },      

      emojiCheck: function(str) { // 윈도우 이모지 제거
        //const filter = 	/((\ud83c[\udde6-\uddff]){2}|([\#\*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
        const filter = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        console.log("filter.test(str) ??>>>>> " + filter.test(str));
        if(filter.test(str)){
          var checkString = str.replace(filter,'');
          this.message = checkString;
        }
      },      

      specialChar: function(str) {
        const filter =  /^[ㄱ-ㅣ가-힣a-zA-Z0-9\s]*$/g;
        let checkString = str;

        if (checkString.search(filter) == -1) { 
          console.log("checkString.search(filter) " + checkString.search(filter));
          let validText = '';
          for (let index = 0; index < checkString.length; index++) {
            let checkingCh = checkString.charAt(index);
            if (checkingCh.search(filter) == -1) continue;
            validText += checkingCh;
          } 
          
          console.log("validText >>>>>>>> " + validText);
          this.message = validText;

          return false;
        }
        else {
          this.message = str;

          return true;
        }
        console.log("val check " + str);
      },      
    },
  }
</script>

<template>
  <input type="text" v-on:input="onChangeHandler($event)" v-model="message" />
  <!--<p>{{ message }}</p>-->
  <br><br>
  <input type="text" v-on:keyup="onKeyupHandler($event)" v-model="skipemoji" />
</template>