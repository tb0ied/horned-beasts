import data from "./assets/data.json";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Gallery data={data} />
      <Footer />
    </>
  );
}

export default App;
