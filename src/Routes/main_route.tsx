import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import React, { FC } from "react";
import Topbar from "../pages/components/top_bar";
import Navbar from "../pages/components/nav_bar";
import HomePage from "../pages/home/home_page";
import AboutPage from "../pages/about/about_page";
import Footer from "../pages/components/footer";
import CausesPage from "../pages/causes/causes_page";
import EventsPage from "../pages/events/events_page";
import ContactPage from "../pages/contact/contact_page";
import DonatePage from "../pages/donate/donate_page";
import ServicePage from "../pages/service/service_page";
import VolunteerPage from "../pages/volunteer/volunteer_page";
// import ConactPage from "../pages/contact/contact_page";

const MainRoutes: FC = (): JSX.Element => {
  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/causes" element={<CausesPage />}></Route>
        <Route path="/event" element={<EventsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/donate" element={<DonatePage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/volunteer" element={<VolunteerPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};
export default MainRoutes;
