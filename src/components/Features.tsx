import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Bot, 
  DollarSign, 
  ShoppingCart, 
  Heart, 
  MapPin, 
  TrendingUp,
  Users,
  Smartphone,
  WifiOff
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: FeatureProps[] = [
  {
    title: "Gestión de Ganado",
    description:
      "Registra todos tus animales con fotos, fechas de nacimiento, razas y género. Lleva control de peso, historial de salud y organiza por ubicación.",
    icon: <Bot className="w-12 h-12" />,
    color: "bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg",
  },
  {
    title: "Control Financiero",
    description:
      "Registra ingresos y gastos de tu negocio ganadero. Categoriza gastos, ve resúmenes mensuales y mantén historial completo de transacciones.",
    icon: <DollarSign className="w-12 h-12" />,
    color: "bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg",
  },
  {
    title: "Marketplace Integrado",
    description:
      "Vende tus animales directamente desde la app. Busca y compra ganado de otros productores, haz ofertas y contacta directamente.",
    icon: <ShoppingCart className="w-12 h-12" />,
    color: "bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg",
  },
];

const featureList = [
  { text: "Registro con fotos", icon: <Smartphone className="w-4 h-4" /> },
  { text: "Control de peso", icon: <TrendingUp className="w-4 h-4" /> },
  { text: "Historial de salud", icon: <Heart className="w-4 h-4" /> },
  { text: "Organización por ubicación", icon: <MapPin className="w-4 h-4" /> },
  { text: "Categorización de gastos", icon: <DollarSign className="w-4 h-4" /> },
  { text: "Resúmenes mensuales", icon: <TrendingUp className="w-4 h-4" /> },
  { text: "Compra y venta directa", icon: <ShoppingCart className="w-4 h-4" /> },
  { text: "Asistente inteligente", icon: <Users className="w-4 h-4" /> },
  { text: "Funciona sin internet", icon: <WifiOff className="w-4 h-4" /> },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Características{" "}
          <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Principales
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubre las herramientas que revolucionarán la gestión de tu negocio ganadero
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {featureList.map((feature, index) => (
          <div key={index} className="group">
            <Badge
              variant="secondary"
              className="text-sm flex items-center gap-2 px-4 py-2 bg-background/50 hover:bg-background/80 border border-border hover:border-border/80 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>
              {feature.text}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon, color }: FeatureProps, index) => (
          <Card 
            key={title} 
            className="group relative overflow-hidden border border-border/50 bg-card hover:bg-card/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10 pb-6">
              <div className={`w-24 h-24 mx-auto rounded-2xl ${color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {description}
              </p>
              
              {/* Decorative element */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
