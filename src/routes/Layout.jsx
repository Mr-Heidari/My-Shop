import { NavLink, Outlet, useNavigation, useLocation } from "react-router-dom";
import "boxicons";
import { useEffect, useState } from "react";
export default function Layout() {
  const navigation = useNavigation();

  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const location = useLocation();

  const navLinePosition = () => {
    if (location.pathname === "/My-Shop/Home") {
      return " w-[80px] left-[0%]";
    } else if (location.pathname === "/My-Shop/AboutUs") {
      return " w-[105px] left-[54%]";
    } else if (location.pathname === "/My-Shop/ContactUs") {
      return " w-[120px] left-[83%]";
    } else if (location.pathname === "/My-Shop/Products") {
      return " w-[105px] left-[25%]";
    }
  };
  //get location
  useEffect(() => {
    location;
  }, [location]);

  return (
    <div className="">
      <button
        className="bg-menuIcone w-10 h-10 left-3 top-3 absolute bg-contain sm:hidden"
        onClick={() => {
          setNavMenuVisible(true);
        }}
      ></button>
      <div className="absolute w-11/12 left-5 top-[60px] h-[3px] bg-Onyx/95 sm:hidden"></div>
      <div
        className={
          "absolute w-full h-screen bg-Onyx/30 sm:hidden" +
          (navMenuVisible ? " " : " hidden ")
        }
        onClick={() => {
          setNavMenuVisible(false);
        }}
      ></div>
      <button
        className={
          "absolute bg-backArrowIcone w-7 h-7 bg-contain left-[200px] z-10 sm:hidden" +
          (navMenuVisible ? " " : " hidden")
        }
        onClick={() => {
          setNavMenuVisible(false);
        }}
      ></button>
      <div
        className={
          "absolute w-[240px] h-screen bg-white sm:hidden" +
          (navMenuVisible ? " " : " hidden")
        }
      ></div>
      <div
        className={
          "absolute max-sm:flex flex-col max-sm:h-52  max-sm:top-10 justify-between sm:min-w-[600px] w-2/5 h-fit top-5 left-10 " +
          (navMenuVisible ? " " : " max-sm:hidden")
        }
      >
        <div className="order-0 ">
          <NavLink
            to="/My-Shop/Home"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-Onyx sm:absolute left-[0%] bg-homeIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange sm:absolute left-[0%] bg-homeIconeOrange bg-no-repeat pl-6 scale-110 transition-all duration-300 font-semibold text-xl"
                : " text-Onyx sm:absolute bg-homeIcone left-[0%] bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
            }
          >
            home
          </NavLink>
        </div>
        <div className="order-1">
          <NavLink
            to="/My-Shop/Products"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-Onyx sm:absolute left-[25%] bg-productIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange sm:absolute left-[25%] bg-productIconeorange bg-no-repeat pl-6 scale-110 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx sm:absolute left-[25%] bg-productIcone bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
            }
          >
            product
          </NavLink>
        </div>
        <div className="order-2">
          <NavLink
            to="/My-Shop/AboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-Onyx sm:absolutee left-[54%] bg-aboutIconeo bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange sm:absolute left-[54%] bg-aboutIconeorange bg-no-repeat scale-110 pl-6 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx sm:absolute left-[54%] bg-aboutIcone bg-no-repeat pl-6  transition-all duration-300  font-semibold text-xl"
            }
          >
            aboutUs
          </NavLink>
        </div>
        <div className="order-3">
          <NavLink
            to="/My-Shop/ContactUs"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-Onyx left-[83%] sm:absolute bg-contactIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange left-[83%] sm:absolute bg-contactIconeorange bg-no-repeat scale-110 pl-6 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx left-[83%] sm:absolute bg-contactIcone bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
            }
          >
            contactUs
          </NavLink>
        </div>
        <div
          className={
            "h-[3px] bg-orange top-[39.5px] order-3 absolute z-10 transition-all max-sm:hidden duration-200" +
            navLinePosition()
          }
        ></div>
        <div className="absolute min-w-[610px] w-full h-[1px] top-10 bg-Onyx max-sm:hidden"></div>
      </div>
      <div
        className={
          navigation.state === "loading"
            ? " bg-red w-full h-1 fixed top-0 "
            : " fixed"
        }
      ></div>
      <Outlet />
    </div>
  );
}
