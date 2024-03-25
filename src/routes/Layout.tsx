import { Link, Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      <Link to="/My-Shop">
        home
      </Link>
      <br />
      <Link to="/My-Shop/Products">product</Link>
      <br />
      <Link to="/My-Shop/AboutUs">aboutUs</Link>
      <br />
      <Link to="/My-Shop/ContactUs">contactUs</Link>
      <div
        className={
          navigation.location?.state === "loading"
            ? " bg-red-500 w-full h-20 p-2 absolute top-0 z-10"
            : ""
        }
      >
        <Outlet />
      </div>
    </div>
  );
}
