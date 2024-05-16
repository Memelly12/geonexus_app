import { Navbar } from "../components/navbar";
import { Section1 } from "../components/acceuilComp/section1";
import { Section2 } from "../components/acceuilComp/section2";
import { Section3 } from "../components/acceuilComp/section3";
export function Acceuil() {
  return (
    <>
      <div className="app">
        <Navbar />
        <section>
          <Section1 />
        </section>

        <section>
          <Section2 />
        </section>
        <Section3 />
      </div>
    </>
  );
}
