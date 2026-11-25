export const appName = "Les9";

export type PlaceholderPage = {
  id: string;
  title: string;
  summary: string;
};

/** Placeholder copy until the product, audience, and language are decided. */
export const placeholderPages: readonly PlaceholderPage[] = [
  {
    id: "home",
    title: "Accueil",
    summary:
      "Squelette local. Le contenu, le public et les fonctions restent à définir.",
  },
];
