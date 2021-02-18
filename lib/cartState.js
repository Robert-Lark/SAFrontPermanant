import {createContext, useState} from "react";
import {useContext} from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({children}) {
  //this is the custom provider where data (state) is stored as well as functionality (updaters)
  // it can be accessed using the consumer
//closed by default
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }
  return (
    <LocalStateProvider
      value={{cartOpen, setCartOpen, toggleCart, closeCart, openCart}}
    >
      {children}
    </LocalStateProvider>
  );
}

//this is the custom hook for accessing the cart's local state

function useCart() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export {CartStateProvider, useCart};
