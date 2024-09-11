import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import Watch from "/src/pages/Watch";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/watch" element={ <Watch /> } ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;