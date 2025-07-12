import { PhoenixNav } from "@/components/PhoenixNav";
import { PhoenixHero } from "@/components/PhoenixHero";
import { PhoenixServices } from "@/components/PhoenixServices";
import { PhoenixProcess } from "@/components/PhoenixProcess";
import { PhoenixAbout } from "@/components/PhoenixAbout";
import { PhoenixCommunity } from "@/components/PhoenixCommunity";
import { PhoenixPartner } from "@/components/PhoenixPartner";
import { PhoenixContact } from "@/components/PhoenixContact";
import { PhoenixFooter } from "@/components/PhoenixFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PhoenixNav />
      
      <main>
        <PhoenixHero />
        
        <section id="services">
          <PhoenixServices />
        </section>
        
        <section id="process">
          <PhoenixProcess />
        </section>
        
        <section id="about">
          <PhoenixAbout />
        </section>
        
        <section id="community">
          <PhoenixCommunity />
        </section>
        
        <section id="partner">
          <PhoenixPartner />
        </section>
        
        <section id="contact">
          <PhoenixContact />
        </section>
      </main>
      
      <PhoenixFooter />
    </div>
  );
};

export default Index;
