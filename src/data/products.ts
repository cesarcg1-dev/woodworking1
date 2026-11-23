export type Category =
  | 'tablas'
  | 'decoracion'
  | 'muebles'
  | 'letreros'
  | 'organizadores'
  | 'personalizado';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  currency: string;
  material: string;
  finish: string;
  dimensions: string;
  leadTime: string;
  featured?: boolean;
  hue: number;
}

export const categories: { id: Category; label: string; description: string }[] = [
  { id: 'tablas', label: 'Tablas y utensilios', description: 'Tablas de corte, bandejas y utensilios de cocina' },
  { id: 'decoracion', label: 'Decoración', description: 'Paneles, relieves y arte mural en madera' },
  { id: 'muebles', label: 'Muebles', description: 'Muebles y piezas funcionales a medida' },
  { id: 'letreros', label: 'Letreros', description: 'Letreros grabados y rótulos personalizados' },
  { id: 'organizadores', label: 'Organizadores', description: 'Cajas, estantes y soluciones de orden' },
  { id: 'personalizado', label: 'Personalizado', description: 'Proyectos únicos hechos a tu medida' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Tabla de corte roble',
    category: 'tablas',
    description: 'Tabla de corte maciza de roble con acabado alimentario, cantos redondeados y ranura para jugos.',
    price: 48,
    currency: '€',
    material: 'Roble macizo',
    finish: 'Aceite mineral alimentario',
    dimensions: '40 × 28 × 2.5 cm',
    leadTime: '5–7 días',
    featured: true,
    hue: 28,
  },
  {
    id: 'p2',
    name: 'Relieve topográfico',
    category: 'decoracion',
    description: 'Mapa de relieve tallado en capas de madera contrachapada, ideal como pieza central de pared.',
    price: 120,
    currency: '€',
    material: 'Contrachapado de abedul',
    finish: 'Barniz mate',
    dimensions: '60 × 45 × 3 cm',
    leadTime: '10–14 días',
    featured: true,
    hue: 34,
  },
  {
    id: 'p3',
    name: 'Letrero grabado bienvenido',
    category: 'letreros',
    description: 'Letrero de bienvenida con letras grabadas por CNC y fondo texturizado. Personaliza el texto.',
    price: 35,
    currency: '€',
    material: 'Pino tratado',
    finish: 'Cera natural',
    dimensions: '50 × 15 × 1.8 cm',
    leadTime: '4–6 días',
    hue: 32,
  },
  {
    id: 'p4',
    name: 'Estantería hexagonal',
    category: 'organizadores',
    description: 'Conjunto de tres estantes hexagonales modulares para composiciones de pared creativas.',
    price: 89,
    currency: '€',
    material: 'Nogal',
    finish: 'Aceite duro',
    dimensions: '30 × 26 × 12 cm (cada uno)',
    leadTime: '7–10 días',
    featured: true,
    hue: 24,
  },
  {
    id: 'p5',
    name: 'Mesa auxiliar de olivo',
    category: 'muebles',
    description: 'Mesa auxiliar con tablero de olivo natural y patas de hierro en polvo. Bordes vivos.',
    price: 240,
    currency: '€',
    material: 'Olivo natural',
    finish: 'Resina epoxi + aceite',
    dimensions: '55 × 40 × 45 cm',
    leadTime: '14–21 días',
    featured: true,
    hue: 38,
  },
  {
    id: 'p6',
    name: 'Bandeja servilletera',
    category: 'tablas',
    description: 'Bandeja de servir con asas integradas talladas, perfecta para tablas y desayunos.',
    price: 32,
    currency: '€',
    material: 'Haya',
    finish: 'Aceite alimentario',
    dimensions: '38 × 24 × 2 cm',
    leadTime: '4–5 días',
    hue: 30,
  },
  {
    id: 'p7',
    name: 'Panel art-deco',
    category: 'decoracion',
    description: 'Panel decorativo con patrón geométrico tallado de inspiración art-deco para cabeceros.',
    price: 95,
    currency: '€',
    material: 'DM lacado',
    finish: 'Laca mate nogal',
    dimensions: '120 × 80 × 1.8 cm',
    leadTime: '10–14 días',
    hue: 26,
  },
  {
    id: 'p8',
    name: 'Caja organizadora de costura',
    category: 'organizadores',
    description: 'Caja con compartimentos internos tallados y tapa deslizante. Ideal para manualidades.',
    price: 42,
    currency: '€',
    material: 'Cedro',
    finish: 'Cera de abeja',
    dimensions: '30 × 20 × 8 cm',
    leadTime: '5–7 días',
    hue: 36,
  },
  {
    id: 'p9',
    name: 'Letrero corporativo logo',
    category: 'letreros',
    description: 'Reproducción de tu logotipo en madera tridimensional con corte y grabado CNC.',
    price: 75,
    currency: '€',
    material: 'Acabalado',
    finish: 'Pintura+ barniz',
    dimensions: 'A medida',
    leadTime: '8–12 días',
    hue: 22,
  },
  {
    id: 'p10',
    name: 'Banqueta de cocina',
    category: 'muebles',
    description: 'Banqueta robusta de ensamblaje de cola de milano, perfecta como extra en la cocina.',
    price: 135,
    currency: '€',
    material: 'Roble macizo',
    finish: 'Aceite natural',
    dimensions: '40 × 30 × 45 cm',
    leadTime: '10–14 días',
    hue: 28,
  },
  {
    id: 'p11',
    name: 'Reloj de pared grabado',
    category: 'decoracion',
    description: 'Reloj de pared con números grabados y mecanismo silencioso. Diseño minimalista.',
    price: 58,
    currency: '€',
    material: 'Abeto',
    finish: 'Tinte nogal + cera',
    dimensions: 'Ø 35 × 2 cm',
    leadTime: '6–8 días',
    hue: 30,
  },
  {
    id: 'p12',
    name: 'Proyecto a medida',
    category: 'personalizado',
    description: 'Cuéntanos tu idea: piezas decorativas, muebles, regalos corporativos o prototipos. Trabajamos a partir de tu boceto.',
    price: 0,
    currency: '€',
    material: 'A elegir',
    finish: 'A elegir',
    dimensions: 'A medida',
    leadTime: 'Según proyecto',
    featured: true,
    hue: 40,
  },
];

export function formatPrice(p: Product): string {
  if (p.price === 0) return 'A consultar';
  return `${p.price} ${p.currency}`;
}
