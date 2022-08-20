import { createApp, } from 'vue';
import App from './App.vue';
import router from './router';

// font awesome imports
import { library, } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, } from '@fortawesome/vue-fontawesome';
import { faUserSecret, } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret,);

import './assets/main.css';

const app = createApp(App,);

// register components
app.component('FontAwesomeIcon', FontAwesomeIcon,);

app.use(router,);

app.mount('#app',);
