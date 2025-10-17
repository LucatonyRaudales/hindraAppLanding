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
    question: "¿Qué funcionalidades incluye el MVP de Valley?",
    answer:
      "Nuestro MVP incluye gestión completa de ganado (registro con fotos, control de peso, historial de salud), control financiero (ingresos, gastos categorizados, resúmenes mensuales), marketplace integrado para compra y venta directa, y un asistente inteligente para consultas sobre ganadería.",
    value: "item-1",
  },
  {
    question: "¿En qué dispositivos funciona Valley?",
    answer:
      "Valley está disponible para iOS y Android. La aplicación funciona incluso sin internet para consultar datos guardados, y se sincroniza automáticamente cuando hay conexión.",
    value: "item-2",
  },
  {
    question: "¿Cómo funciona el marketplace de Valley?",
    answer:
      "Puedes vender tus animales directamente desde la app, buscar y comprar ganado de otros productores, hacer ofertas, contactar directamente con vendedores y mantener un historial completo de tus compras y ventas.",
    value: "item-3",
  },
  {
    question: "¿Valley funciona sin internet?",
    answer:
      "Sí, Valley funciona sin internet para consultar datos guardados. Cuando tengas conexión, la app se sincroniza automáticamente para mantener tus datos actualizados.",
    value: "item-4",
  },
  {
    question: "¿Cómo registro mi ganado en Valley?",
    answer:
      "Es muy fácil: toma una foto de cada animal, registra su fecha de nacimiento, raza, género y ubicación. Puedes agregar información adicional como peso, tratamientos médicos y marcar si está en venta.",
    value: "item-5",
  },
  {
    question: "¿Valley es seguro para mis datos?",
    answer:
      "Sí, Valley protege todos tus datos con encriptación y respaldo automático. Tu información está segura y solo tú tienes acceso a ella. Puedes consultar nuestra Política de Privacidad para más detalles.",
    value: "item-6",
  },
  {
    question: "¿Cuánto cuesta usar Valley?",
    answer:
      "Valley está disponible de forma gratuita en su versión MVP. Estamos enfocados en que los ganaderos puedan probar y beneficiarse de la aplicación. Mantente atento a futuras actualizaciones sobre planes premium.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
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
