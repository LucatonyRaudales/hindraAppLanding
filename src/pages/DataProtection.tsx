import { Button } from "../components/ui/button";

const DataProtection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Protección de Datos</h1>
            <p className="text-gray-600">Cumplimiento GDPR, CCPA y regulaciones de privacidad</p>
            <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Marco legal aplicable</h2>
              <p className="text-gray-700 mb-4">
                Valley cumple con las siguientes regulaciones de protección de datos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>GDPR (Reglamento General de Protección de Datos)</strong> - Unión Europea</li>
                <li><strong>CCPA (Ley de Privacidad del Consumidor de California)</strong> - California, EE.UU.</li>
                <li><strong>LGPD (Lei Geral de Proteção de Dados)</strong> - Brasil</li>
                <li><strong>PIPEDA (Personal Information Protection and Electronic Documents Act)</strong> - Canadá</li>
                <li>Otras leyes locales de protección de datos aplicables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Base legal para el procesamiento</h2>
              <p className="text-gray-700 mb-4">
                Procesamos tus datos personales basándonos en las siguientes bases legales:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consentimiento</h3>
                <p className="text-gray-700 mb-2">Para marketing, cookies no esenciales y comunicaciones promocionales.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ejecución de contrato</h3>
                <p className="text-gray-700 mb-2">Para proporcionar nuestros servicios y cumplir con nuestros términos.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interés legítimo</h3>
                <p className="text-gray-700 mb-2">Para mejorar nuestros servicios, análisis de seguridad y desarrollo de productos.</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Obligación legal</h3>
                <p className="text-gray-700 mb-2">Para cumplir con requisitos legales y regulatorios.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tus derechos bajo GDPR</h2>
              <p className="text-gray-700 mb-4">
                Como usuario en la Unión Europea, tienes los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Derecho de acceso:</strong> Solicitar información sobre qué datos personales procesamos</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Derecho al olvido:</strong> Solicitar la eliminación de tus datos personales</li>
                <li><strong>Derecho de limitación:</strong> Restringir el procesamiento de tus datos</li>
                <li><strong>Derecho de portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
                <li><strong>Derecho de oposición:</strong> Oponerte al procesamiento por motivos legítimos</li>
                <li><strong>Derechos relacionados con decisiones automatizadas:</strong> No ser objeto de decisiones basadas únicamente en procesamiento automatizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Tus derechos bajo CCPA</h2>
              <p className="text-gray-700 mb-4">
                Como residente de California, tienes los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Derecho a saber:</strong> Qué información personal recopilamos y cómo la usamos</li>
                <li><strong>Derecho a eliminar:</strong> Solicitar la eliminación de tu información personal</li>
                <li><strong>Derecho a optar por no participar:</strong> En la venta de información personal</li>
                <li><strong>Derecho a no discriminación:</strong> No ser discriminado por ejercer tus derechos</li>
                <li><strong>Derecho a corrección:</strong> Solicitar la corrección de información inexacta</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Transferencias internacionales</h2>
              <p className="text-gray-700 mb-4">
                Tus datos pueden ser transferidos y procesados en países fuera de tu jurisdicción. Cuando esto ocurra:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Utilizamos cláusulas contractuales estándar aprobadas por la UE</li>
                <li>Implementamos medidas de seguridad adicionales</li>
                <li>Verificamos que el país receptor tenga un nivel adecuado de protección</li>
                <li>Obtenemos tu consentimiento explícito cuando sea necesario</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Medidas de seguridad</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Medidas técnicas</h3>
                  <ul className="list-disc pl-4 text-gray-700 text-sm">
                    <li>Encriptación end-to-end</li>
                    <li>Autenticación de dos factores</li>
                    <li>Monitoreo de seguridad 24/7</li>
                    <li>Copias de seguridad regulares</li>
                    <li>Firewalls y sistemas de detección de intrusiones</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Medidas organizativas</h3>
                  <ul className="list-disc pl-4 text-gray-700 text-sm">
                    <li>Políticas de acceso estrictas</li>
                    <li>Capacitación del personal en privacidad</li>
                    <li>Auditorías regulares de seguridad</li>
                    <li>Procedimientos de respuesta a incidentes</li>
                    <li>Evaluaciones de impacto en la privacidad</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retención de datos</h2>
              <p className="text-gray-700 mb-4">
                Conservamos tus datos personales solo durante el tiempo necesario:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>Datos de cuenta:</strong> Mientras tu cuenta esté activa + 3 años</li>
                  <li><strong>Datos de transacciones:</strong> 7 años (requisitos fiscales)</li>
                  <li><strong>Datos de marketing:</strong> Hasta que retires tu consentimiento</li>
                  <li><strong>Datos de soporte:</strong> 3 años después de la resolución</li>
                  <li><strong>Datos de análisis:</strong> 2 años (anonimizados después de 1 año)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Ejercer tus derechos</h2>
              <p className="text-gray-700 mb-4">
                Para ejercer cualquiera de tus derechos, puedes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contactarnos por email a privacy@valley.app</li>
                <li>Usar el formulario de contacto en la aplicación</li>
                <li>Llamarnos al [número de teléfono]</li>
                <li>Enviar una carta a nuestra dirección física</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Responderemos a tu solicitud dentro de 30 días (o 45 días en casos complejos). 
                Podemos solicitar verificación de identidad para proteger tu privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Autoridad de supervisión</h2>
              <p className="text-gray-700 mb-4">
                Si no estás satisfecho con cómo manejamos tu solicitud, tienes derecho a presentar una queja ante la autoridad de protección de datos de tu jurisdicción:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-disc pl-6 text-gray-700">
                  <li><strong>UE:</strong> Autoridad de Protección de Datos de tu país</li>
                  <li><strong>California:</strong> California Attorney General</li>
                  <li><strong>Brasil:</strong> Autoridade Nacional de Proteção de Dados (ANPD)</li>
                  <li><strong>Canadá:</strong> Privacy Commissioner of Canada</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto del DPO</h2>
              <p className="text-gray-700 mb-4">
                Nuestro Oficial de Protección de Datos (DPO) puede ser contactado en:
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

export default DataProtection;
