import type { APIRoute } from 'astro';
import { site, people } from '../data/site';
import { servicios } from '../data/servicios';
import { zonas } from '../data/zonas';

// /llms.txt — curated index for LLMs (https://llmstxt.org). Built from the site data
// so it never drifts. Full content lives at /llms-full.txt.
export const GET: APIRoute = () => {
  const u = site.url;
  const owner = people.find((p) => p.founder)!;
  const L: string[] = [];

  L.push('# MÁS VIDRIOS');
  L.push('');
  L.push('> Vidriería y carpintería de aluminio en San Lorenzo y Gran Asunción, Paraguay. Empresa familiar desde ' + site.founded + ': vidrio templado, cerramientos, mamparas, divisiones de oficina, barandas y aberturas de aluminio. Family-owned glass & aluminum company near Asunción, Paraguay (English page available).');
  L.push('');
  L.push('MÁS VIDRIOS ("Más Vidrios") es una empresa familiar fundada en ' + site.founded + ', con base en ' + site.city + ', Paraguay, que cubre toda Gran Asunción. El dueño, ' + owner.name + ', atiende y visita personalmente cada obra. Presupuesto sin compromiso. Obras destacadas: los palcos VIP del Estadio Manuel Ferreira (Club Olimpia) y la fachada del edificio SITRANDE / ANDE en Asunción.');
  L.push('');
  L.push('- Contacto / Contact: WhatsApp ' + site.phone + ' (+' + site.phoneIntl + ') · ' + site.email);
  L.push('- Zona / Service area: ' + site.city + ' y Gran Asunción (' + zonas.map((z) => z.nombre).join(', ') + ')');
  L.push('- Horario / Hours: Lun a Vie 7:30 a 17:30 · Sáb 7:30 a 12:00');
  L.push('- WhatsApp: ' + site.whatsapp);
  L.push('- Instagram: ' + site.instagram + ' · Facebook: ' + site.facebook);
  L.push('');
  L.push('## Servicios (Services)');
  servicios.forEach((s) => L.push('- [' + s.nombre + '](' + u + '/servicios/' + s.slug + '/): ' + s.hero));
  L.push('');
  L.push('## Zonas (Service areas)');
  zonas.forEach((z) => L.push('- [Vidriería en ' + z.nombre + '](' + u + '/areas/' + z.slug + '/): ' + z.hero));
  L.push('');
  L.push('## Páginas (Key pages)');
  L.push('- [Inicio / Home (español)](' + u + '/)');
  L.push('- [English overview](' + u + '/en/)');
  L.push('- [Servicios](' + u + '/servicios/)');
  L.push('- [Zonas](' + u + '/areas/)');
  L.push('- [Proyectos](' + u + '/proyectos/)');
  L.push('- [Sobre nosotros](' + u + '/sobre-nosotros/)');
  L.push('- [Contacto](' + u + '/contacto/)');
  L.push('- [Política de privacidad](' + u + '/politica-de-privacidad/)');
  L.push('');
  L.push('## Full content');
  L.push('- [llms-full.txt](' + u + '/llms-full.txt): todas las descripciones de servicios, zonas y preguntas frecuentes en un solo archivo.');
  L.push('');

  return new Response(L.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
