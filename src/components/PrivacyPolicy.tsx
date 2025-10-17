import { Button } from "./ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Valley recopila información personal cuando te registras en nuestra aplicación, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nombre completo y dirección de correo electrónico</li>
                <li>Información de contacto y ubicación</li>
                <li>Datos de tu rancho o finca (tamaño, tipo de producción, etc.)</li>
                <li>Información financiera básica para el seguimiento de gastos e ingresos</li>
                <li>Datos de uso de la aplicación y preferencias</li>
                <li>Información técnica del dispositivo (modelo, sistema operativo, versión de la app)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo utilizamos tu información</h2>
              <p className="text-gray-700 mb-4">Utilizamos tu información personal para:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Proporcionar y mejorar nuestros servicios de gestión agrícola y ganadera</li>
                <li>Personalizar tu experiencia en la aplicación</li>
                <li>Enviar notificaciones importantes sobre tu cuenta o la aplicación</li>
                <li>Proporcionar soporte técnico y atención al cliente</li>
                <li>Analizar el uso de la aplicación para mejoras futuras</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartir información</h2>
              <p className="text-gray-700 mb-4">
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con la ley o procesos legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar la aplicación (bajo acuerdos de confidencialidad)</li>
                <li>En caso de fusión, adquisición o venta de activos (con notificación previa)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad de los datos</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encriptación de datos en tránsito y en reposo</li>
                <li>Acceso restringido a la información personal</li>
                <li>Monitoreo regular de nuestros sistemas de seguridad</li>
                <li>Capacitación del personal en protección de datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Tus derechos</h2>
              <p className="text-gray-700 mb-4">Tienes derecho a:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta o incompleta</li>
                <li>Solicitar la eliminación de tu información personal</li>
                <li>Limitar el procesamiento de tu información</li>
                <li>Portabilidad de datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Retención de datos</h2>
              <p className="text-gray-700 mb-4">
                Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Menores de edad</h2>
              <p className="text-gray-700 mb-4">
                Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cambios a esta política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos a través de la aplicación o por correo electrónico. Te recomendamos revisar esta política periódicamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, puedes contactarnos en:
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

export default PrivacyPolicy;
