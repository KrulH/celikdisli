import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Urunler from "./pages/Urunler";
import Anasayfa from "./pages/Anasayfa";
import Layout from "./pages/Layout";
import Iletisim from "./pages/Iletisim";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Anasayfa}></IndexRoute>
      <Route path="urunler" name="urunler" component={Urunler}></Route>
      <Route path="iletisim" name="iletisim" component={Iletisim}></Route>
    </Route>
  </Router>,
app);
