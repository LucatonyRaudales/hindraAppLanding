import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Newspaper } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Agricultor_peruano.jpg"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">José Martinexz</CardTitle>
            <CardDescription>Agricultor</CardDescription>
          </div>
        </CardHeader>

        <CardContent>La sequía daña mis cosechas</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://www.gob.mx/cms/uploads/image/file/379472/ganader_a_6.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Carlos B. Hernandez</CardTitle>
          <CardDescription className="font-normal text-primary">
            Ganadero
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Quiero mejorar la rentabilidad de mi hacienda. El cambio climático y
            otros factores lo dificultan.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.nytimes.com/es/2019/04/15/espanol/america-latina/cambio-climatico-centroamerica-granjeros.html"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">News</span>
              <Newspaper className="w-5 h-5" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Gratis
            <Badge variant="secondary" className="text-sm text-primary">
              Free for Now
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /mes</span>
          </div>

          <CardDescription>
            Regístrate y obtén acceso a la app antes que todos.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Registrarme </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Estadísticas", "Trazabilidad", "Registro financiero"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Valley como solución</CardTitle>
            <CardDescription className="text-md mt-2">
              Nuestra tecnología te ayudará a resolver tus problemas del día a
              día.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
