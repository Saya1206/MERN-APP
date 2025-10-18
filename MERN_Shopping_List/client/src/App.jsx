import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <Provider store={store}>
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </Provider>
  );
}

export default App;
