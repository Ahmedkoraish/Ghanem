import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
      <WhatsAppButton />
    </>
  );
}
