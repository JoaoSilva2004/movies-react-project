import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/watch/:id" element={ <Watch /> } ></Route>
        <Route path="*" element={ <PageNotFound /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;