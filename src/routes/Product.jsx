import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export const imgSrc = async () => {
  return await fetch("https://fakestoreapi.com/products/1").then((res) =>
    res.json()
  );
};
export default function ProductPage() {
  const src = useLoaderData();
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <div>
      {/** cartIcone container */}
      <div>
      <span className=" bg-cartIcone w-14 h-14 bg-contain absolute right-10 top-4">
        <p className="absolute right-14 text-2xl font-semibold font-mono text-Onyx top-4">
          cart
        </p>
      </span>
      </div>
      <div></div>
      <div className=" absolute h-screen w-full top-28">
        <Slider></Slider>
        <button
          onClick={async () => {
            imgSrc();
          }}
        ></button>
        <div className={"w-fit" + (!imgLoad ? " bg-Onyx" : " bg-transparent")}>
          {/* <img
          src={src.image}
          onLoad={() => {
            setImgLoad(true);
          }}
          className="w-96 h-96 bg-contain"
          alt=""
        /> */}
        </div>
      </div>
    </div>
  );
}

function Slider() {
  let [index, setIndex] = useState(0);
  const slider = [
    " bg-slider1",
    " bg-slider2",
    " bg-slider3",
    " bg-slider4",
    " bg-slider5",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(++index);
      if (index > 4) {
        setIndex(0);
      }
      console.log(index);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="w-[95%]  h-[70%] max-md:h-[55%] max-sm:h-[45%] max-mobile:h-[26%] overflow-hidden shadow-md shadow-black rounded-lg absolute  left-1/2 -translate-x-1/2 bg-Onyx z-10">
      <div className="z-30 absolute w-[10%] max-sm:w-[20%] max-mobile:w-[30%] max-mobile:bottom-3  flex flex-row justify-between bottom-8 -translate-x-1/2 left-1/2">
        <div
          type="radio"
          name="radAnswer"
          className={
            "w-4 h-4 max-mobile:w-3 max-mobile:h-3 rounded-full border-white border-[2px] transition-all duration-300 " +
            (index === 0 ? " bg-pink" : " bg-Platinum/70")
          }
          onClick={() => {
            setIndex(0);
          }}
        ></div>
        <div
          type="radio"
          name="radAnswer"
          className={
            "w-4 h-4 max-mobile:w-3 max-mobile:h-3 rounded-full border-white border-[2px] transition-all duration-300 " +
            (index === 1 ? " bg-yello" : " bg-Platinum/70")
          }
          onClick={() => {
            setIndex(1);
          }}
        ></div>
        <div
          type="radio"
          name="radAnswer"
          className={
            "w-4 h-4 max-mobile:w-3 max-mobile:h-3 rounded-full border-white border-[2px] transition-all duration-300" +
            (index === 2 ? " bg-blue" : " bg-Platinum/70")
          }
          onClick={() => {
            setIndex(2);
          }}
        ></div>
        <div
          type="radio"
          name="radAnswer"
          className={
            "w-4 h-4 max-mobile:w-3 max-mobile:h-3 rounded-full border-white border-[2px] transition-all duration-300" +
            (index === 3 ? " bg-red" : " bg-Platinum/70")
          }
          onClick={() => {
            setIndex(3);
          }}
        ></div>
        <div
          type="radio"
          name="radAnswer"
          className={
            "w-4 h-4 max-mobile:w-3 max-mobile:h-3 rounded-full border-white border-[2px] transition-all duration-300" +
            (index === 4 ? " bg-orange" : " bg-Platinum/70")
          }
          onClick={() => {
            setIndex(4);
          }}
        ></div>
      </div>
      <button
        className="absolute  left-0 w-[7.5%] h-[15%] animate-pulse top-1/2 bg-leftArrow bg-contain bg-no-repeat -translate-y-1/2 z-30"
        onClick={() => {
          setIndex(--index);
          if (index === -1) {
            setIndex(4);
          }
        }}
      ></button>
      <button
        className="absolute  right-0 w-[7.5%] h-[15%] animate-pulse top-1/2 bg-rightArrow bg-contain bg-no-repeat -translate-y-1/2 z-30"
        onClick={() => {
          setIndex(++index);
          if (index > 4) {
            setIndex(0);
          }
        }}
      ></button>
      <div className="h-1/3 bottom-0 w-full absolute z-20 bg-gradient-to-t from-black/50 bg-blend-overlay "></div>
      <div className="h-full w-1/2 right-0 absolute z-20 bg-gradient-to-l from-black/50 bg-blend-overlay "></div>
      <div className="h-full w-1/2 left-0 absolute z-20 bg-gradient-to-r from-black/50 bg-blend-overlay "></div>
      <div className="h-1/3 top-0 w-full absolute z-20 bg-gradient-to-b from-black/50 bg-blend-overlay "></div>
      <div
        className={
          "absolute w-full h-full bg-center  -skew-x-3 bg-contain bg-no-repeat transition-all duration-300 z-10" +
          slider[index]
        }
      ></div>
      <div
        className={
          "absolute w-full h-full scale-125 bg-center bg-cover bg-no-repeat opacity-40 blur-[3px]" +
          slider[index]
        }
      ></div>
    </div>
  );
}
