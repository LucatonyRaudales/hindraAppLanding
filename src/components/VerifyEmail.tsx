import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (token && email) {
      // Llamar a la API backend para verificar el token
      const verifyEmail = async () => {
        try {
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api/v1/auth/verify-email?token=${token}&email=${email}`);
          const data = await res.json();

          if (res.ok) {
            setSuccess(true);
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error(error);
          setError('Hubo un error al verificar tu correo');
        } finally {
          setLoading(false);
        }
      };

      verifyEmail();
    } else {
      setError('Token o email no encontrados en la URL');
      setLoading(false);
    }
  }, [token, email]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        {success ? (
          <div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-green-600 mb-4">¡Verificación exitosa!</h1>
            <p className="text-lg font-semibold text-gray-700 mb-2">Tu correo ha sido verificado correctamente.</p>
            <p className="text-sm text-gray-600 mb-6">Ahora puedes acceder a tu cuenta desde el móvil.</p>
          </div>
        ) : (
          <div>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-red-600 mb-4">Error de verificación</h1>
            <p className="text-gray-700 mb-6">{error || 'No se pudo verificar tu correo. Intenta de nuevo más tarde.'}</p>
          </div>
        )}
        <Button 
          variant="default" 
          className="w-full" 
          onClick={() => window.location.href = '/'}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
