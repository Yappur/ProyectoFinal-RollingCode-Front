import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import NavbarC from "./components/NavbarC";
import FooterC from "./components/FooterC";

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
        <RoutesViews />
      </Router>
      <FooterC />
    </>
  );
};

export default App;
