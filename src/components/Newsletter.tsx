import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

const InputField = ({
  label,
  register,
  name,
  required,
  pattern,
  errors, // Agregar errors como prop
}: {
  label: string;
  register: any;
  name: keyof FormData;
  required?: string;
  pattern?: { value: RegExp; message: string };
  errors: any;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Input
        {...register(name, { required, pattern })}
        placeholder={label}
        className="bg-muted/50 dark:bg-muted/80"
        aria-label={label}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name].message}</span>
      )}
    </div>
  );
};

export const Newsletter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post(
        "https://backend-production-989a.up.railway.app/api/v1/pre-registrate",
        data
      );
      alert("Suscripción exitosa!");
      reset();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("El correo ya está registrado o tuvimos un problema interno");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Únete a la aventura{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Pre-regístrate
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Sé de los primeros en usar la aplicación para mejorar la producción y
          alcanzar mayores ingresos con menos trabajo.
        </p>

        <form
          className="flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Nombre Completo"
            name="fullName"
            register={register}
            required="Nombre completo es requerido"
            errors={errors} // Pasar errors aquí
          />
          <InputField
            label="Correo Electrónico"
            name="email"
            register={register}
            required="Correo electrónico es requerido"
            pattern={{
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Formato de correo no válido",
            }}
            errors={errors} // Pasar errors aquí
          />
          <InputField
            label="Teléfono"
            name="phone"
            register={register}
            required="Teléfono es requerido"
            pattern={{
              value: /^\d{8,}$/,
              message: "Número de teléfono debe tener 8 dígitos",
            }}
            errors={errors} // Pasar errors aquí
          />
          <Button type="submit" className="mt-4" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1016 0 8 8 0 00-16 0z"
                  />
                </svg>
              </div>
            ) : (
              "Registrarme"
            )}
          </Button>
        </form>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
