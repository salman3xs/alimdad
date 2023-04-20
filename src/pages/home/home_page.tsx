import { FC } from "react";
import Carousel from "../components/carousel";
import VideoModal from "../components/video_modal";
import About from "../components/about";
import Services from "../components/services";
import Facts from "../components/facts";
import Causes from "../components/causes";
import Events from "../components/event";
import Team from "../components/team";
import Volunteer from "../components/volunter";
import Testimonial from "../components/testimonial";
import Contact from "../components/contact";
import Blog from "../components/blog";
import Footer from "../components/footer";
import Donate from "../components/donate";

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <Carousel />
      <VideoModal />
      <About />
      <Services />
      <Facts />
      <Causes />
      <Donate />
      {/* <Events /> */}
      {/* <Team /> */}
      {/* <Volunteer /> */}
      <Testimonial />
      <Contact />
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
