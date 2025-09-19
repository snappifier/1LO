import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";
import {Suspense, useEffect} from "react";
import {Loader} from "./components/animations/Loader.jsx";
import { Analytics } from "@vercel/analytics/react"
import {fetchAndOrganizeStrapiImages} from "./features/strapiImages.jsx";


function App() {

  useEffect(() => {
    fetchAndOrganizeStrapiImages();
  }, [])

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
