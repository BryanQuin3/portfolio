import { Footer } from "./Footer";
export const AboutSection = () => {
  return (
    <div
      className="col-span-4 bg-no-repeat bg-cover min-w-full flex flex-col gap-4 justify-center items-center p-10 overflow-hidden rounded-3xl md:gap-12"
      style={{ backgroundImage: "url('./images/bg.webp')" }}
    >
      <h2 className="text-3xl font-semibold pr-6 md:text-5xl">
        ¡Hola! Soy Bryan, un Desarrollador Frontend Super Creativo.
      </h2>
      <article className="flex flex-col gap-3">
        <p>
          Con más de 3 años de experiencia, he liderado el desarrollo de
          proyectos para empresas emergentes, optimizando la experiencia del
          usuario y mejorando la velocidad de carga del sitio web en un 40%.
        </p>
        <p>
          Mi enfoque se centra en fusionar diseño creativo con funcionalidad
          robusta, ofreciendo soluciones que cautivan a los usuarios y generan
          impacto.
        </p>
      </article>
      <Footer />
    </div>
  );
};

export default AboutSection;
