/*
5.2 컴포넌트 정의하기 (186 page)
5.2.2 컴포넌트 생성하기
5.2.3 컴포넌트 등록하기
- 지역 등록(191 page)
컴포넌트를 '지역(local) 등록'한다는 것은 컴포넌트를 등록한 곳에서만 사용할 수 있게 한다는 뜻입니다.
옵션스 API 속성 중에 components 속성이 있습니다. 컴포넌트를 불러온 후, components 속성을 사용하면
컴포넌트를 지역 등록할 수 있습니다.
*/

//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
