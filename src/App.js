import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
