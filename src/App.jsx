import { Home } from "./pages/Home/Home";
import { Calculator } from "./pages/Calculator/Calculator";
import { TicTacToe } from "./pages/TicTacToe/TicTacToe";
import { Routes, Route, NavLink } from "react-router-dom";
import "./main.css";

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/tictactoe">Tic-Tac-Toe</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/tictactoe" element={<TicTacToe />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
