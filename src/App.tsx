import { useEffect, useState } from "react";
import Audi from "./components/Audi";
import Benz from "./components/Benz";
import Ferrari from "./components/Ferrari";

export default function App() {
  const [car, setCar] = useState("selectDreamCar");

  const [ferrariContentVisible, setFerrariContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);

  useEffect(() => {
    car === "ferrari"
      ? setFerrariContentVisible(true)
      : setFerrariContentVisible(false);
    car === "benz" ? setBenzContentVisible(true) : setBenzContentVisible(false);
    car === "audi" ? setAudiContentVisible(true) : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "your dream car")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div className="container m-4 p-8 w-2/5 bg-blue-300">
      <div>
        <h1 className="font-bold">About {renderResult()}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={car} onChange={handleOnChange}>
          <option value="selectDreamCar">Select your dream car</option>
          <option value="ferrari">Ferrari</option>
          <option value="benz">Benz</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
      {ferrariContentVisible && <Ferrari />}
      {benzContentVisible && <Benz />}
      {audiContentVisible && <Audi />}
      </div>
   
    </div>
  );
}
