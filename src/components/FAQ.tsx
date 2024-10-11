import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué ofrece Hindra en su MVP?",
    answer:
      "Hindra ofrece una plataforma inicial que ayuda a gestionar ranchos ganaderos y agrícolas, proporcionando dashboards básicos y métricas clave para mejorar la producción. También ofrece un panel donde podrás registrar tus gastos e ingresos, además de tener una marketplace dentro de la app donde podrás vender tus productos",
    value: "item-1",
  },
  {
    question: "¿Cuáles son los planes futuros de Hindra?",
    answer:
      "Estamos comprometidos a expandir nuestras funcionalidades a medida que crecemos, agregando herramientas avanzadas de IA, machine learning y análisis de datos para optimizar aún más la gestión agrícola y ganadera.",
    value: "item-2",
  },
  {
    question: "¿Cómo puedo beneficiarme de Hindra desde el principio?",
    answer:
      "Desde el primer día, Hindra está diseñado para ayudar a los productores a mejorar la eficiencia y la sostenibilidad de sus operaciones, proporcionando herramientas esenciales y conocimientos que aumentan con el tiempo.",
    value: "item-3",
  },
  {
    question: "¿Cómo puedo acceder al soporte de IA en Hindra?",
    answer:
      "Hindra ofrece acceso a soporte 24/7 impulsado por IA para resolver consultas y proporcionar recomendaciones basadas en datos, garantizando así un acompañamiento constante en la mejora de sus operaciones.",
    value: "item-4",
  },
  {
    question:
      "¿Cuándo estarán disponibles los nuevos planes y funcionalidades?",
    answer:
      "Estamos trabajando diligentemente para lanzar nuevos planes y características a medida que evolucionamos. Mantente atento a las actualizaciones dentro de la aplicación para conocer las últimas mejoras disponibles.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
