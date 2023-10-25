import chu from "../assets/chu.png";
import ho from "../assets/ho.jpg";
import horn from "../assets/horn.jpg";
import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <>
      <HornedBeast name="Billy" src={chu} />
      <HornedBeast name="Tilly" src={ho} />
      <HornedBeast name="Silly Billy" src={horn} />
    </>
  );
}
