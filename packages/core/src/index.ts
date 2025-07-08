import { App } from "vue";
import {
  VueEcharts,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  Title,
  Grid,
} from "./components/index";
import "virtual:uno.css";
export * from "./hooks/index";

export type * from "./types/index";

export { VueEcharts, Line, Bar, Pie, XAxis, YAxis, Title, Grid };

const components = [VueEcharts, Line, Bar, Pie, XAxis, YAxis, Title, Grid];
export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component);
    });
  },
};
