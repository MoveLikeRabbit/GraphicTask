import {
  createBrowserRouter,
} from 'react-router-dom';
import App from './App';
import Page210812000 from "./210812000";
import Page210812012 from "./210812012";

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
    path: '210812012',
    element: <Page210812012 />,
  },
]);

export { router };
