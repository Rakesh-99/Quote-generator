import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Toaster } from "react-hot-toast";


const App = () => {


  const Home = lazy(() => import('./page/Home'));
  const About = lazy(() => import('./page/About'));
  const ShowSavedQuote = lazy(() => import('./page/ShowSavedQuotes'));


  return (
    <>
      <PersistGate persistor={persistStore(store)} >
        <Provider store={store}>
          <Suspense fallback={<div>Loading..</div>}>
            <Router>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/show-quotes" element={<ShowSavedQuote />} />
                </Route>
              </Routes>
            </Router>
          </Suspense>
        </Provider >
        <Toaster />
      </PersistGate>
    </>
  )
}

export default App