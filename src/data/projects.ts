export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  /**
   * "full": single column image block
   * "half": participates in a two-column moment (paired by order)
   */
  size?: "full" | "half";
};

export type ProjectGallerySection = {
  title: string;
  description?: string;
  images: GalleryImage[];
};

export type ProjectContentSection =
  | {
      type: "process";
      title: string;
      body?: string;
      images?: GalleryImage[];
    }
  | {
      type: "text";
      title: string;
      body: string;
    };

export type Project = {
  title: string;
  slug: string;
  subtitle?: string;
  course: string;
  semester: string;
  year: number;
  instructor?: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: GalleryImage;
  heroImage: GalleryImage;
  featured: boolean;
  tags: string[];
  gallerySections: ProjectGallerySection[];
  sections?: ProjectContentSection[];
};

export const projects: Project[] = [
  {
    title: "Slant House",
    slug: "slant-house",
    course: "ARC 107 Studio",
    semester: "Fall",
    year: 2025,
    instructor: "Chong Gu",
    shortDescription:
      "An interior-driven residence shaped by section, courtyard, and spatial sequence.",
    fullDescription:
      "This project explores architecture as an interior-driven process, where spatial experience and sectional relationships shape the overall form. Inspired by precedents such as the Koechlin House by Herzog & de Meuron, the design uses the formation of a courtyard to define space rather than relying on a facade-driven expression. The residence was designed for a family of four and investigates how architecture can be shaped by absence as much as form.",
    coverImage: {
      src: "/projects/slant-house/cover.svg",
      alt: "Slant House — cover image placeholder",
      caption: "Model study (placeholder)",
    },
    heroImage: {
      src: "/projects/slant-house/hero.svg",
      alt: "Slant House — hero image placeholder",
      caption: "Courtyard and sectional sequence (placeholder)",
    },
    featured: true,
    tags: ["Housing", "Section", "Courtyard", "Model", "Drawing"],
    gallerySections: [
      {
        title: "Model",
        images: [
          {
            src: "/projects/slant-house/model-01.svg",
            alt: "Physical model photograph placeholder",
            caption: "Physical model (placeholder)",
            size: "full",
          },
          {
            src: "/projects/slant-house/model-02.svg",
            alt: "Physical model detail placeholder",
            caption: "Model detail (placeholder)",
            size: "half",
          },
          {
            src: "/projects/slant-house/model-03.svg",
            alt: "Physical model detail placeholder",
            caption: "Model detail (placeholder)",
            size: "half",
          },
        ],
      },
      {
        title: "Drawings",
        images: [
          {
            src: "/projects/slant-house/oblique-drawing.svg",
            alt: "Oblique drawing placeholder",
            caption: "Oblique drawing (placeholder)",
            size: "full",
          },
          {
            src: "/projects/slant-house/plan-01.svg",
            alt: "Floor plan placeholder",
            caption: "Plan (placeholder)",
            size: "half",
          },
          {
            src: "/projects/slant-house/plan-02.svg",
            alt: "Floor plan placeholder",
            caption: "Plan (placeholder)",
            size: "half",
          },
        ],
      },
      {
        title: "Sections + Elevations",
        images: [
          {
            src: "/projects/slant-house/section-01.svg",
            alt: "Section drawing placeholder",
            caption: "Section (placeholder)",
            size: "full",
          },
          {
            src: "/projects/slant-house/elevation-01.svg",
            alt: "Elevation drawing placeholder",
            caption: "Elevation (placeholder)",
            size: "full",
          },
        ],
      },
      {
        title: "Diagrams",
        images: [
          {
            src: "/projects/slant-house/diagram-01.svg",
            alt: "Circulation diagram placeholder",
            caption: "Circulation (placeholder)",
            size: "half",
          },
          {
            src: "/projects/slant-house/diagram-02.svg",
            alt: "Parti diagram placeholder",
            caption: "Parti / geometry (placeholder)",
            size: "half",
          },
          {
            src: "/projects/slant-house/diagram-03.svg",
            alt: "Geometry diagram placeholder",
            caption: "Geometry (placeholder)",
            size: "full",
          },
        ],
      },
    ],
    sections: [
      {
        type: "process",
        title: "Process",
        body: "Early studies prioritized sectional relationships and the courtyard as a spatial organizer. Iterations tested how slant and void could structure daily movement and light without relying on a single front-facing facade.",
        images: [
          {
            src: "/projects/slant-house/process-01.svg",
            alt: "Process sketches placeholder",
            caption: "Studies / iterations (placeholder)",
            size: "full",
          },
        ],
      },
    ],
  },
  {
    title: "Interlock",
    slug: "interlock",
    subtitle: "A Friction-Fit Cardboard Experience",
    course: "ARC 108 Studio",
    semester: "Spring",
    year: 2026,
    shortDescription:
      "A load-bearing cardboard chair built with joinery and structural logic—no glue, no tape.",
    fullDescription:
      "This project is a load-bearing chair made entirely from cardboard without glue or tape, relying only on joinery and structural logic. It uses a hole-and-dowel system in which each component locks into the next, creating an interdependent framework. Angled buttress supports and diagonal bracing direct weight through controlled paths and visibly express compression, friction, and mechanical interlocking. The final prototype supported over 300 pounds.",
    coverImage: {
      src: "/projects/interlock/cover.svg",
      alt: "Interlock — cover image placeholder",
      caption: "Final prototype (placeholder)",
    },
    heroImage: {
      src: "/projects/interlock/hero.svg",
      alt: "Interlock — hero image placeholder",
      caption: "Load path and structure (placeholder)",
    },
    featured: true,
    tags: ["Structure", "Joinery", "Fabrication", "Cardboard", "Prototype"],
    gallerySections: [
      {
        title: "Final Prototype",
        images: [
          {
            src: "/projects/interlock/prototype-01.svg",
            alt: "Final prototype photograph placeholder",
            caption: "Final prototype (placeholder)",
            size: "full",
          },
          {
            src: "/projects/interlock/prototype-02.svg",
            alt: "Prototype angle placeholder",
            caption: "Prototype view (placeholder)",
            size: "half",
          },
          {
            src: "/projects/interlock/prototype-03.svg",
            alt: "Prototype angle placeholder",
            caption: "Prototype view (placeholder)",
            size: "half",
          },
        ],
      },
      {
        title: "Structural Logic",
        images: [
          {
            src: "/projects/interlock/logic-01.svg",
            alt: "Structural diagram placeholder",
            caption: "Load paths / bracing (placeholder)",
            size: "full",
          },
        ],
      },
      {
        title: "Joinery / Detail",
        images: [
          {
            src: "/projects/interlock/joinery-01.svg",
            alt: "Joinery detail placeholder",
            caption: "Hole-and-dowel system (placeholder)",
            size: "half",
          },
          {
            src: "/projects/interlock/joinery-02.svg",
            alt: "Joinery detail placeholder",
            caption: "Friction-fit lock (placeholder)",
            size: "half",
          },
          {
            src: "/projects/interlock/joinery-03.svg",
            alt: "Joinery detail placeholder",
            caption: "Detail study (placeholder)",
            size: "full",
          },
        ],
      },
      {
        title: "Process",
        images: [
          {
            src: "/projects/interlock/process-01.svg",
            alt: "Process development placeholder",
            caption: "Testing and iterations (placeholder)",
            size: "full",
          },
        ],
      },
    ],
    sections: [
      {
        type: "process",
        title: "Studies / Development",
        body: "Prototypes tested connection tolerances, material fatigue, and how diagonal bracing could stabilize the frame without adding mass. Each iteration refined the joinery to balance assembly speed with structural clarity.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

