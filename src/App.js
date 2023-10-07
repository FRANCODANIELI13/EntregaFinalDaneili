import React from "react";
import {Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/index'
import ItemDetailContainer from "./Components/ItemDetailContainer/index";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/:id" component={ItemListContainer} />
      <Route exact path="/item/:id" component={ItemDetailContainer} />
    </div>
  );
}

export default App