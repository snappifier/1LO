import { SpeedInsights } from "@vercel/speed-insights/react"
import {BrowserRouter} from "react-router";
import {AppRoutes} from "./AppRoutes";
import {Suspense} from "react";
import {Loader} from "./components/animations/Loader.jsx";
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (<>
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <AppRoutes/>
      </Suspense>
    </BrowserRouter>
    <Analytics />
      <SpeedInsights />
  </>)
}

export default App
