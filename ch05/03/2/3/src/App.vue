<!--//
  5.3 컴포넌트 생명주기 이해하기
  5.3.2 템플릿 ref
  - 컴포넌트 참조 (202 page)
//-->

<script>
import FirstChild from '@/components/FirstChild.vue';

export default {
  components: {
    FirstChild,
  },
}
</script>

<template>
  <FirstChild ref="child" />
</template>