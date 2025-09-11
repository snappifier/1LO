import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes";
import {StrictMode} from "react";
import {Suspense, lazy} from "react";
import {Loader} from "./components/animations/Loader.jsx";

function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <AppRoutes/>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
