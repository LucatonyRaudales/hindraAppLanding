import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
        <div className="col-span-1">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            Valley
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Síguenos</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Plataformas</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Sobre</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Características
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Precios
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contacto</h3>
          <div>
            <a
              href="mailto:contact@hindra.net"
              className="opacity-60 hover:opacity-100"
            >
              contact@hindra.net
            </a>
          </div>

          <div>
            <span className="opacity-60">
              Danlí, El Paraíso<br />
              Honduras
            </span>
          </div>

          <div>
            <a
              href="tel:+50432286657"
              className="opacity-60 hover:opacity-100"
            >
              +504 3228-6657
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <Link
              to="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
              Política de Privacidad
            </Link>
          </div>

          <div>
            <Link
              to="/terms-of-service"
              className="opacity-60 hover:opacity-100"
            >
              Términos de Servicio
            </Link>
          </div>

          <div>
            <Link
              to="/cookie-policy"
              className="opacity-60 hover:opacity-100"
            >
              Política de Cookies
            </Link>
          </div>

          <div>
            <Link
              to="/data-protection"
              className="opacity-60 hover:opacity-100"
            >
              Protección de Datos
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 made with{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            LOVE
          </a>{" "}
          in Centro América
        </h3>
      </section>
    </footer>
  );
};
