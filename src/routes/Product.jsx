import { useEffect, useState, useCallback } from "react";
import { useLoaderData } from "react-router-dom";

export default function ProductPage() {
  const products = useLoaderData();
  const [filtredProducts, setFiltredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("lower-value");
  //#region

  //implement inifinity scroll

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [index, setIndex] = useState(10);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    await (
      await fetch(`https://fakestoreapi.com/products?limit=${index}`)
    )
      .json()
      .then((items) => {
        setItems(items);
      })

      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 5);

    setIsLoading(false);
  }, [isLoading, index]);

  //when user reach end of page render some products

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight / 2) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  //end of implementation

  //#endregion
  return (
    <div className="h-screen ">
      {/* <div className="w-[95%] -translate-x-1/2 left-1/2 min-h-full fixed -z-20 bg-bubble-gum/20 m-0 p-0"></div> */}
      {/** cartIcone container */}
      <div className="relative">
        <span className=" bg-cartIcone w-12 h-12 bg-contain absolute  right-[2.5%] max-sm:top-2 top-4">
          <p className="absolute right-12 leading-5 text-sm font-semibold font-serif text-Onyx top-1">
            your Cart
          </p>
        </span>
      </div>
      <div className="absolute w-full h-fit  flex flex-col  mt-28 max-md:mt-20 z-20">
        <div className="relative h-fit  w-full ">
          <Slider></Slider>
        </div>
        {/** products container */}
        <div className="relative h-fit w-full">
          <SortMenu sort={sortBy} setSort={setSortBy}></SortMenu>
          <FilterMenu
            products={items.length > products.length ? items : products}
            setProduct={setFiltredProducts}
            filtredProducts={filtredProducts}
            sort={sortBy}
            setSort={setSortBy}
          ></FilterMenu>
          <ProductsContainer products={filtredProducts}></ProductsContainer>
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
    const intervalSilerd = setInterval(() => {
      setIndex(++index);
      if (index > 4) {
        setIndex(0);
      }
      console.log(index);
    }, 5000);
    return () => {
      clearInterval(intervalSilerd);
    };
  });
  return (
    <div className="relative  w-[95%]  h-[550px]  max-md:h-[300px]  max-md:w-[92%] max-sm:h-[250px] max-mobile:h-[215px] overflow-hidden shadow-md shadow-black rounded-lg bg-Onyx m-auto z-10">
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
            (index === 3 ? " bg-metal/30" : " bg-Platinum/70")
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
function SortMenu(props) {
  return (
    <div className=" absolute w-[77%]  top-[52px] max-mobile:top-36 max-md:top-40 right-[2.3%] max-md:right-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[90%]">
      <div
        name="menu"
        className={
          " h-fit  right-0 flex flex-row justify-between gap-2 max-md:gap-2 max-md:text-xs   mt-1 text-Onyx"
        }
      >
        <div
          className={
            "relative  bg-Onyx/20 rounded-md w-full p-5 max-md:p-2 flex flex-row cursor-pointer justify-between" +
            (props.sort === "low-rate" ? " bg-gold-metalic" : "")
          }
          onClick={(e) => {
            props.setSort(e.target.innerText);
          }}
        >
          <p className="my-auto">low-rate</p>
          <div className=" w-6 h-6 bg-sortLowRate bg-no-repeat my-auto"></div>
        </div>
        <div
          className={
            "relative  bg-Onyx/20 rounded-md w-full p-5 max-md:p-2 flex flex-row cursor-pointer justify-between" +
            (props.sort === "high-rate" ? " bg-gold-metalic" : "")
          }
          onClick={(e) => {
            props.setSort(e.target.innerText);
          }}
        >
          <p className="my-auto">high-rate</p>
          <div className=" w-6 h-6 bg-starIcone bg-no-repeat my-auto"></div>
        </div>
        <div
          className={
            "relative  bg-Onyx/20 rounded-md w-full p-5 max-md:p-2 flex flex-row cursor-pointer justify-between" +
            (props.sort === "lower-value" ? " bg-gold-metalic" : "")
          }
          onClick={(e) => {
            props.setSort(e.target.innerText);
          }}
        >
          <p className="my-auto">lower-value</p>
          <div className=" w-6 h-6 bg-sortdown bg-no-repeat my-auto"></div>
        </div>
        <div
          className={
            "relative  bg-Onyx/20 rounded-md w-full p-5 max-md:p-2 flex flex-row cursor-pointer justify-between" +
            (props.sort === "higher-value" ? " bg-gold-metalic" : "")
          }
          onClick={(e) => {
            props.setSort(e.target.innerText);
          }}
        >
          <p className="my-auto">higher-value</p>
          <div className=" w-6 h-6 bg-sortup bg-no-repeat my-auto"></div>
        </div>
      </div>
    </div>
  );
}
function FilterMenu(props) {
  const [menProducts, setMenProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [allProducts, setAllProdcuts] = useState([]);
  const [filters, setFilters] = useState("All");
  const sortProducts = (/**@type {[]}*/ productList) => {
    if (props.sort === "lower-value") {
      props.setProduct(
        productList.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          } else return 1;
        })
      );
    } else if (props.sort === "higher-value") {
      props.setProduct(
        productList.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          } else return 1;
        })
      );
    } else if (props.sort === "low-rate") {
      props.setProduct(
        productList.sort((a, b) => {
          if (a.rating.rate < b.rating.rate) {
            return -1;
          } else return 1;
        })
      );
    } else if (props.sort === "high-rate") {
      props.setProduct(
        productList.sort((a, b) => {
          if (a.rating.rate > b.rating.rate) {
            return -1;
          } else return 1;
        })
      );
    }
  };
  const handleCategoriesFilters = () => {
    if (filters === "men's clothing") {
      setMenProducts(
        props.products.filter((product) => {
          return product.category === "men's clothing";
        })
      );
      sortProducts(menProducts);
    } else if (filters === "women's clothing") {
      setWomensProducts(
        props.products.filter((product) => {
          return product.category === "women's clothing";
        })
      );
      sortProducts(womensProducts);
    } else if (filters === "jewelery") {
      setJeweleryProducts(
        props.products.filter((product) => {
          return product.category === "jewelery";
        })
      );
      sortProducts(jeweleryProducts);
    } else if (filters === "electronics") {
      setElectronicsProducts(
        props.products.filter((product) => {
          return product.category === "electronics";
        })
      );
      sortProducts(electronicsProducts);
    } else if (filters === "All") {
      setAllProdcuts([...props.products]);
      sortProducts(allProducts);
    }
  };
  useEffect(() => {
    handleCategoriesFilters()
  },[props.sort,filters,props.products]);
  return (
    <div
      name="container"
      className="w-[20%] mt-4 h-fit max-md:w-[90%] max-md:mx-auto "
    >
      <p className=" ml-[10%] text-Onyx font-semibold mb-4 max-md:ml-0 min-w-[200px] ">
        Brows By Categorie's
      </p>
      <div className=" h-fit ml-[10%] max-md:ml-0 ">
        <div className=" flex flex-col gap-2  text-left text-Onyx text-lg max-md:flex-row max-md:text-sm justify-between sticky ">
          <div
            className={
              "relative  justify-between h-fit font-semibold p-5 rounded-lg  cursor-pointer max-mobile:flex-col max-mobile:rounded-md max-mobile:p-2 max-mobile:h-16 max-md:h-24" +
              (filters === "All" ? " bg-metal/30" : " bg-Onyx/10")
            }
            onClick={() => {
              setFilters("All");
            }}
          >
            <p className="my-auto  max-mobile:top-16 max-md:mt-5 ml-2 line-clamp-1 left-1/2 max-md:-translate-x-1/2">
              All
            </p>
          </div>
          <div
            className={
              "relative flex flex-row justify-between h-fit font-semibold p-5 rounded-lg  cursor-pointer max-mobile:flex-col max-mobile:rounded-md max-mobile:p-2 max-md:w-full" +
              (filters === "men's clothing" ? " bg-metal/30" : " bg-Onyx/10")
            }
            onClick={() => {
              setFilters("men's clothing");
            }}
          >
            <p className="my-auto  max-md:absolute max-mobile:top-16 max-md:top-[75px] line-clamp-1 left-1/2 max-md:-translate-x-1/2">
              men's clothing
            </p>
            <div className="w-14 h-14 bg-mensIcone bg-contain bg-no-repeat  max-mobile:w-12 max-mobile:h-12 max-md:mx-auto"></div>
          </div>
          <div
            className={
              "relative flex flex-row justify-between h-fit  font-semibold p-5 rounded-lg  cursor-pointer  max-mobile:flex-col max-mobile:rounded-md  max-mobile:p-2 max-md:w-full" +
              (filters === "women's clothing" ? " bg-metal/30" : " bg-Onyx/10")
            }
            onClick={() => {
              setFilters("women's clothing");
            }}
          >
            <p className="my-auto  max-md:absolute max-mobile:top-16 max-md:top-[75px] line-clamp-1 left-1/2 max-md:-translate-x-1/2">
              women's clothing
            </p>
            <div className="w-14 h-14 bg-weomensIcone bg-contain bg-no-repeat  max-mobile:w-12 max-mobile:h-12 ml-1 max-md:mx-auto"></div>
          </div>
          <div
            className={
              "relative flex flex-row justify-between  h-fit font-semibold p-5 rounded-lg  cursor-pointer max-mobile:flex-col max-mobile:rounded-md  max-mobile:p-2 max-md:w-full" +
              (filters === "jewelery" ? " bg-metal/30" : " bg-Onyx/10")
            }
            onClick={() => {
              setFilters("jewelery");
            }}
          >
            <p className="my-auto  max-md:absolute max-mobile:top-16 max-md:top-[75px] line-clamp-1 left-1/2 max-md:-translate-x-1/2">
              jewelery
            </p>
            <div className="w-14 h-14 bg-jewerlyIcone bg-contain bg-no-repeat  max-mobile:w-12 max-mobile:h-12 max-md:mx-auto"></div>
          </div>
          <div
            className={
              "relative flex flex-row justify-between  h-fit font-semibold p-5 rounded-lg  cursor-pointer  max-mobile:flex-col max-mobile:rounded-md max-mobile:p-2 max-md:w-full" +
              (filters === "electronics" ? " bg-metal/30" : " bg-Onyx/10")
            }
            onClick={() => {
              setFilters("electronics");
            }}
          >
            <p className="my-auto  max-md:absolute max-mobile:top-16 max-md:top-[75px] line-clamp-1 left-1/2 max-md:-translate-x-1/2">
              electronics
            </p>
            <div className="w-14 h-14 bg-digitalIcone bg-contain bg-no-repeat  max-mobile:w-12 max-mobile:h-12 max-md:mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProductsContainer(props) {
  return (
    <div className="absolute top-32 right-[2.3%] max-md:right-0 w-[77%] max-lg:top-40 max-md:top-56 h-fit max-md:w-full">
      <div className="relative w-full h-fit flex flex-row flex-wrap gap-5 justify-around">
        {props.products.map((x) => (
          <div key={x.id}>
            <div className="relative h-[420px] w-72 max-md:w-64 bg-white rounded-md overflow-hidden ">
              <div name="imageContainer" className="bg-white w-full h-40 max-md:h-32 ">
                <img
                  src={x.image}
                  className="h-[130px] max-md:mt-2 mt-4 bg-contain mx-auto"
                  alt=""
                />
              </div>
              <div className="absolute w-full bg-Platinum drop-shadow-sm shadow-black h-[260px] bottom-0 rounded-lg">
                <div className="h-full w-full bg-Onyx/20 flex flex-col rounded-md">
                  <div
                    name="ratingContainer"
                    className="ml-auto mr-3 mt-3 w-fit order-0"
                  >
                    <div className=" flex flex-row ">
                      <p className="inline-block text-xl  text-Onyx font-semibold">
                        {x.rating.rate}
                      </p>
                      <div className=" inline-block w-6 h-6 bg-contain bg-no-repeat bg-starIcone "></div>
                    </div>
                    <p className=" text-xs text-Onyx/50 font-semibold">
                      {x.rating.count}
                    </p>
                  </div>
                  <div name="titleContainer " className="order-1">
                    <div className=" w-64 text-center mx-auto max-md:w-52 h-14 text-Onyx font-semibold mt-2">
                      <p className="my-auto line-clamp-2">{x.title}</p>
                    </div>
                  </div>
                  <div
                    name="valueContainer"
                    className="order-2 text-Onyx font-semibold mt-1"
                  >
                    <div className="flex flex-row justify-evenly w-64 mx-auto text-xl">
                      <p className="">price</p>
                      {x.price}$
                    </div>
                  </div>
                  <div
                    name="addToCartContainer"
                    className="order-3 mt-10 mx-auto"
                  >
                    <div className="relative w-64 max-md:w-56 h-14 bg-Onyx text-Platinum rounded-md text-center cursor-pointer">
                      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Add to Cart
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
