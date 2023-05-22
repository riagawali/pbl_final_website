import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/109.avif"; //34.jpg
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Service"
        text="Let's Detect"
        textareaPlaceholder="Enter news here..."
       
        buttons={["Fake", "Real"]}
        url="/"
        btnClass="hide"
        b="Submit"
        isServicePage={true}
      />

     

      <Footer />
    </>
  );
}

export default Service;
