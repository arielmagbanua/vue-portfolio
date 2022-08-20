import { createApp, } from 'vue';
import App from './App.vue';
import router from './router';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGraduationCap, faTwitter, faGithub);

import './assets/main.css';

const app = createApp(App,);

// register components
app.component('FontAwesomeIcon', FontAwesomeIcon,);

app.use(router,);

app.mount('#app',);
