import { Home } from "./pages/Home/Home";
import { Calculator } from "./pages/Calculator/Calculator";
import { TicTacToe } from "./pages/TicTacToe/TicTacToe";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/tictactoe">Tic-Tac-Toe</NavLink>
      </nav>
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
