import "./App.css";
import "/lib/flaticon/font/flaticon.css";
import "bootstrap/dist/css/bootstrap.css";
import "/lib/animate/animate.css";
import MainRoutes from "./Routes/main_route";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <MainRoutes />
      </ParallaxProvider>
    </div>
  );
}

export default App;
