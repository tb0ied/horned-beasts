import { useState } from "react";
import data from "./assets/data.json";
import "./App.css";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [horns, setHorns] = useState("");

  function handleChange(event) {
    setHorns(event.target.value);
    // TODO 01 using setHorns, change the value of the horns state variable
  }

  return (
    <>
      <h1>Forms</h1>
      <form>
        <label>Number of HORNS</label>
        <input name="horns" onChange={handleChange} />
      </form>
      {/* // TODO 02 give the Gallery component the horns state variable as a prop */}
      <Gallery data={data} horns={horns} />
      <Footer />
    </>
  );
}

export default App;
