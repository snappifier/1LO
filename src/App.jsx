import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes";
import {StrictMode} from "react";

function App() {

  return (
    <BrowserRouter>

      <AppRoutes/>

    </BrowserRouter>
  )
}

export default App
