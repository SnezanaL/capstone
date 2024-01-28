import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default App;

