import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

export const LatestNews = () => {
  const latestPost = {
    title: "¡Valley MVP ya está disponible! 🚀",
    date: new Date().toLocaleDateString('es-ES'),
    excerpt: "Hoy marcamos un hito importante en el desarrollo de Valley. Nuestro MVP (Producto Mínimo Viable) ya está disponible y los primeros usuarios están comenzando a probar la aplicación móvil.",
    tags: ["Lanzamiento", "MVP", "Desarrollo"],
    readTime: "3 min"
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Últimas Noticias
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mantente al día con el desarrollo de Valley y las últimas actualizaciones
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Latest Post */}
        <Card className="md:col-span-2 lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-sm">
                {latestPost.date}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {latestPost.readTime} de lectura
              </span>
            </div>
            <CardTitle className="text-2xl font-bold">
              {latestPost.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {latestPost.excerpt}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {latestPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link to="/blog">
              <Button variant="outline" className="w-full">
                Leer más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Coming Soon Cards */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge variant="outline" className="w-fit mb-2">
              Próximamente
            </Badge>
            <CardTitle className="text-xl">
              Integración IoT
            </CardTitle>
            <CardDescription>
              Conecta sensores inteligentes para monitoreo en tiempo real
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge variant="outline" className="w-fit mb-2">
              En desarrollo
            </Badge>
            <CardTitle className="text-xl">
              Análisis Predictivo
            </CardTitle>
            <CardDescription>
              IA avanzada para predecir rendimientos y optimizar cosechas
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge variant="outline" className="w-fit mb-2">
              Roadmap
            </Badge>
            <CardTitle className="text-xl">
              Mercados Globales
            </CardTitle>
            <CardDescription>
              Conecta con compradores internacionales directamente
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="text-center">
        <Link to="/blog">
          <Button variant="outline" size="lg">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
