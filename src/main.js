import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Ant from 'ant-design-vue';
import './styles/index.less';
import 'animate.css';

createApp(App).use(Ant).use(router).use(store).mount('#app')
