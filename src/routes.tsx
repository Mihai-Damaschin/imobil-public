import { HomePage } from "./features/estates/pages/HomePage";

import { NotFoundPage } from "./features/estates/pages/NotFoundPage";

// prettier-ignore
export const routes = [
  {name: 'Home', path: '/', component: HomePage, exact: true},

  {name: 'NotFoundPage', path: '/404', component: NotFoundPage, exact: true},
];
