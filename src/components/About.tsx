//import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

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
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
                Nosotros
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Bienvenido a Hindra, la plataforma revolucionaria diseñada para
                transformar la gestión de ranchos y fincas. Nos dedicamos a
                empoderar a agricultores y ganaderos con herramientas avanzadas
                que integran inteligencia artificial, análisis de datos y
                tecnología innovadora. Con un dashboard intuitivo y métricas
                personalizadas, brindamos información esencial para facilitar la
                toma de decisiones estratégicas. Nuestro soporte está disponible
                24/7, combinando tecnología de vanguardia con un equipo de
                expertos listos para ayudarte a maximizar tu producción. En
                Hindra, estamos comprometidos a ofrecer servicios únicos que se
                adaptan a tus necesidades. ¡Pronto lanzaremos nuestra
                plataforma! Regístrate ahora y sé parte de la transformación
                en la gestión agrícola y ganadera.
              </p>
            </div>

            {/* <Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
