import { bg } from "../public";
import {
  Clients,
  Developer,
  Feature,
  Footer,
  Landing,
  Navbar,
  Proyects,
  Services,
} from "./components";

function App() {
  return (
    <>
      <div>
        <img className="w-sreen lg:w-1/2 absolute right-0" src={bg} alt="bg" />
        <div className="bg-[#283244]">
          <Navbar />
          <Landing />
          <Services />
        </div>
        <Feature />
        <Clients />
        <Proyects />
        <Footer />
        <Developer />
      </div>
    </>
  );
}

export default App;
