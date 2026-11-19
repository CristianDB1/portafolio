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
export type Shot = { src: string; alt: string; label: string; device: "laptop" | "phone" };

export const cases: {
  id: string;
  name: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
  links: Link[];
  note?: string;
  shots: Shot[];
}[] = [
  {
    id: "ecosistema",
    name: "Ecosistema Digital",
    tag: "Tiendas + panel de administración",
    summary:
      "Un sistema que reúne las tiendas en línea de dos negocios reales de Carepa, Nordu (streetwear) y Creaciones Malú (ropa y estampados personalizados), con un panel de administración compartido.",
    points: [
      "Cada tienda con su propia identidad y pedido por WhatsApp",
      "Un solo panel para ver ventas, inventario y reportes de ambas",
      "Acceso al panel con cuenta de Google autorizada",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "NextAuth", "Monorepo pnpm"],
    links: [
      { label: "Ver Nordu", href: "https://nordu.dpdns.org" },
      { label: "Ver Malu", href: "https://malu.nordu.dpdns.org" },
      { label: "Panel admin", href: "https://admin.nordu.dpdns.org" },
    ],
    shots: [
      { src: "work/eco-nordu-d1.jpg", alt: "Portada de la tienda Nordu", label: "Nordu", device: "laptop" },
      { src: "work/eco-nordu-d2.jpg", alt: "Colecciones de Nordu", label: "Colecciones", device: "laptop" },
      { src: "work/eco-malu-d1.jpg", alt: "Portada de la tienda Creaciones Malú", label: "Malu", device: "laptop" },
      { src: "work/eco-malu-d2.jpg", alt: "Sección de pedidos personalizados de Malu", label: "Personalizados", device: "laptop" },
      { src: "work/admin-d.jpg", alt: "Inicio de sesión del panel de administración", label: "Panel admin", device: "laptop" },
      { src: "work/eco-nordu-m1.jpg", alt: "Nordu en el celular", label: "Nordu móvil", device: "phone" },
      { src: "work/eco-malu-m1.jpg", alt: "Malu en el celular", label: "Malu móvil", device: "phone" },
    ],
  },
  {
    id: "catalogo",
    name: "Catálogo Express",
    tag: "Catálogo + pedidos a WhatsApp",
    summary:
      "Catálogo digital pensado para restaurantes y tiendas: el cliente explora el menú, arma su pedido y lo envía ya formateado a WhatsApp.",
    points: [
      "Menú con categorías, buscador y carrito",
      "Pedido listo para enviar por WhatsApp, sin comisiones",
      "Pruebas automáticas de extremo a extremo en móvil",
    ],
    stack: ["Next.js", "Tailwind CSS", "Playwright"],
    links: [],
    note: "Demostración con datos de ejemplo · código privado",
    shots: [
      { src: "work/catalogo-1.jpg", alt: "Inicio del catálogo de comidas", label: "Inicio", device: "phone" },
      { src: "work/catalogo-2.jpg", alt: "Menú con productos y categorías", label: "Menú", device: "phone" },
      { src: "work/catalogo-3.jpg", alt: "Pedido vacío del catálogo", label: "Pedido", device: "phone" },
      { src: "work/catalogo-4.jpg", alt: "Información de contacto y ubicación", label: "Info", device: "phone" },
    ],
  },
  {
    id: "bizflow",
    name: "BizFlow",
    tag: "SaaS multi-empresa",
    summary:
      "Plataforma para pequeños negocios con punto de venta, inventario, clientes, gastos, proveedores y reportes. Cada empresa trabaja con sus datos aislados.",
    points: [
      "Punto de venta de mostrador con carrito y variantes",
      "Control de inventario, productos y proveedores",
      "Usuarios con roles y centro de control con indicadores",
    ],
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Supabase", "Vitest"],
    links: [],
    note: "Demostración con datos de ejemplo · código privado",
    shots: [
      { src: "work/biz-1.jpg", alt: "Inicio de sesión de BizFlow", label: "Acceso", device: "laptop" },
      { src: "work/biz-2.jpg", alt: "Centro de control de BizFlow", label: "Centro de control", device: "laptop" },
      { src: "work/biz-3.jpg", alt: "Punto de venta de BizFlow", label: "Punto de venta", device: "laptop" },
    ],
  },
];

export const hobby = {
  name: "Albion Economy",
  tag: "Pasatiempo · APIs externas",
  summary:
    "Calculadora de mercado que hice por gusto para un videojuego. Consume APIs externas (Albion Online Data Project), convierte los precios en datos estáticos y los refresca solos cada ~15 minutos con GitHub Actions, sin servidor propio.",
  points: ["Consumo y límites de una API externa", "Automatización con GitHub Actions", "Publicación estática en GitHub Pages"],
  stack: ["Vite", "TypeScript", "GitHub Actions", "APIs externas"],
  image: "work/albion-d.jpg",
  imageAlt: "Pantalla de Albion Economy con filtros de flipping",
  links: [
    { label: "Ver en vivo", href: "https://cristiandb1.github.io/AlbionEconomy/" },
    { label: "Código", href: "https://github.com/CristianDB1/AlbionEconomy" },
  ] as Link[],
};

// Solo referencia, sin imágenes.
export const others: { name: string; text: string; stack: string[]; link?: Link; note?: string }[] = [
  {
    name: "Urabá Logix",
    text: "Trazabilidad y cadena de custodia de carga para el sector portuario y agrícola: QR firmado, escáner móvil con GPS y paneles gerenciales.",
    stack: ["Next.js", "TypeScript", "Prisma", "JWT"],
    note: "Código privado",
  },
  {
    name: "Gestión de Gym",
    text: "Administración de un gimnasio con backend propio, autenticación con roles y frontend separado.",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "JWT"],
    link: { label: "Código", href: "https://github.com/CristianDB1/GestionDeGym" },
  },
  {
    name: "Tu Sorteo Digital",
    text: "Aplicación web para organizar sorteos con pizarras numeradas y despliegue continuo.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    link: { label: "Código", href: "https://github.com/CristianDB1/Pizarras" },
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
