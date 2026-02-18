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
    period: "2024 – Presente",
    achievements: [
      "Diseñé y lancé ArketLabs: laboratorio de Revenue Systems que integra IA conversacional, automatización y datos para transformar operaciones comerciales.",
      "Creé ARCIA: agente conversacional con +56 nodos, integración OpenAI, Airtable, Google Calendar y CRM. Orquestado en n8n.",
      "Metodología Dale Carnegie codificada en flujos autónomos de prospección, calificación y cierre.",
      "Stack: n8n · Docker · OpenAI API · Claude API · PostgreSQL · Airtable · Pinecone",
    ],
  },
  {
    id: "asesor",
    featured: false,
    position: "Capital & Real Estate Advisory",
    company: "Independiente",
    location: "Guadalajara → Yucatán",
    period: "2021 – Presente",
    achievements: [
      "Estructuré operaciones de inversión inmobiliaria con análisis macroeconómico y financiero.",
      "100% de acierto en recomendaciones — todas generaron retorno.",
      "Incremento sostenido del ticket promedio por 3 años consecutivos.",
    ],
  },
  {
    id: "humayuhum",
    featured: false,
    position: "Founder",
    company: "HUMAYUHUM",
    location: "",
    period: "2017 – 2020",
    achievements: [
      "Fundé agencia de marketing digital con operaciones distribuidas globalmente.",
      "Diseñé procesos de venta consultiva digital para empresas B2B.",
    ],
  },
  {
    id: "jeunesse",
    featured: false,
    position: "Director de Estructura Comercial",
    company: "Jeunesse Global",
    location: "",
    period: "2013 – 2017",
    achievements: [
      "Formé y lideré estructura comercial de +500 personas en múltiples países.",
      "Implementé sistemas de liderazgo remoto y equipos multiculturales.",
    ],
  },
  {
    id: "metlife",
    featured: false,
    position: "Gerente de Desarrollo Comercial",
    company: "MetLife México",
    location: "",
    period: "2011 – 2013",
    achievements: [
      "Diseñé sistemas de reclutamiento, formación y activación para Agentes financieros.",
      "Creé manuales operativos con metodologías replicables de venta consultiva.",
    ],
  },
  {
    id: "ing",
    featured: false,
    position: "Ejecutivo → Gerente Comercial #1 Zona Occidente",
    company: "ING Financial Group",
    location: "",
    period: "2005 – 2011",
    achievements: [
      "Transformé equipo comercial de bajo rendimiento en el #1 de la Zona Occidente.",
      "Diseñé estrategia de retención y servicio post-venta que mantuvo carteras a largo plazo.",
    ],
  },
];

const skills = [
  {
    id: "transformation",
    title: "Transformación Comercial",
    tags: ["Revenue Systems", "Estructuras de Ventas Autónomas", "Sales Process Design", "Venta Consultiva B2B"],
  },
  {
    id: "automation",
    title: "Automatización & IA",
    tags: ["n8n (self-hosted)", "Conversational AI", "Prompt Engineering", "OpenAI API", "Claude API", "Agentes Autónomos"],
  },
  {
    id: "data",
    title: "Integración & Datos",
    tags: ["Airtable", "PostgreSQL", "Pinecone", "CRM", "APIs REST", "Webhooks", "Google Workspace APIs"],
  },
  {
    id: "strategy",
    title: "Estrategia & Metodologías",
    tags: ["Dale Carnegie (codificada en IA)", "Revenue Operations", "AI-Assisted Development", "Orquestación de Agentes"],
  },
];

const certifications = [
  "LIMRA — Gerente Certificado de Asesores Financieros",
  "CNSF — Cédula A",
  "Venta Consultiva Avanzada",
  "IA y Automatización Comercial",
  "Marketing Digital Estratégico",
  "Empowerment en Gestión Gerencial",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#1e3a5f] font-inter relative overflow-x-hidden">
      {/* Decorative Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1e3a5f] rounded-full opacity-[0.04] blur-[128px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B6A1D2] rounded-full opacity-[0.06] blur-[128px]" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#4a7eb8] rounded-full opacity-[0.04] blur-[128px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F8F9FC]/80 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <a
              href="https://arketlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl text-[#1e3a5f] hover:text-[#4a7eb8] transition-colors"
              data-testid="link-arketlabs-logo"
            >
              ArketLabs
            </a>
            <nav className="hidden md:flex items-center gap-6 flex-wrap">
              <a href="#experiencia" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm" data-testid="link-nav-experiencia">
                Experiencia
              </a>
              <a href="#competencias" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm" data-testid="link-nav-competencias">
                Competencias
              </a>
              <a href="#educacion" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm" data-testid="link-nav-educacion">
                Educación
              </a>
              <a
                href="https://arketlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#B6A1D2] hover:text-[#8b7aa8] transition-colors text-sm font-medium"
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
                className="mb-6 bg-[#1e3a5f]/10 text-[#B6A1D2] border-[#1e3a5f]/20 hover:bg-[#1e3a5f]/15 no-default-hover-elevate no-default-active-elevate"
                data-testid="badge-available"
              >
                Open to Strategic Projects
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4 text-[#1e3a5f]">
                Emmanuel González{" "}
                <span className="bg-gradient-to-r from-[#1e3a5f] to-[#B6A1D2] bg-clip-text text-transparent italic">Flores</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-[22px] text-[#1e3a5f]/80 mb-2">
                Director de Transformación Digital Comercial
              </p>
              <p className="text-base md:text-lg text-[#B6A1D2] font-medium mb-6">
                Arquitecto de Revenue Systems & AI Automation
              </p>

              <p className="text-base md:text-lg text-[#4a5568] mb-8 max-w-xl mx-auto md:mx-0">
                +20 años diseñando estructuras comerciales de alto rendimiento.
                Hoy integro IA conversacional, automatización y datos en sistemas que generan revenue de forma autónoma.
                Fundador de ArketLabs. Creador de ARCIA.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="mailto:emmanuel@arketlabs.com"
                  className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#1e3a5f]/20 transition-all w-full sm:w-auto"
                  data-testid="button-contactar"
                >
                  Contactar
                </a>
                <a
                  href="https://docs.google.com/document/d/1Q_g4kMoILZ9SvXfuHQtqqR2UFSU6EJo7/edit?usp=sharing&ouid=114239756021683353813&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white border border-[#E2E8F0] text-[#1e3a5f] font-medium rounded-2xl hover:border-[#B6A1D2]/40 hover:shadow-sm transition-all w-full sm:w-auto"
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
                {/* Brand glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a5f]/15 to-[#B6A1D2]/15 blur-xl scale-110" />
                <img
                  src={emmanuelPhoto}
                  alt="Emmanuel González Flores - Director de Transformación Digital Comercial, Fundador de ArketLabs"
                  className="relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full object-cover border-2 border-[#E2E8F0] shadow-xl shadow-[#1e3a5f]/10"
                  style={{ objectPosition: "center 45%" }}
                  data-testid="img-profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-8 border-y border-[#E2E8F0] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-[#4a5568]">
            <div className="flex items-center gap-2" data-testid="contact-location">
              <MapPin className="w-4 h-4 text-[#B6A1D2]" />
              <span>Mérida, Yucatán, México</span>
            </div>
            <a
              href="mailto:emmanuel@arketlabs.com"
              className="flex items-center gap-2 hover:text-[#1e3a5f] transition-colors"
              data-testid="contact-email"
            >
              <Mail className="w-4 h-4 text-[#B6A1D2]" />
              <span>emmanuel@arketlabs.com</span>
            </a>
            <a
              href="tel:+529997475451"
              className="flex items-center gap-2 hover:text-[#1e3a5f] transition-colors"
              data-testid="contact-phone"
            >
              <Phone className="w-4 h-4 text-[#B6A1D2]" />
              <span>999 747 5451</span>
            </a>
            <a
              href="https://arketlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#1e3a5f] transition-colors"
              data-testid="contact-website"
            >
              <Globe className="w-4 h-4 text-[#B6A1D2]" />
              <span>arketlabs.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#1e3a5f]">
            Experiencia Profesional
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className={`bg-white border ${
                  exp.featured ? "border-[#B6A1D2]/40" : "border-[#E2E8F0]"
                } p-6 md:p-8 rounded-2xl hover:border-[#B6A1D2]/30 hover:shadow-sm transition-all shadow-none`}
                data-testid={`card-experience-${exp.id}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#1e3a5f]">
                      {exp.position}
                    </h3>
                    <p className="text-[#B6A1D2] font-medium">
                      {exp.company}
                      {exp.location && ` · ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-[#4a5568]/60 text-sm md:text-base whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#4a5568] text-sm md:text-base">
                      <ArrowRight className="w-4 h-4 text-[#B6A1D2] mt-0.5 flex-shrink-0" />
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
      <section id="competencias" className="py-16 md:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#1e3a5f]">
            Competencias Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.id}
                className="bg-[#F8F9FC] border border-[#E2E8F0] p-6 rounded-2xl hover:border-[#B6A1D2]/30 transition-all shadow-none"
                data-testid={`card-skill-${skill.id}`}
              >
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-[#1e3a5f]/8 text-[#1e3a5f] border-[#1e3a5f]/15 no-default-hover-elevate no-default-active-elevate"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#1e3a5f]">
            Educación y Certificaciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <Card
              className="bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-2xl shadow-none"
              data-testid="card-education"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1e3a5f] mb-2">
                Licenciatura en Contaduría Pública
              </h3>
              <p className="text-[#B6A1D2] font-medium mb-2">Especialidad en Finanzas</p>
              <p className="text-[#4a5568] mb-1">Tecnológico de Monterrey — Campus Ciudad Juárez</p>
              <p className="text-[#4a5568]/60 text-sm">1998 – 2006</p>
            </Card>

            {/* Certifications */}
            <Card
              className="bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-2xl shadow-none"
              data-testid="card-certifications"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#1e3a5f] mb-4">
                Certificaciones
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#4a5568] text-sm md:text-base">
                    <Check className="w-4 h-4 text-[#B6A1D2] flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl mx-auto text-[#1e3a5f]">
            ¿Buscas transformar tu estructura comercial con IA y automatización estratégica?
          </h2>
          <a
            href="mailto:emmanuel@arketlabs.com"
            className="inline-flex items-center justify-center h-14 px-10 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#1e3a5f]/20 transition-all"
            data-testid="button-iniciar-conversacion"
          >
            Agendar conversación estratégica
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#4a5568]/60">
            <p>© {new Date().getFullYear()} Emmanuel González Flores · ArketLabs</p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <a
                href="https://arketlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1e3a5f] transition-colors"
                data-testid="footer-arketlabs"
              >
                ArketLabs
              </a>
              <a
                href="mailto:emmanuel@arketlabs.com"
                className="hover:text-[#1e3a5f] transition-colors"
                data-testid="footer-email"
              >
                Email
              </a>
              <a
                href="tel:+529997475451"
                className="hover:text-[#1e3a5f] transition-colors"
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
