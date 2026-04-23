import ApplyForm from "./_components/ApplyForm";
import Faq from "./_components/Faq";
import FinalCta from "./_components/FinalCta";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Membership from "./_components/Membership";
import MobileLanding from "./_components/MobileLanding";
import Nav from "./_components/Nav";
import Values from "./_components/Values";
import WhatIs from "./_components/WhatIs";
import WhoJoin from "./_components/WhoJoin";
import WhyNow from "./_components/WhyNow";

export default function Home() {
  return (
    <>
      <div className="desktop-only">
        <Nav />
        <main>
          <Hero />
          <WhyNow />
          <WhatIs />
          <WhoJoin />
          <Values />
          <Membership />
          <Faq />
          <FinalCta />
          <ApplyForm />
        </main>
        <Footer />
      </div>
      <div className="mobile-only">
        <MobileLanding />
      </div>
    </>
  );
}
