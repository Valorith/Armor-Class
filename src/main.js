/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import DashboardPlugin from "./plugins/dashboard-plugin";
import App from "./App.vue";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV93D3Rl15ISDA7F-0sTTf3d29fA6vXTQ",
  authDomain: "eqraidprofiler.firebaseapp.com",
  databaseURL: "https://eqraidprofiler-default-rtdb.firebaseio.com",
  projectId: "eqraidprofiler",
  storageBucket: "eqraidprofiler.appspot.com",
  messagingSenderId: "164160804133",
  appId: "1:164160804133:web:424b6db1ac466d0261b6cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// router setup
import router from "./routes/router";
// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
