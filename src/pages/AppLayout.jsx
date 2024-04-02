import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AppLayout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(
    function () {
      setIsOpenMenu(false);
    },
    [location.pathname]
  );

  return (
    <>
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <main style={{ marginTop: isOpenMenu ? "90px" : "0" }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default AppLayout;
