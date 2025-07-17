import cardLogo from "/card-logo.png";
import { Card, SpiralSquares } from "../components/components";
export function Home({ isRotate }) {
  return (
    <main
      className={`flex items-center justify-center h-dvh perspective transform-3d`}
    >
      <Card
        className={`${isRotate} bg-[#3d3d3d]  drop-shadow-md p-3.5 overflow-clip w-1/4 h-1/4 transition-transform duration-1000 `}
      >
        <SpiralSquares></SpiralSquares>

        <section className="relative font-questrial text-lg text-nowrap grid grid-cols-3 capitalize w-full h-full">
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
      </Card>
    </main>
  );
}
