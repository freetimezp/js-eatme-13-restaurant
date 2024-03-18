import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyUs from "./sections/WhyUs";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Events from "./sections/Events";


export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
      </main>
    </>
  );
}
