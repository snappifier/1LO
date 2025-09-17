import { injectSpeedInsights } from '@vercel/speed-insights';
import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes";
import {Suspense} from "react";
import {Loader} from "./components/animations/Loader.jsx";
import { Analytics } from "@vercel/analytics/react"

injectSpeedInsights();

function App() {



  return (<>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <AppRoutes/>
      </Suspense>
    </BrowserRouter>
    <Analytics />
  </>)
}

export default App
