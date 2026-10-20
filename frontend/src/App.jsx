import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import RouteProtector from "./components/RouteProtector.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import IndexApp from "./IndexApp.jsx";
import Shifts from "./components/Shifts.jsx";
import Stock from "./components/Stock.jsx";
import Forms from "./components/Forms.jsx";
import Settings from "./components/Settings.jsx";
import NotFound from "./components/Notfound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<RouteProtector isAuthenticated={true} />}>
          <Route path="/" element={<IndexApp />} />
          <Route path="/shifts" element={<IndexApp Element={<Shifts />} />} />
          <Route path="/stock/*" element={<IndexApp Element={<Stock />} />} />
          <Route path="/forms/*" element={<IndexApp Element={<Forms />} />} />
          <Route
            path="/settings"
            element={<IndexApp Element={<Settings />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
