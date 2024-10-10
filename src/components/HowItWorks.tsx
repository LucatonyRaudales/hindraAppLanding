import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <GiftIcon />,
    title: "Sostenibilidad",
    description:
      "Fomentamos prácticas agrícolas y ganaderas responsables que protegen nuestros recursos naturales, asegurando un futuro saludable para las próximas generaciones",
  },
  {
    icon: <MedalIcon />,
    title: "Innovación",
    description:
      "Integramos tecnología avanzada, como IA y análisis de datos, para optimizar la producción y la eficiencia en las operaciones, beneficiando tanto a los productores como a los consumidores",
  },
  {
    icon: <MapIcon />,
    title: "Comunidad",
    description:
      "Trabajamos en estrecha colaboración con los productores locales, ofreciendo capacitación y soporte, para fortalecer sus capacidades y mejorar sus condiciones de vida",
  },
  {
    icon: <PlaneIcon />,
    title: "Eficiencia",
    description:
      "Nos comprometemos a generar un impacto positivo en la sociedad y el medio ambiente, promoviendo un equilibrio entre la producción y la conservación para el bienestar de todos",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Ayudaremos{" "}
        </span>
        a Centro América y Latam
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Nuestra misión es impulsar el bienestar de todos. Creemos en una
        agricultura y ganadería sostenibles que beneficien a todos, promoviendo
        prácticas tecnológicas e innovadoras para un futuro más próspero.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
