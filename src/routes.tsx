import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './ui/Home';
import './components/GridSystem/bootstrap-grid.css';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component = {Home} />
      </Switch>
    </BrowserRouter>
  );
}