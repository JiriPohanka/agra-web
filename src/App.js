import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/kontakt" element={<Contact />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
