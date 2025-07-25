import cardLogo from "/card-logo.png";
import { Card, SpiralSquares } from "../components/components";
export function Home() {
  return (
    <Card
      className={`backface-hidden absolute h-full w-full overflow-clip bg-[#3d3d3d] p-3.5 drop-shadow-md`}
    >
      <SpiralSquares></SpiralSquares>

      <section className="font-questrial relative grid h-full w-full grid-cols-3 text-nowrap text-lg capitalize">
        <img
          className="size-62 absolute left-[-3.5rem] top-[-2.5rem] col-start-1 opacity-80"
          src={cardLogo}
          alt=""
        />
        <h1 className="col-start-2 place-content-center text-xl">
          Front-End Developer
        </h1>
        <h2 className="place-self-end">israel valimento</h2>
      </section>
    </Card>
  );
}
