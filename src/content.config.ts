import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    zona: z.string(),
    tipo: z.string(),
    resumen: z.string(),
    anio: z.number().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(0),

    cliente: z.string().optional(),
    ciudad: z.string().optional(),
    estado: z.enum(['Terminada', 'En obra']).optional(),
    servicios: z.array(z.string()).default([]),
    materiales: z.array(z.string()).default([]),
    destacados: z.array(z.string()).default([]),

    portada: z.string().optional(),
    portada_alt: z.string().optional(),
    galeria: z.array(z.object({ src: z.string(), alt: z.string().optional() })).default([]),

    faqs: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).default([]),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = { proyectos };
