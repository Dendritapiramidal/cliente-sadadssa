export default {
  nombre:      "Raíz Natural",
  rubro:       "Tienda de productos naturales",
  descripcion: "Cosméticos naturales y orgánicos para tu rutina de bienestar.",
  logo:        "/logo.png",
  favicon:     "/favicon.ico",

  whatsapp:    "5491134149059",
  email:       "hola@raiznatural.com",
  instagram:   "raiznatural",
  direccion:   "Envíos a todo Argentina",

  hero: {
    titulo:    "Belleza que nace de la tierra",
    subtitulo: "Cosméticos 100% naturales, sin tóxicos, con envíos a todo Argentina.",
    cta:       "Comprar ahora",
    imagen:    "/hero.jpg",
  },

  categorias: [
    "Todos", "Facial", "Corporal", "Cabello", "Bienestar"
  ],

  productos: [
    { imagen: "/prod1.jpg", nombre: "Sérum vitamina C",    precio: "$4.800", categoria: "Facial",    badge: "Más vendido" },
    { imagen: "/prod2.jpg", nombre: "Aceite de argán",     precio: "$3.200", categoria: "Cabello",   badge: "" },
    { imagen: "/prod3.jpg", nombre: "Crema hidratante",    precio: "$3.600", categoria: "Facial",    badge: "Nuevo" },
    { imagen: "/prod4.jpg", nombre: "Exfoliante corporal", precio: "$2.900", categoria: "Corporal",  badge: "" },
    { imagen: "/prod5.jpg", nombre: "Aceite esencial",     precio: "$2.100", categoria: "Bienestar", badge: "" },
    { imagen: "/prod6.jpg", nombre: "Mascarilla arcilla",  precio: "$3.100", categoria: "Facial",    badge: "" },
  ],

  beneficios: [
    { icono: "🌿", titulo: "100% Natural",    descripcion: "Sin parabenos, sulfatos ni colorantes artificiales." },
    { icono: "🚚", titulo: "Envío gratis",    descripcion: "En compras mayores a $8.000 a todo el país." },
    { icono: "↩️", titulo: "30 días",         descripcion: "Garantía de devolución sin preguntas." },
    { icono: "✓",  titulo: "Certificado",    descripcion: "Productos con certificación orgánica IFOAM." },
  ],

  sobre: {
    titulo:  "Por qué Raíz Natural",
    texto:   "Nacimos en 2019 con una misión simple: ofrecer cosméticos que sean buenos para tu piel y para el planeta. Todos nuestros productos son formulados con ingredientes naturales y envases reciclables.",
    imagen:  "/about.jpg",
    stats: [
      { num: "5+",   label: "Años en el mercado" },
      { num: "3.000+", label: "Clientas satisfechas" },
      { num: "0%",   label: "Químicos tóxicos" },
    ],
  },

  testimonios: [
    { nombre: "Mara L.",    texto: "El sérum de vitamina C transformó mi piel en 3 semanas. No puedo creer la diferencia.", estrellas: 5 },
    { nombre: "Florencia T.", texto: "Por fin productos que no me irritan la piel sensible. Los recomiendo a todas.", estrellas: 5 },
    { nombre: "Camila R.",  texto: "El envío fue súper rápido y el packaging hermoso. Todo perfecto.", estrellas: 5 },
  ],

  colores: {
    primario:   "#F5F0E8",
    secundario: "#EDE8DC",
    acento:     "#5C7A4E",
    texto:      "#2A2A2A",
    textoSuave: "#666666",
    borde:      "#D8D0C0",
  },

  fuentes: {
    display: "Libre Baskerville",
    body:    "Nunito",
  },

  seo: {
    titulo:      "Raíz Natural | Cosméticos Naturales y Orgánicos Argentina",
    descripcion: "Cosméticos 100% naturales sin tóxicos. Envíos a todo Argentina. Sérum, cremas, aceites y más.",
    keywords:    "cosméticos naturales argentina, productos orgánicos, cosmética natural, envíos argentina",
    ogImagen:    "/og.jpg",
  },
}
