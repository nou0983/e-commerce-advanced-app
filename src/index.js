import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PopupContextProvider } from "./contexts/popupContext.context";
import { ProductsContextProvider } from "./contexts/productsContext.context";
import { FilterContextProvider } from "./contexts/filterContext.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <PopupContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </PopupContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
