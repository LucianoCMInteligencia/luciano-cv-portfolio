import { Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const downloadCV = () => {
    // Crear un enlace de descarga para el CV
    const link = document.createElement('a');
    link.href = '/cv-luciano.pdf';
    link.download = 'Luciano-Francisco-Amaya-CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navegación */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Luciano</div>
          <div className="flex gap-4">
            <a href="#experiencia" className="text-foreground hover:text-primary transition-colors">Experiencia</a>
            <a href="#habilidades" className="text-foreground hover:text-primary transition-colors">Habilidades</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Luciano Francisco Amaya Gutiérrez
            </h1>
            <p className="text-2xl text-accent font-semibold mb-6">
              Marketing Digital & Content Specialist
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Creativo digital con enfoque estratégico. Combino marketing, copywriting, diseño de contenidos y comunicación para construir marcas que conectan, emocionan y convierten. Mi trayectoria de reinvención demuestra adaptabilidad y resiliencia en la transformación digital.
            </p>
            
            {/* Datos de contacto */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-foreground">Santa Cruz de Tenerife, España</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-foreground">640134161</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground">planmarkentingailuciano@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={downloadCV}
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Ver Portafolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Profesional */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Perfil Profesional</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Especialista en marketing digital con más de 8 años de experiencia en el sector. Mi enfoque combina creatividad estratégica con ejecución digital de calidad. Integro IA en flujos de trabajo para optimizar la producción creativa sin perder el toque humano que conecta con las audiencias.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Actualmente cursando <strong>Gestión de Marketing y Comunicación (COMM0112)</strong> en el Instituto Canario de Psicología Empresarial (INPSI), completando 730 horas de formación especializada que complementan mi experiencia práctica.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Lo que me define</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Pensamiento estratégico y creativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Orientación a resultados y conversión</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Comunicación clara y persuasiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Adaptabilidad a distintos sectores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-foreground">Integración de IA en flujos de trabajo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Experiencia Profesional</h2>
          
          <div className="space-y-8">
            {/* Experiencia 1 */}
            <div className="border-l-4 border-accent pl-6 pb-8">
              <h3 className="text-xl font-bold text-primary mb-2">Especialista en Marketing Digital & Contenidos</h3>
              <p className="text-accent font-semibold mb-4">Freelance | 2022 – Actualidad</p>
              <p className="text-foreground/80 mb-4">
                Diseño de estrategias digitales orientadas a conversión para clientes de distintos sectores. Producción de contenido para redes sociales, blogs y campañas de comunicación de marca.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent">→</span>
                  <span>Estrategia Digital y Copywriting & Branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">→</span>
                  <span>SEO On-Page & Analítica de rendimiento digital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">→</span>
                  <span>Gestión de campañas en Meta Business Suite</span>
                </li>
              </ul>
            </div>

            {/* Experiencia 2 */}
            <div className="border-l-4 border-primary pl-6 pb-8">
              <h3 className="text-xl font-bold text-primary mb-2">Diseñador de Contenidos Educativos y Técnicos</h3>
              <p className="text-accent font-semibold mb-4">2020 – 2022</p>
              <p className="text-foreground/80">
                Creación de manuales, guías y presentaciones profesionales. Storytelling y diseño visual adaptado a distintos públicos. Traducción de conceptos complejos en narrativas claras y atractivas.
              </p>
            </div>

            {/* Experiencia 3 */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-primary mb-2">Atención al Cliente & Gestión Administrativa</h3>
              <p className="text-accent font-semibold mb-4">2018 – 2020</p>
              <p className="text-foreground/80">
                Comunicación efectiva, resolución de incidencias, organización documental y soporte administrativo. Base sólida en atención al cliente y gestión organizacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Habilidades Clave</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Especialidades Digitales */}
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Especialidades Digitales</h3>
              <ul className="space-y-2">
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Marketing Digital
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Copywriting
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Storytelling
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Gestión de Redes Sociales
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  SEO On-Page
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Email Marketing
                </li>
                <li className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  IA Aplicada
                </li>
              </ul>
            </div>

            {/* Herramientas */}
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Stack Digital</h3>
              <ul className="space-y-2">
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Meta Business Suite
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Google Workspace
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  WordPress
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Canva
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  ChatGPT / IA
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Google Search Console
                </li>
                <li className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Ahrefs
                </li>
              </ul>
            </div>

            {/* Habilidades Blandas */}
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Habilidades Blandas</h3>
              <ul className="space-y-3">
                <li className="text-foreground/80">
                  <span className="font-semibold text-primary">Comunicación:</span> Clara, persuasiva y adaptada a distintas audiencias
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold text-primary">Creatividad:</span> Pensamiento estratégico con ejecución innovadora
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold text-primary">Adaptabilidad:</span> Capacidad de reinvención y aprendizaje continuo
                </li>
                <li className="text-foreground/80">
                  <span className="font-semibold text-primary">Orientación:</span> Enfocado en resultados y conversión
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Formación Académica</h2>
          
          <div className="space-y-6">
            {/* Formación Principal */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-2 border-accent">
              <h3 className="text-xl font-bold text-primary mb-2">
                Gestión de Marketing y Comunicación (COMM0112)
              </h3>
              <p className="text-accent font-semibold mb-2">730 horas | Instituto Canario de Psicología Empresarial (INPSI)</p>
              <p className="text-foreground/80">
                Programa especializado en estrategias de marketing y comunicación moderna. Adquiriendo herramientas y metodologías actuales que complementan mi experiencia práctica con una sólida base teórica.
              </p>
            </div>

            {/* Otras Formaciones */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-primary mb-2">Marketing Digital & Copywriting</h3>
                <p className="text-foreground/80 text-sm">
                  Fundamentos y estrategias avanzadas del ecosistema digital. Técnicas de escritura persuasiva y comunicación estratégica de impacto.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-primary mb-2">Ofimática Avanzada</h3>
                <p className="text-foreground/80 text-sm">
                  Dominio de herramientas de productividad y gestión documental. Optimización de flujos de trabajo administrativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Idiomas */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Idiomas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Español</h3>
              <p className="text-accent font-semibold mb-2">Nivel Nativo</p>
              <p className="text-foreground/80">
                Comunicación oral y escrita con pleno dominio. Redacción profesional, creativa y técnica en todos los registros.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Inglés</h3>
              <p className="text-accent font-semibold mb-2">Nivel Intermedio</p>
              <p className="text-foreground/80">
                Capacidad de comunicación en entornos profesionales, lectura de documentación técnica y redacción básica en contextos digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">¿Hablamos?</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/80 text-center mb-8">
              Estoy disponible para proyectos remotos, híbridos y presenciales. Si buscas un especialista que una creatividad estratégica con ejecución digital de calidad, estemos en contacto.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border border-border mb-4 inline-block">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-primary mb-1">Email</p>
                <a href="mailto:planmarkentingailuciano@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                  planmarkentingailuciano@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border border-border mb-4 inline-block">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-primary mb-1">Teléfono</p>
                <a href="tel:640134161" className="text-foreground/80 hover:text-primary transition-colors">
                  640 134 161
                </a>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg border border-border mb-4 inline-block">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-primary mb-1">Ubicación</p>
                <p className="text-foreground/80">
                  Santa Cruz de Tenerife
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-accent font-semibold italic">
                «Creatividad con propósito. Estrategia con alma.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2026 Luciano Francisco Amaya Gutiérrez</p>
          <p className="text-white/80 text-sm">
            Especialista en Marketing Digital & Comunicación | Cursando COMM0112 en INPSI
          </p>
        </div>
      </footer>
    </div>
  );
}
