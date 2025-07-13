import cardLogo from "../../public/card-logo.png";
import SpiralSquares from "./Spiral";

export function Card() {
  return (
    <section className="relative font-questrial text-lg text-nowrap overflow-clip  capitalize grid grid-cols-3 w-1/4 h-1/4 bg-[#3d3d3d] drop-shadow-md p-3.5">
      <SpiralSquares></SpiralSquares>
      <img
        className="col-start-1 opacity-80 absolute top-[-2.5rem] left-[-3.5rem] size-62"
        src={cardLogo}
        alt=""
      />
      <h1 className="col-start-2 text-xl place-content-center ">
        Front-End Developer
      </h1>
      <h2 className="place-self-end">israel valimento</h2>
    </section>
  );
}
