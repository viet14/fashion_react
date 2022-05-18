import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomPage'
import reportWebVitals from './reportWebVitals';
import Cart from './pages/Cart';
import Product from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products">
          <Route path=":productId" element={<Product/>}/>
        </Route>

        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
