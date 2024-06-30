import Navbar from "./componets/navbar";
import Hero from "./componets/hero";
import Proyectos from "./componets/Proyectos";
import Exp from "./componets/Exp";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Proyectos/>
      <Exp/>
    </div>
  );
}