import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";

import { Contact } from "./components/Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BookAppointment } from "./components/Pages/BookAppointment";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/bookappointment" component={BookAppointment} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
