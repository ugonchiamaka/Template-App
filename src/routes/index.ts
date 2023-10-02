import { lazy } from "react";
import { path } from "./path";

const routes = [
  {
    path: path.form,
    exact: true,
    component: lazy(() => import("../pages/Form")),
  },
];

export default routes;
