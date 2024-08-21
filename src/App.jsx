import "./App.css";
import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Navbar from "./components/Navabar";
// import New from "./components/New";
import Services from "./components/services";
import Login from "./components/sms/Login";
import Sidebar from "./components/sms/Sidebar";
import SignUp from "./components/sms/SignUp";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      {/* <section>
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
      </section> */}
      {/* <section>
        <SignUp/>
      </section>
      <section>
      <Login/>
      </section> */}
      <section>
        <Sidebar/>
      </section>
    </div>
  );
}

export default App;
