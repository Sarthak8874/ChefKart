import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dishdetail from "./pages/Dishdetail";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/detail"
            element={
              <>
                <Dishdetail />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
