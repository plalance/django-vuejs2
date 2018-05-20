import Vue from 'vue';
import App from './index.vue';
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

let app = new Vue({
    el: '#app',
    data: datas,
    render: h => h(App),
});