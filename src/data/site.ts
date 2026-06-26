// Datos centrales del negocio, fuente única de verdad para NAP, links y schema.
export const site = {
  name: 'MÁS VIDRIOS',
  legalName: 'MÁS VIDRIOS',
  tagline: 'Soluciones en vidrio & mucho más',
  url: 'https://masvidrios.com.py',
  // NAP
  city: 'San Lorenzo',
  region: 'Central',
  country: 'PY',
  // Dirección exacta PENDIENTE (cambió; se confirma con el GBP). Place ID del GBP sí es correcto.
  addressFull: 'San Lorenzo, Paraguay',
  phone: '0984 452 749',
  phoneIntl: '595984452749', // sin "+", para wa.me y tel:
  whatsapp: 'https://wa.me/595984452749',
  email: 'jose@masvidrios.com.py',
  founded: 2009,
  yearsExp: new Date().getFullYear() - 2009, // 17 en 2026
  facebook: 'https://www.facebook.com/MASVidrios-461790940665213/',
  instagram: 'https://www.instagram.com/mas.vidrios/',
  // GBP embed (place ID correcto; pin levemente desfasado, se ajusta con el GBP)
  gbpEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.139123264135!2d-57.51204500000001!3d-25.3666534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dac331a107075%3A0x3cb8ae04f4226821!2sMAS%20VIDRIOS!5e0!3m2!1ses-419!2spy!4v1782403249975!5m2!1ses-419!2spy',
  geo: { lat: -25.3666534, lng: -57.512045 },
} as const;

export const nav = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Zonas', href: '/areas/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Nosotros', href: '/sobre-nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
];
