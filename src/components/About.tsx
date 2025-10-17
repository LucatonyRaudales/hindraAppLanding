//import { Statistics } from "./Statistics";
import pilot from "../assets/aboutus.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
                Nosotros
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Valley es tu asistente digital especializado en ganadería. Diseñada 
                específicamente para ganaderos y agricultores que quieren modernizar 
                su negocio, Valley te ayuda a organizar todo lo relacionado con tu ganado. 
                Registra tus animales con fotos y datos completos, lleva el control 
                financiero de tu negocio, y vende directamente desde tu teléfono. 
                Con nuestro marketplace integrado, puedes comprar y vender ganado 
                sin intermediarios, mientras nuestro asistente inteligente te brinda 
                consejos especializados. ¡Ya disponible en iOS y Android!
              </p>
            </div>

            {/* <Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
