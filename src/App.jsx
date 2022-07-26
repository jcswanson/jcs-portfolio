import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
// const AppStyle = styled.div`

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
