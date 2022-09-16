import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')
var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
