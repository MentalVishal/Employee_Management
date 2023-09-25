import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./pages/MainRoutes";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
