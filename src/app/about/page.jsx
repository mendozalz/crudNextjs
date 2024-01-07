import EmailCopy from "@/src/components/EmailCopy";

const About = () => {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center p-4">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            ¡Hola! Soy.
            <span class="sm:block"> Lenin Mendoza. </span>
          </h1>

          <p class="mx-auto mt-4 w-full sm:text-xl/relaxed text-left">
            Un apasionado desarrollador web con sede en Medellín. Mi enfoque
            principal es la programación web, y me encanta mantenerme al día con
            las últimas tendencias tecnológicas. En mi proyecto más reciente, he
            creado una aplicación de lista de tareas utilizando Next.js y
            Tailwind CSS. Con Next.js, logré una experiencia de usuario fluida y
            rápida gracias a su enfoque de renderización del lado del servidor.
            Además, con la ayuda de Tailwind CSS, la interfaz de usuario es
            elegante, moderna y fácil de personalizar. Esta aplicación de lista
            de tareas no es solo funcional, ¡también es visualmente atractiva!
            La combinación de Next.js y Tailwind CSS me permitió crear una
            experiencia de usuario intuitiva y agradable, donde la usabilidad se
            encuentra con el diseño minimalista. Mi compromiso con la excelencia
            en el desarrollo web se refleja en cada detalle de esta aplicación.
            ¡Explora tu lista de tareas de manera eficiente y con estilo!
            ¡Espero que disfrutes usando esta aplicación tanto como yo disfruté
            creándola!
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a>
              <EmailCopy />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
