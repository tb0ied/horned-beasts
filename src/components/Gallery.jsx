import chu from "../assets/chu.png";
import ho from "../assets/ho.png";
import horn from "../assets/.png";
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
