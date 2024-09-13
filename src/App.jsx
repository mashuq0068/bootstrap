import "./App.css";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Navbar from "./components/Navabar";
import New from "./components/New";
import Services from "./components/services";
import Card from "./components/sms/Card";
import Login from "./components/sms/Login";
import Sidebar from "./components/sms/Sidebar";
import SignUp from "./components/sms/SignUp";
import Testimonial from "./components/Testimonial";
import "../node_modules/bootstrap"

function App() {
  return (
    <div className="">
      <section className="position-lg-static position-sticky top-0 bg-pulse z-3">
        <Navbar />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Services />
      </section>
      <section>
       <Faq/>
      </section>
      <section>
       <Testimonial/>
      </section>
      {/* <section>
        <SignUp/>
      </section>
      <section>
      <Login/>
      </section> */}
      {/* <section>
        <Card/>
      </section> */}
      {/* <section>
       <Services/>
      </section> */}
      {/* <section>
        <Sidebar/>
        
      </section> */}
    </div>
  );
}

export default App;
