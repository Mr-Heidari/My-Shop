import { NavLink, Outlet, useNavigation, useLocation } from "react-router-dom";
import "boxicons";
import { useEffect } from "react";
export default function Layout() {
  const navigation = useNavigation();
  const location = useLocation();
  const navLinePosition = () => {
    if (location.pathname === "/My-Shop/Home") {
      return " w-[80px] left-[0%]";
    } else if (location.pathname === "/My-Shop/AboutUs") {
      return " w-[105px] left-[54%]";
    } else if (location.pathname === "/My-Shop/ContactUs") {
      return " w-[120px] left-[84%]";
    } else if (location.pathname === "/My-Shop/Products") {
      return " w-[105px] left-[25%]";
    }
  };
  //get location
  useEffect(() => {
    location;
  }, [location]);
  return (
    <>
      <div className="absolute  justify-between min-w-[600px] w-2/5 h-fit top-5 left-10">
        <div className="order-0 ">
          <NavLink
            to="/My-Shop/Home"
            className={({ isActive, isPending }) =>
              isPending
                ? " text-Onyx absolute left-[0%] bg-homeIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange absolute left-[0%] bg-homeIconeOrange bg-no-repeat pl-6 scale-110 transition-all duration-300 font-semibold text-xl"
                : " text-Onyx absolute bg-homeIcone left-[0%] bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
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
                ? " text-Onyx absolute left-[25%] bg-productIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange absolute left-[25%] bg-productIconeorange bg-no-repeat pl-6 scale-110 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx absolute left-[25%] bg-productIcone bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
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
                ? " text-Onyx absolute left-[54%] bg-aboutIconeo bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange absolute left-[54%] bg-aboutIconeorange bg-no-repeat scale-110 pl-6 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx absolute left-[54%] bg-aboutIcone bg-no-repeat pl-6  transition-all duration-300  font-semibold text-xl"
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
                ? " text-Onyx left-[84%] absolute bg-contactIcone bg-no-repeat pl-6  font-semibold text-xl"
                : isActive
                ? " text-orange left-[84%] absolute bg-contactIconeorange bg-no-repeat scale-110 pl-6 transition-all duration-300  font-semibold text-xl"
                : " text-Onyx left-[84%] absolute bg-contactIcone bg-no-repeat pl-6 transition-all duration-300   font-semibold text-xl"
            }
          >
            contactUs
          </NavLink>
        </div>
        <div
          className={
            "h-[3px] bg-orange top-[39.5px] order-3 absolute z-10 transition-all duration-200" +
            navLinePosition()
          }
        ></div>
        <div className="absolute w-full h-[1px] top-10 bg-Onyx"></div>
      </div>
      <div
        className={
          navigation.state === "loading"
            ? " bg-red w-full h-1 fixed top-0 "
            : " fixed"
        }
      ></div>
      <Outlet />
    </>
  );
}
