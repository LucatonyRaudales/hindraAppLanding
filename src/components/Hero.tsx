import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              Valley
            </span>{" "}
            Tu Asistente Digital
          </h1>{" "}
          para{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              Ganadería
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Moderniza y digitaliza la gestión de tu negocio ganadero. Registra tu ganado, 
          controla tus finanzas y vende directamente desde tu teléfono. ¡Ya disponible!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row gap-4">
          <Button className="w-full md:w-auto text-white">
            Descargar App
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            Ver Demo
          </Button>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>MVP Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Usuarios Activos</span>
          </div>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
