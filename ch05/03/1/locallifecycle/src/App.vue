<!--//
5.3.1 라이프사이클 훅 (196 page)
- 라이프사이클 훅 호출 확인 (198 page)
- 지역 등록을 이용 
//-->

<script>
  import FirstChild from '@/components/FirstChild.vue'; // 1)
  // 1) FirstChild  컴포넌트를 지역 등록하기 위해 불러옵니다.

  export default {
    components: {
      FirstChild, // 2)
      // 2) 불러온 FirstChild 컴포넌트를 components 옵션 속성으로 지역 등록합니다
    },

    data: function() {
      return {
        visible: true,
      };
    },

    beforeCreate: function() {
      console.log("beforeCreate");  
    },

    created: function() {
      console.log("created");
      // 3) 컴포넌트가 생성되고 3초 뒤에 visible 데이터의 값을 false로     
      setTimeout(() => {     
        this.visible = false;        
        console.log("3초 후 ===============> " + this.visible);
      }, 3000);
    },

    beforeMount: function() {
      console.log("beforeMount");
    },

    mounted: function() {
      console.log("mounted");
    },

    beforeUpdate: function() {
      console.log("beforeUpdate");
    },

    updated: function() {
      console.log("updted");
    },

    beforeUnmount: function() {
      console.log("beforeUnmount");
    },

    unmounted: function() {
      console.log("unmounted");
    },
  }
</script>

<template>
  <FirstChild v-if="visible" /> 
  <!--//
    visible 데이터의 값이 true일 때만 FirstChild 컴포넌트를 렌더링합니다.
    3)에 의해 3초 뒤 FirstChild 컴포넌트가 DOM에서 제거됩니다.
  //-->
</template>