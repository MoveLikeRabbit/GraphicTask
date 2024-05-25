import {
  createBrowserRouter,
} from 'react-router-dom';
import Page210812000 from "./210812000";
import Page210812039 from "./210812039"
import Page210812024 from "./210812024";
import Page210812013 from './210812013';
import App from './App';
import Page210812037 from "./210812037"
import Page210812030 from "./210812030";
import Page210812012 from "./210812012";
import Page210812036 from "./210812036";
import Page210812026 from "./210812026";

import Page210812016 from "./210812016";
import Page210812008 from "./210812008";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '210812000',
    element: <Page210812000 />,
  },
  {
    path: '210812002',
    element: <div> 210812002210812002的作业内容</div>,
  },
  {
    path: '210812005',
    element: <div> 210812005 的作业内容</div>,
  },
  {
    path: '210812039',
    element: <Page210812039 />,
  },
  {
    path: '210812024',
    element: <Page210812024 />,
  }, {
    path: '210812013',
    element: <Page210812013 />,
  },
  {
    path: '210812037',
    element: <Page210812037 />,
  },
  {
    path: '210812030',
    element: <Page210812030 />,
  },
  {
    path: '210812012',
    element: <Page210812012 />,
  },
  {
    path: '210812036',
    element: <Page210812036 />,
  },
  {
    path: '210812026',
    element: <Page210812026 />,
  },
    {
    path: '210812016',
    element: <Page210812016 />
  },
  {
    path: '210812008',
    element: <Page210812008 />
  },
  {
    path: '2108120000000',
    element: <div> 210812005000000 的作业内容</div>,
  },
]);

export { router };

