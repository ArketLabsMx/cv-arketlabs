import { Mail, MapPin, Phone, Globe, Download, ExternalLink, Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import emmanuelPhoto from "@assets/Traje_negro_studio_1766723537727.jpg";

const experiences = [
  {
    id: "arketlabs",
    featured: true,
    position: "Founder & CEO",
    company: "ArketLabs",
    location: "Mérida, Yucatán",
    period: "2024 - Presente",
    achievements: [
      "Fundé laboratorio de Sistemas de Inteligencia Comercial especializado en Conversational AI",
      "Desarrollé ARCIA: sistema conversacional con +56 nodos, integración OpenAI, Airtable, Google Docs",
      "Implementé metodología Dale Carnegie codificada en flujos de n8n",
      "Stack: n8n, Docker, OpenAI API, Claude API, PostgreSQL, Airtable",
    ],
  },
  {
    id: "asesor",
    featured: false,
    position: "Capital & Real Estate Advisory",
    company: "Independiente",
    location: "Guadalajara → Yucatán",
    period: "2021 - Presente",
    achievements: [
      "Asesoré inversionistas nacionales e internacionales en preventa de proyectos en Yucatán",
      "Análisis de mercado financiero y macroeconómico",
      "100% de acierto en recomendaciones - todas rentables",
      "Incremento sostenido del ticket promedio tres años consecutivos",
    ],
  },
  {
    id: "humayuhum",
    featured: false,
    position: "Founder",
    company: "HUMAYUHUM",
    location: "",
    period: "2017 - 2020",
    achievements: [
      "Fundé agencia de marketing digital con equipo distribuido globalmente",
      "Apliqué ventas consultivas al entorno digital",
    ],
  },
  {
    id: "jeunesse",
    featured: false,
    position: "Líder de Equipo Comercial",
    company: "Jeunesse Global",
    location: "",
    period: "2013 - 2017",
    achievements: [
      "Formé y lideré red de +500 personas en múltiples países",
      "Liderazgo remoto y equipos multiculturales",
      "Viajes de incentivo: Jamaica, Las Vegas, California, Panamá",
    ],
  },
  {
    id: "metlife",
    featured: false,
    position: "Gerente Asociado",
    company: "MetLife México",
    location: "",
    period: "2011 - 2013",
    achievements: [
      "Procesos de reclutamiento y formación para Agentes de Seguros",
      "Manuales y sistemas con metodologías replicables",
      "Especialista en planificación fiscal y Planes de Retiro",
    ],
  },
  {
    id: "ing",
    featured: false,
    position: "Ejecutivo → Gerente Comercial #1 Zona Occidente",
    company: "ING Financial Group",
    location: "",
    period: "2005 - 2011",
    achievements: [
      "Transformé equipo de bajo rendimiento en #1 de la Zona Occidente",
      "Estrategias exitosas en segmento de retiro e inversión",
      "Sistema de servicio post-venta que mantuvo carteras a largo plazo",
    ],
  },
];

const skills = [
  {
    id: "ai",
    title: "Conversational AI",
    tags: ["Diseño de flujos conversacionales", "NLP", "Prompt Engineering", "OpenAI API", "Claude API", "LLMs"],
  },
  {
    id: "automation",
    title: "Automatización",
    tags: ["n8n (self-hosted)", "Webhooks", "REST APIs", "Docker", "Integración de sistemas"],
  },
  {
    id: "data",
    title: "Datos",
    tags: ["Airtable", "PostgreSQL", "Google Docs API", "Google Sheets", "Slack API", "Webhooks", "JSON", "APIs REST", "Análisis financiero", "CRM", "Pinecone", "Vector databases"],
  },
  {
    id: "methodology",
    title: "Metodologías",
    tags: ["Venta Consultiva", "Dale Carnegie", "AI-assisted development", "Orquestación de agentes IA"],
  },
];

const certifications = [
  "LIMRA: Gerente Certificado de Asesores Financieros",
  "Cédula A - CNSF",
  "Venta Consultiva",
  "Empowerment en Gestión Gerencial",
  "IA y Automatización Comercial",
  "Marketing Digital",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1f3a] text-white font-inter relative overflow-x-hidden">
      {/* Decorative Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#a4c3b2] rounded-full opacity-[0.08] blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#b8b4cc] rounded-full opacity-[0.08] blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#a4c3b2] rounded-full opacity-[0.06] blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b1f3a]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <a
              href="https://arketlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-bold text-xl text-white hover:text-[#a4c3b2] transition-colors"
              data-testid="link-arketlabs-logo"
            >
              ArketLabs
            </a>
            <nav className="hidden md:flex items-center gap-6 flex-wrap">
              <a href="#experiencia" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-nav-experiencia">
                Experiencia
              </a>
              <a href="#competencias" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-nav-competencias">
                Competencias
              </a>
              <a href="#educacion" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-nav-educacion">
                Educación
              </a>
              <a
                href="https://arketlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#a4c3b2] hover:text-[#a4c3b2]/80 transition-colors text-sm"
                data-testid="link-nav-arketlabs"
              >
                ArketLabs <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Text Content - Left side on desktop */}
            <div className="flex-1 md:w-[60%] text-center md:text-left">
              <Badge
                className="mb-6 bg-[#a4c3b2]/20 text-[#a4c3b2] border-[#a4c3b2]/30 hover:bg-[#a4c3b2]/30 no-default-hover-elevate no-default-active-elevate"
                data-testid="badge-available"
              >
                Disponible para proyectos
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4">
                Emmanuel González{" "}
                <span className="text-[#a4c3b2] italic">Flores</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-[22px] text-white/80 mb-6">
                Arquitecto de Inteligencia Comercial
              </p>

              <p className="text-base md:text-lg text-white/60 mb-8 max-w-xl mx-auto md:mx-0">
                Ejecutivo comercial con +20 años en ventas consultivas de alto nivel. 
                Desde 2022 construyo sistemas de Conversational AI que automatizan lo que yo hacía manualmente. 
                Fundador de ArketLabs, creador de ARCIA.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="mailto:emmanuel@arketlabs.com"
                  className="inline-flex items-center justify-center h-14 px-8 bg-[#facc15] text-black font-semibold rounded-[14px] hover:bg-[#facc15]/90 transition-colors w-full sm:w-auto"
                  data-testid="button-contactar"
                >
                  Contactar
                </a>
                <a
                  href="https://docs.google.com/document/d/1Q_g4kMoILZ9SvXfuHQtqqR2UFSU6EJo7/edit?usp=sharing&ouid=114239756021683353813&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white/10 border border-white/20 text-white font-medium rounded-[14px] hover:bg-white/15 transition-colors w-full sm:w-auto"
                  data-testid="button-descargar-cv"
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </a>
              </div>
            </div>

            {/* Profile Photo - Right side on desktop, top on mobile */}
            <div className="md:w-[40%] flex justify-center">
              <div className="relative">
                {/* Sage green glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#a4c3b2]/20 blur-xl scale-110" />
                <img
                  src={emmanuelPhoto}
                  alt="Emmanuel González Flores - Fundador de ArketLabs, Arquitecto de Inteligencia Comercial"
                  className="relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full object-cover border-2 border-white/20 shadow-2xl"
                  style={{ objectPosition: "center 45%" }}
                  data-testid="img-profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 border-y border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-white/80">
            <div className="flex items-center gap-2" data-testid="contact-location">
              <MapPin className="w-4 h-4 text-[#a4c3b2]" />
              <span>Mérida, Yucatán, México</span>
            </div>
            <a
              href="mailto:emmanuel@arketlabs.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              data-testid="contact-email"
            >
              <Mail className="w-4 h-4 text-[#a4c3b2]" />
              <span>emmanuel@arketlabs.com</span>
            </a>
            <a
              href="tel:+529997475451"
              className="flex items-center gap-2 hover:text-white transition-colors"
              data-testid="contact-phone"
            >
              <Phone className="w-4 h-4 text-[#a4c3b2]" />
              <span>999 747 5451</span>
            </a>
            <a
              href="https://arketlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
              data-testid="contact-website"
            >
              <Globe className="w-4 h-4 text-[#a4c3b2]" />
              <span>arketlabs.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Experiencia Profesional
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className={`bg-white/5 backdrop-blur-sm border ${
                  exp.featured ? "border-[#a4c3b2]/50" : "border-white/10"
                } p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors`}
                data-testid={`card-experience-${exp.id}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {exp.position}
                    </h3>
                    <p className="text-[#a4c3b2]">
                      {exp.company}
                      {exp.location && ` · ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-white/60 text-sm md:text-base whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                      <ArrowRight className="w-4 h-4 text-[#a4c3b2] mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competencias" className="py-16 md:py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Competencias Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                data-testid={`card-skill-${skill.id}`}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-[#b8b4cc]/20 text-white border-[#b8b4cc]/30 no-default-hover-elevate no-default-active-elevate"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Educación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <Card
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl"
              data-testid="card-education"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Licenciado en Contaduría Pública
              </h3>
              <p className="text-[#a4c3b2] mb-2">Especialidad en Finanzas</p>
              <p className="text-white/80 mb-1">Tecnológico de Monterrey, Campus Ciudad Juárez</p>
              <p className="text-white/60 text-sm">1998 - 2006</p>
            </Card>

            {/* Certifications */}
            <Card
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl"
              data-testid="card-certifications"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                Certificaciones
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                    <Check className="w-4 h-4 text-[#a4c3b2] flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <a
            href="mailto:emmanuel@arketlabs.com"
            className="inline-flex items-center justify-center h-14 px-8 bg-[#facc15] text-black font-semibold rounded-[14px] hover:bg-[#facc15]/90 transition-colors"
            data-testid="button-iniciar-conversacion"
          >
            Iniciar conversación
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 Emmanuel González Flores · ArketLabs</p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <a
                href="https://arketlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                data-testid="footer-arketlabs"
              >
                ArketLabs
              </a>
              <a
                href="mailto:emmanuel@arketlabs.com"
                className="hover:text-white transition-colors"
                data-testid="footer-email"
              >
                Email
              </a>
              <a
                href="tel:+529997475451"
                className="hover:text-white transition-colors"
                data-testid="footer-phone"
              >
                Teléfono
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
