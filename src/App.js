import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import SecondPage from './components/SecondPage';
import { Provider } from 'react-redux';
import store from './features/store';

function App() {
  const router = createBrowserRouter([
    {
    path: '/',
    element: <AppLayout />
    },
    {
      path : '/second',
      element : <SecondPage />
    }
  ])
  return (
    <>
    <Provider store={store}>
  <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
