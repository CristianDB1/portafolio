// ─────────────────────────────────────────────────────────────
// Todo el contenido editable de la página vive aquí.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Cristian Delgado",
  first: "Cristian",
  github: "CristianDB1",
  whatsapp: "573027587770", // solo dígitos, con indicativo
  email: "crdelgadobe@gmail.com",
  location: "Carepa, Colombia",
  photo: "img/cristian.jpg",
};

// Cifras reales y comprobables. No inflar: un cliente las puede verificar.
export const facts = [
  { value: "2", label: "tiendas en línea funcionando" },
  { value: "7", label: "sistemas construidos de punta a punta" },
  { value: "1", label: "panel para administrar varios negocios" },
];

export const services: { title: string; text: string; for: string; icon: string }[] = [
  {
    title: "Catálogos con pedidos a WhatsApp",
    text: "Tus productos en línea. El cliente arma su pedido y te llega ordenado a tu WhatsApp, sin comisiones.",
    for: "Negocios",
    icon: "bag",
  },
  {
    title: "Sistemas de gestión a medida",
    text: "Ventas, clientes, membresías e inventario en un solo lugar, con usuarios y permisos para tu equipo.",
    for: "Negocios y empresas",
    icon: "grid",
  },
  {
    title: "Plataformas multi-empresa",
    text: "Un solo sistema para varias empresas o sedes, cada una con sus datos separados y su propia administración.",
    for: "Empresas",
    icon: "layers",
  },
  {
    title: "Trazabilidad con QR y GPS",
    text: "Códigos QR firmados, escáner desde el celular, ubicación en cada paso y bitácora que nadie puede editar.",
    for: "Empresas",
    icon: "pin",
  },
];

export type Link = { label: string; href: string };

export const featured = {
  name: "Nordu y Malu",
  tag: "Ecosistema digital",
  summary:
    "Tiendas en línea para dos negocios reales de Carepa: Nordu (streetwear) y Creaciones Malú (ropa y estampados personalizados), más un panel de administración compartido con acceso por Google para ver ventas, inventario y reportes de ambos.",
  stack: ["Next.js", "React", "Tailwind CSS", "NextAuth", "Monorepo pnpm"],
  links: [
    { label: "Ver Nordu", href: "https://nordu.dpdns.org" },
    { label: "Ver Malu", href: "https://malu.nordu.dpdns.org" },
    { label: "Panel admin", href: "https://admin.nordu.dpdns.org" },
  ] as Link[],
};

export const projects: {
  id: string;
  name: string;
  tag: string;
  summary: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  links: Link[];
  note?: string;
}[] = [
  {
    id: "bizflow",
    name: "BizFlow",
    tag: "SaaS multi-empresa",
    summary:
      "Plataforma para pequeños negocios: cada empresa con sus datos aislados, base de datos en la nube y pruebas automáticas.",
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Supabase"],
    links: [],
    note: "Código privado · demo en llamada",
  },
  {
    id: "catalogo",
    name: "Catálogo Express",
    tag: "Catálogo + WhatsApp",
    summary:
      "Catálogo digital con carrito y pedido formateado a WhatsApp para restaurantes y tiendas. Pruebas de extremo a extremo en móvil.",
    stack: ["Next.js", "Tailwind CSS", "Playwright"],
    image: "work/catalogo-2.jpg",
    imageAlt: "Menú del catálogo de comidas en el celular",
    links: [],
    note: "Código privado · demo en llamada",
  },
  {
    id: "ura-logix",
    name: "Urabá Logix",
    tag: "Trazabilidad",
    summary:
      "Cadena de custodia de carga para el sector portuario y agrícola: QR firmado, escáner móvil con GPS y paneles gerenciales.",
    stack: ["Next.js", "TypeScript", "Prisma", "QR", "JWT"],
    links: [],
    note: "Código privado · demo en llamada",
  },
  {
    id: "albion",
    name: "Albion Economy",
    tag: "Datos automáticos",
    summary:
      "Calculadora de mercado para un videojuego con precios que se refrescan solos cada ~15 minutos, sin servidor.",
    stack: ["Vite", "TypeScript", "GitHub Actions"],
    image: "work/albion-d.jpg",
    imageAlt: "Pantalla de Albion Economy con filtros de flipping",
    links: [
      { label: "Ver en vivo", href: "https://cristiandb1.github.io/AlbionEconomy/" },
      { label: "Código", href: "https://github.com/CristianDB1/AlbionEconomy" },
    ],
  },
  {
    id: "gym",
    name: "Gestión de Gym",
    tag: "Sistema de gestión",
    summary:
      "Administración de un gimnasio con backend propio, autenticación con roles y frontend separado.",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "JWT"],
    links: [{ label: "Código", href: "https://github.com/CristianDB1/GestionDeGym" }],
  },
  {
    id: "sorteo",
    name: "Tu Sorteo Digital",
    tag: "Aplicación web",
    summary: "Aplicación para organizar sorteos con pizarras numeradas, con identidad propia y despliegue continuo.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    links: [{ label: "Código", href: "https://github.com/CristianDB1/Pizarras" }],
  },
];

export const strengths = [
  { title: "Hablas conmigo", text: "Quien te escucha es quien programa y quien responde si algo falla." },
  { title: "Entrego funcionando", text: "Publicado en línea, no un archivo en un correo." },
  { title: "Pienso en tu negocio", text: "Lo que construyo tiene que ayudarte a vender u operar mejor." },
  { title: "De punta a punta", text: "Base de datos, servidor, página y despliegue, todo en una sola mano." },
];

export const steps = [
  { title: "Conversamos", text: "Una llamada o un chat. Defino contigo qué entra y qué no." },
  { title: "Cotización escrita", text: "Alcance, entregables y tiempos claros antes de empezar." },
  { title: "Construyo y muestro avances", text: "Ves el sistema funcionando mientras se arma." },
  { title: "Entrega y soporte", text: "Queda publicado y sigo disponible para ajustes." },
];

export const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Tailwind CSS",
  "Playwright",
  "Vitest",
  "GitHub Actions",
  "Vercel",
];
