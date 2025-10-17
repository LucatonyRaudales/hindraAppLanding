import { Button } from "../components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Términos de Servicio</h1>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar la aplicación Valley, aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestra aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del servicio</h2>
              <p className="text-gray-700 mb-4">
                Valley es una aplicación móvil diseñada para ayudar a productores agrícolas y ganaderos a gestionar sus operaciones mediante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Dashboards y métricas de producción</li>
                <li>Registro de gastos e ingresos</li>
                <li>Marketplace integrado para venta de productos</li>
                <li>Soporte de IA para recomendaciones</li>
                <li>Herramientas de análisis y reportes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y cuenta de usuario</h2>
              <p className="text-gray-700 mb-4">
                Para utilizar nuestros servicios, debes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proporcionar información precisa y actualizada</li>
                <li>Mantener la confidencialidad de tu cuenta y contraseña</li>
                <li>Ser responsable de todas las actividades bajo tu cuenta</li>
                <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                <li>Tener al menos 18 años o contar con supervisión parental</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso aceptable</h2>
              <p className="text-gray-700 mb-4">Está prohibido:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Usar la aplicación para actividades ilegales o no autorizadas</li>
                <li>Interferir con el funcionamiento de la aplicación</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Transmitir virus, malware o código malicioso</li>
                <li>Violar derechos de propiedad intelectual</li>
                <li>Usar la aplicación para spam o comunicación no solicitada</li>
                <li>Manipular o falsificar datos en la aplicación</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contenido del usuario</h2>
              <p className="text-gray-700 mb-4">
                Eres responsable del contenido que subas a la aplicación. Al subir contenido, garantizas que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Tienes los derechos necesarios sobre el contenido</li>
                <li>El contenido no viola derechos de terceros</li>
                <li>El contenido es preciso y no engañoso</li>
                <li>El contenido cumple con las leyes aplicables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Propiedad intelectual</h2>
              <p className="text-gray-700 mb-4">
                Valley y su contenido original, características y funcionalidad son propiedad de Valley y están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual. No puedes copiar, modificar, distribuir, vender o alquilar cualquier parte de nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                En la máxima medida permitida por la ley, Valley no será responsable por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Pérdidas financieras derivadas del uso de la aplicación</li>
                <li>Interrupciones del servicio o errores técnicos</li>
                <li>Decisiones tomadas basándose en información de la aplicación</li>
                <li>Daños indirectos, incidentales o consecuenciales</li>
                <li>Pérdida de datos o información</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones del servicio</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento, con o sin previo aviso. No seremos responsables ante ti o terceros por cualquier modificación, suspensión o discontinuación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Terminación</h2>
              <p className="text-gray-700 mb-4">
                Podemos terminar o suspender tu cuenta inmediatamente, sin previo aviso, por cualquier motivo, incluyendo la violación de estos Términos de Servicio. Al terminar, tu derecho a usar la aplicación cesará inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ley aplicable</h2>
              <p className="text-gray-700 mb-4">
                Estos términos se rigen por las leyes de [Tu país/estado]. Cualquier disputa será resuelta en los tribunales competentes de [Tu jurisdicción].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos en:
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

export default TermsOfService;
