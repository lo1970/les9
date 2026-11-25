import type { Announcement, Gazette, GazetteStore, NewsItem } from '@les9/domain';

/** Aucune gazette : le contenu réel n'est pas inventé ici. */
export class EmptyGazetteStore implements GazetteStore {
  async list(): Promise<readonly Gazette[]> {
    return [];
  }

  async findBySlug(_slug: string): Promise<Gazette | null> {
    return null;
  }

  async listNews(_gazetteId: string): Promise<readonly NewsItem[]> {
    return [];
  }

  async listAnnouncements(_gazetteId: string): Promise<readonly Announcement[]> {
    return [];
  }
}
