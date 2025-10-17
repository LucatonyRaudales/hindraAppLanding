import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "¡Valley MVP ya está disponible! 🚀",
      date: new Date().toLocaleDateString('es-ES'),
      excerpt: "Hoy marcamos un hito importante en el desarrollo de Valley. Nuestro MVP (Producto Mínimo Viable) ya está disponible y los primeros usuarios están comenzando a probar la aplicación móvil.",
      content: `
        <p>¡Qué día tan emocionante para todo el equipo de Valley! Después de meses de desarrollo, investigación y pruebas, finalmente hemos lanzado nuestro MVP y los primeros usuarios ya están explorando las funcionalidades de nuestra aplicación móvil.</p>
        
        <h3>¿Qué incluye nuestro MVP?</h3>
        <p>Nuestro Producto Mínimo Viable está diseñado específicamente para ganaderos y agricultores que quieren modernizar su negocio:</p>
        
        <h4>🐮 Gestión de Ganado</h4>
        <ul>
          <li>Registro de animales con fotos, fechas de nacimiento, razas y género</li>
          <li>Control de peso de cada animal a lo largo del tiempo</li>
          <li>Historial de salud para recordar tratamientos y vacunas</li>
          <li>Organización por ubicación para saber dónde está cada animal</li>
          <li>Marcar qué animales están en venta fácilmente</li>
        </ul>
        
        <h4>💰 Control Financiero</h4>
        <ul>
          <li>Registro de ingresos y gastos del negocio ganadero</li>
          <li>Categorización de gastos (alimentación, medicinas, mantenimiento, etc.)</li>
          <li>Resúmenes mensuales de ganancias y gastos</li>
          <li>Historial completo de todas las transacciones</li>
        </ul>
        
        <h4>🛒 Marketplace Integrado</h4>
        <ul>
          <li>Venta de animales directamente desde la app</li>
          <li>Búsqueda y compra de ganado de otros productores</li>
          <li>Sistema de ofertas a vendedores</li>
          <li>Contacto directo con otros ganaderos</li>
          <li>Historial de compras y ventas</li>
        </ul>
        
        <h4>🤖 Asistente Inteligente</h4>
        <ul>
          <li>Preguntas sobre ganadería con respuestas inteligentes</li>
          <li>Consejos especializados para el cuidado del ganado</li>
          <li>Información actualizada sobre el sector ganadero</li>
        </ul>
        
        <h3>Los primeros usuarios</h3>
        <p>Estamos emocionados de ver cómo los primeros ganaderos están utilizando Valley en sus operaciones diarias. La app está disponible en iOS y Android, y funciona incluso sin internet para consultar datos guardados.</p>
        
        <h3>Próximos pasos</h3>
        <p>Este es solo el comienzo. Tenemos grandes planes para Valley, incluyendo:</p>
        <ul>
          <li>Integración con sensores IoT para monitoreo en tiempo real</li>
          <li>Análisis predictivo avanzado para optimizar rendimientos</li>
          <li>Conectividad con mercados internacionales</li>
          <li>Herramientas de sostenibilidad y trazabilidad</li>
        </ul>
        
        <p>¡Mantente atento a más actualizaciones en nuestro blog!</p>
      `,
      tags: ["Lanzamiento", "MVP", "Desarrollo", "Usuarios"],
      author: "Equipo Valley",
      readTime: "3 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog de Valley</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigue nuestro viaje mientras desarrollamos la plataforma que revolucionará la gestión agrícola y ganadera
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {post.date}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.readTime} de lectura</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Author */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    Por <span className="font-semibold">{post.author}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mantente actualizado
          </h2>
          <p className="text-gray-600 mb-6">
            Suscríbete para recibir las últimas noticias sobre el desarrollo de Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="px-6 py-2">
              Suscribirse
            </Button>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Button onClick={() => window.history.back()} variant="outline">
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
