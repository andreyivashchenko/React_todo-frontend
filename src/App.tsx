import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import './scss/App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className={'App'}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
