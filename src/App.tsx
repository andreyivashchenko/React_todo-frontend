import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import './scss/App.scss';

function App() {
  return (
    <div className={'App'}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
