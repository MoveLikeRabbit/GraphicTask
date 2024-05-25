import {
  createBrowserRouter,
} from 'react-router-dom';
import Page210812000 from "./210812000";
import Page210812013 from './210812013';
import App from './App';

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
    path: '210812013',
    element: <Page210812013 />,
  },
]);

export { router };

