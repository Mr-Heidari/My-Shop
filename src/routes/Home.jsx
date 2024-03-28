export default function HomePage() {
  return (
    //a container
    <div className="absolute w-full h-screen -z-10">
      {/** logo */}
      <div className="absolute right-10 top-2 font-semibold  w-14 h-12 bg-logo bg-no-repeat bg-contain text-center pt-14 text-xl text-orange max-md:w-10 max-md:text-lg max-md:pt-8 max-mobile:right-3">
        Logo
      </div>
      {/** OnlineShopTitle */}
      <div className="absolute  w-full h-[83.5%] top-24  grid px-10  grid-cols-5 max-xl:grid-rows-2 max-xl:h-[1400px] max-mobile:px-3 max-xl:pb-20">
        <div className="relative h-full grid grid-cols-2 grid-rows-2 font-semibold col-start-1 col-end-3 max-xl:row-start-1 max-xl:col-end-6 ">
          <div className=" text-left text-8xl  row-start-1 bg-cover bg-no-repeat col-start-1 col-end-2 text-orange max-2xl:text-7xl max-xl:text-8xl max-sm:text-7xl max-mobile:col-end-3 max-mobile:text-4xl max-mobile:text-center">
            Online Shop
          </div>
          {/** buyCartImage */}
          <div
            className=" cursor-pointer justify-self-center row-start-1 col-start-2 col-end-3 w-80 bg-contain 
            max-xl:scale-100 max-xl:ml-24  bg-no-repeat max-2xl:scale-90
         bg-buyCart max-mobile:col-start-1 max-lg:ml-0 max-md:w-72 max-md:pr-10 max-mobile:w-[90%] max-mobile:p-0
          "
          ></div>
          <div className="mt-5 leading-8 bg-purple/20  overflow-hidden text-ellipsis text-xl row-start-2 col-start-1 col-end-3 font-semibold text-Onyx  p-5 rounded-md  max-2xl:mt-2 max-mobile:text-sm max-sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        {/** categories */}
        <div className="pl-16 col-start-3 col-end-6 max-xl:row-start-2 max-xl:col-start-1 max-xl:mt-10 max-xl:pl-0 ">
          <div className="relative h-full grid grid-cols-6 grid-rows-2 max-sm:grid-rows-3 max-mobile:grid-rows-4 max-sm:h-[950px] max-mobile:h-[850px] gap-5 justify-around  ">
            <div
              className="order-1 relative col-start-3 col-end-7 cursor-pointer hover:scale-105 transition-transform duration-300 text-7xl font-semibold break-words shadow-black/50 shadow-lg bg-womenItemsImage bg-cover overflow-hidden bg-no-repeat max-sm:col-start-1 
            max-sm:row-start-1 max-sm:col-end-7  text-Onyx text-center"
            >
              <p className=" bg-gradient-to-t bottom-0 absolute  h-1/3 from-white w-full max-sm:text-5xl">
                womens
              </p>
            </div>
            <div className="order-4 relative col-start-4 col-end-7 text-7xl cursor-pointer hover:scale-105 transition-transform duration-300 break-words shadow-black/50 shadow-lg bg-menItemsImage  bg-cover bg-no-repeat  text-Platinum text-center overflow-hidden max-sm:col-start-1 max-sm:row-start-3 max-sm:col-end-7">
              <p className=" bg-gradient-to-t from-black w-full h-1/3 absolute bottom-0 max-sm:text-5xl">
                mens
              </p>
            </div>
            <div className="order-3 relative  col-start-1 col-end-4 text-7xl cursor-pointer hover:scale-105 transition-transform duration-300 break-words shadow-black/50 shadow-lg bg-digitalProductImage  bg-cover text-center overflow-hidden bg-no-repeat  text-Platinum max-sm:col-start-3 max-mobile:col-start-1 max-sm:row-start-2 max-sm:col-end-7">
              <p className=" bg-gradient-to-t from-black w-full h-1/3 absolute bottom-0 max-sm:text-5xl">
                digital
              </p>
            </div>
            <div className="relative col-start-1 col-end-3  text-3xl cursor-pointer  hover:scale-105 transition-transform duration-300 font-semibold text-center break-words shadow-black/50 shadow-lg bg-accessoryItemsImage bg-no-repeat bg-[length:100%_100%]  overflow-hidden text-Onyx max-mobile:row-start-4 max-mobile:col-end-4">
              <p
                className=" bg-gradient-to-t from-gold-metalic/50 w-full h-1/5 absolute bottom-0 max-sm:text-xl 
               max-mobile:text-xs"
              >
                Accessories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
