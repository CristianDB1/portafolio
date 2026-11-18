// ─────────────────────────────────────────────────────────────
// Todo el contenido editable de la página vive aquí.
// Lo que dice "PENDIENTE" son datos que solo tú puedes dar.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Cristian",
  github: "CristianDB1",
  // PENDIENTE: número con indicativo, solo dígitos. Ej: "573001234567".
  // Mientras esté vacío, el botón de WhatsApp no se muestra.
  whatsapp: "",
  // PENDIENTE: correo de contacto público. Si está vacío, no se muestra.
  email: "",
  // PENDIENTE: ciudad o región (opcional). Ej: "Urabá, Colombia".
  location: "Colombia",
  // PENDIENTE: foto tuya. Pon el archivo en public/img/ y escribe la ruta, ej. "img/cristian.jpg".
  photo: "",
  quoteNumber: "0001",
};

export type Route = "negocio" | "empresa";

export const routes: Record<Route, { label: string; short: string; lines: string[] }> = {
  negocio: {
    label: "Tengo un negocio",
    short: "Negocio",
    lines: [
      "Catálogo digital con pedidos directo a tu WhatsApp",
      "Sistema para llevar ventas, clientes e inventario",
      "Adiós al cuaderno, al talonario y al Excel",
    ],
  },
  empresa: {
    label: "Represento una empresa",
    short: "Empresa",
    lines: [
      "Plataforma para varias sedes o empresas, con roles",
      "Trazabilidad con QR firmado y ubicación GPS",
      "Paneles de control e informes para gerencia",
    ],
  },
};

export const services: {
  title: string;
  text: string;
  routes: Route[];
  example: string; // id de proyecto
}[] = [
  {
    title: "Catálogo digital con pedidos a WhatsApp",
    text: "Tus productos en línea. El cliente arma su pedido y a ti te llega ordenado por WhatsApp, sin pasarelas ni comisiones.",
    routes: ["negocio"],
    example: "catalogo-express",
  },
  {
    title: "Sistema de gestión a medida",
    text: "Clientes, membresías, ventas o inventario en un solo lugar, con usuarios y permisos para cada persona de tu equipo.",
    routes: ["negocio", "empresa"],
    example: "gestion-de-gym",
  },
  {
    title: "Plataforma para varias empresas o sedes",
    text: "Un solo sistema que atiende a muchas empresas, cada una con sus datos aislados y su propia administración.",
    routes: ["empresa", "negocio"],
    example: "bizflow",
  },
  {
    title: "Trazabilidad y logística con QR y GPS",
    text: "Códigos QR firmados, escáner desde el celular, ubicación en cada paso y una bitácora que nadie puede editar.",
    routes: ["empresa"],
    example: "ura-logix",
  },
  {
    title: "Paneles e informes para decidir",
    text: "Indicadores claros, estados en tiempo real y reportes exportables para que gerencia vea qué pasa sin pedir un Excel.",
    routes: ["empresa", "negocio"],
    example: "ura-logix",
  },
  {
    title: "Datos y tareas que se actualizan solas",
    text: "Herramientas web que traen datos públicos, se refrescan automáticamente y se publican sin servidor que mantener.",
    routes: ["empresa", "negocio"],
    example: "albion-economy",
  },
];

export const projects: {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  repo: string; // nombre del repo en GitHub
  image?: string; // ruta dentro de public/
  imageNote?: string;
}[] = [
  {
    id: "bizflow",
    name: "BizFlow",
    summary:
      "Plataforma como servicio multi-empresa para pequeños negocios: cada empresa con sus datos aislados, base de datos en la nube y pruebas automáticas.",
    stack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Supabase", "Vitest"],
    repo: "bizflow",
  },
  {
    id: "ura-logix",
    name: "Urabá Logix",
    summary:
      "Trazabilidad y cadena de custodia de carga para el sector portuario y agrícola: QR firmado, escáner móvil con GPS, bitácora inmutable y paneles gerenciales.",
    stack: ["Next.js", "TypeScript", "Prisma", "JWT", "PWA", "HMAC SHA-256"],
    repo: "Ura-Logix",
  },
  {
    id: "catalogo-express",
    name: "Catálogo Express",
    summary:
      "Catálogo digital para restaurantes y tiendas con carrito y pedido formateado a WhatsApp. Pruebas de extremo a extremo en móvil.",
    stack: ["Next.js", "Tailwind CSS", "Playwright"],
    repo: "Catalogo-Express",
    image: "img/catalogo-demo.jpg",
    imageNote: "Foto de demostración",
  },
  {
    id: "gestion-de-gym",
    name: "Gestión de Gym",
    summary:
      "Sistema para administrar un gimnasio con backend propio, autenticación y roles, y un frontend separado.",
    stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "Spring Security", "JWT"],
    repo: "GestionDeGym",
  },
  {
    id: "pizarras",
    name: "Tu Sorteo Digital",
    summary:
      "Aplicación web para organizar sorteos con pizarras numeradas, con identidad propia y despliegue continuo.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    repo: "Pizarras",
  },
  {
    id: "albion-economy",
    name: "Albion Economy",
    summary:
      "Calculadora de mercado para un juego en línea: rutas de compra y venta, crafteo y refinado con precios que se refrescan solos cada ~15 minutos.",
    stack: ["Vite", "TypeScript", "GitHub Actions", "GitHub Pages"],
    repo: "AlbionEconomy",
  },
];

export const steps = [
  {
    title: "Conversamos tu caso",
    text: "Una llamada o un chat por WhatsApp. Defino contigo qué entra y qué no.",
  },
  {
    title: "Cotización por escrito",
    text: "Recibes alcance, entregables y tiempos claros antes de que se mueva un solo peso.",
  },
  {
    title: "Construyo y te muestro avances",
    text: "Ves el sistema funcionando en línea mientras se arma, para corregir a tiempo.",
  },
  {
    title: "Entrega y acompañamiento",
    text: "Queda publicado y funcionando. Sigo disponible para ajustes y mejoras.",
  },
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
