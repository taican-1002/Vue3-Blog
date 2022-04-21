import "vuestic-ui/dist/vuestic-ui.css";

import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import router from "./router/router";
import store from "./store";

const app = createApp(App).use(VuesticPlugin);

app.use(store);
app.use(router);
app.mount("#app");
