import type { APIRoute } from 'astro';
import { site, people } from '../data/site';
import { servicios } from '../data/servicios';
import { zonas } from '../data/zonas';

// /llms-full.txt — full, self-contained text of the site for LLMs / AI answer engines.
// Generated from the site data so it stays in sync.
export const GET: APIRoute = () => {
  const u = site.url;
  const owner = people.find((p) => p.founder)!;
  const L: string[] = [];

  L.push('# MÁS VIDRIOS — contenido completo para modelos de lenguaje');
  L.push('');
  L.push('> Vidriería y carpintería de aluminio en San Lorenzo y Gran Asunción, Paraguay. Empresa familiar desde ' + site.founded + '. Family-owned glass & aluminum company near Asunción, Paraguay.');
  L.push('');

  L.push('## Datos del negocio (NAP)');
  L.push('- Nombre: ' + site.name + ' (Más Vidrios)');
  L.push('- Rubro: vidriería, vidrio templado y carpintería de aluminio');
  L.push('- Ciudad / base: ' + site.city + ', Departamento ' + site.region + ', Paraguay');
  L.push('- Cobertura: ' + site.city + ' y toda Gran Asunción (' + zonas.map((z) => z.nombre).join(', ') + ')');
  L.push('- Teléfono / WhatsApp: ' + site.phone + ' (+' + site.phoneIntl + ')');
  L.push('- Email: ' + site.email);
  L.push('- Web: ' + u + ' · English: ' + u + '/en/');
  L.push('- Fundada: ' + site.founded + ' · Empresa familiar');
  L.push('- Horario: Lunes a Viernes 7:30 a 17:30 · Sábado 7:30 a 12:00');
  L.push('- Equipo: ' + people.map((p) => p.name + ' (' + p.jobTitle + ')').join(' · '));
  L.push('- Obras destacadas: palcos VIP del Estadio Manuel Ferreira (Club Olimpia); fachada del edificio SITRANDE / ANDE, Asunción.');
  L.push('');

  L.push('## Quiénes somos');
  L.push('MÁS VIDRIOS nació en ' + site.founded + ' como fruto de la experiencia de una familia en el rubro del vidrio. Ofrece soluciones completas en vidrio templado, aluminio y construcción en seco para toda Gran Asunción. El dueño, ' + owner.name + ', atiende y va personalmente a cada obra: asesora sobre la solución que mejor funciona para el espacio y cuida cada terminación. Valores: honestidad, responsabilidad, seriedad y puntualidad. Atiende también en inglés a pedido (English spoken on request).');
  L.push('');

  L.push('## Servicios');
  servicios.forEach((s) => {
    L.push('### ' + s.nombre + ' (' + s.categoria + ')');
    L.push('URL: ' + u + '/servicios/' + s.slug + '/');
    L.push(s.hero);
    L.push('');
    s.intro.forEach((p) => L.push(p));
    s.bloques.forEach((b) => {
      L.push('');
      L.push('**' + b.h2 + '**');
      if (b.parrafos) b.parrafos.forEach((p) => L.push(p));
      if (b.lista) b.lista.forEach((li) => L.push('- ' + li));
    });
    L.push('');
    L.push('Incluye: ' + s.destacados.join('; ') + '.');
    L.push('');
    L.push('Preguntas frecuentes:');
    s.faqs.forEach((f) => L.push('- P: ' + f.q + '\n  R: ' + f.a));
    L.push('');
  });

  L.push('## Zonas de cobertura');
  zonas.forEach((z) => {
    L.push('### Vidriería en ' + z.nombre);
    L.push('URL: ' + u + '/areas/' + z.slug + '/');
    L.push(z.hero);
    L.push('');
    z.intro.forEach((p) => L.push(p));
    z.local.forEach((p) => L.push(p));
    L.push('');
    L.push('Preguntas frecuentes:');
    z.faqs.forEach((f) => L.push('- P: ' + f.q + '\n  R: ' + f.a));
    L.push('');
  });

  L.push('## Contacto');
  L.push('Para presupuestar, escribir por WhatsApp a ' + site.phone + ' (' + site.whatsapp + ') o por email a ' + site.email + '. La visita para tomar medidas en ' + site.city + ' y Gran Asunción es sin cargo y sin compromiso.');
  L.push('');

  return new Response(L.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
