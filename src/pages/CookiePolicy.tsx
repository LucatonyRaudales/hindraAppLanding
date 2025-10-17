import { Button } from "../components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestra aplicación web o sitio. Nos ayudan a mejorar tu experiencia, recordar tus preferencias y analizar cómo utilizas nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipos de cookies que utilizamos</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies esenciales</h3>
                <p className="text-gray-700 mb-2">
                  Estas cookies son necesarias para el funcionamiento básico de la aplicación:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies de sesión para mantener tu sesión activa</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de autenticación para verificar tu identidad</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de rendimiento</h3>
                <p className="text-gray-700 mb-2">
                  Nos ayudan a entender cómo los usuarios interactúan con la aplicación:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Google Analytics para análisis de uso</li>
                  <li>Cookies de rendimiento para optimizar la velocidad</li>
                  <li>Cookies de error para identificar problemas técnicos</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de funcionalidad</h3>
                <p className="text-gray-700 mb-2">
                  Mejoran la funcionalidad y personalización:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies de preferencias de idioma</li>
                  <li>Cookies de configuración de la interfaz</li>
                  <li>Cookies de recordatorio de formularios</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de marketing</h3>
                <p className="text-gray-700 mb-2">
                  Utilizadas para mostrar contenido relevante y medir la efectividad de campañas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Cookies de seguimiento de conversiones</li>
                  <li>Cookies de remarketing</li>
                  <li>Cookies de redes sociales</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies de terceros</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos servicios de terceros que pueden establecer sus propias cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento</li>
                <li><strong>Google Maps:</strong> Para funcionalidades de ubicación</li>
                <li><strong>Redes sociales:</strong> Para botones de compartir y widgets</li>
                <li><strong>Servicios de pago:</strong> Para procesar transacciones</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Duración de las cookies</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierras el navegador</li>
                  <li><strong>Cookies persistentes:</strong> Permanecen hasta su fecha de expiración o las elimines manualmente</li>
                  <li><strong>Cookies de autenticación:</strong> Típicamente 30 días</li>
                  <li><strong>Cookies de análisis:</strong> Hasta 2 años</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cómo gestionar las cookies</h2>
              <p className="text-gray-700 mb-4">
                Puedes controlar y gestionar las cookies de varias maneras:
              </p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuración del navegador</h3>
                <p className="text-gray-700 mb-2">
                  La mayoría de navegadores te permiten:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Ver qué cookies están almacenadas</li>
                  <li>Eliminar cookies individualmente o todas a la vez</li>
                  <li>Bloquear cookies de sitios específicos</li>
                  <li>Configurar alertas cuando se establezcan cookies</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Herramientas de gestión</h3>
                <p className="text-gray-700 mb-2">
                  También puedes usar herramientas como:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Extensiones de navegador para gestión de cookies</li>
                  <li>Software de privacidad especializado</li>
                  <li>Configuraciones de privacidad en tu dispositivo</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Impacto de deshabilitar cookies</h2>
              <p className="text-gray-700 mb-4">
                Si deshabilitas las cookies, algunas funcionalidades de la aplicación pueden verse afectadas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>No podrás mantener la sesión iniciada</li>
                <li>Las preferencias no se recordarán</li>
                <li>Algunas características pueden no funcionar correctamente</li>
                <li>La experiencia de usuario puede verse reducida</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies en aplicaciones móviles</h2>
              <p className="text-gray-700 mb-4">
                En nuestras aplicaciones móviles, utilizamos tecnologías similares a las cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Identificadores de dispositivo para análisis</li>
                <li>Almacenamiento local para preferencias</li>
                <li>Tokens de autenticación para sesiones</li>
                <li>Datos de uso para mejorar la aplicación</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Actualizaciones de esta política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas o por razones legales. Te recomendamos revisar esta página periódicamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> contact@hindra.net</p>
                <p className="text-gray-700"><strong>Dirección:</strong> Danlí, El Paraíso, Honduras</p>
                <p className="text-gray-700"><strong>Teléfono:</strong> +504 3228-6657</p>
              </div>
            </section>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => window.history.back()} variant="outline">
              Volver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
