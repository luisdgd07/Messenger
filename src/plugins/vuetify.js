import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa",
  },
  theme: {
    themes: {
      dark: {
        background: colors.grey.lighten3,
      },
      light: {
        background: colors.shades.white,
      },
    },
  },
});
