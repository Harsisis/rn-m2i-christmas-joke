import {CrudStore} from '../../../common/stores/CrudStore';

export type TCharac = {
  _id: string;
  alive: string;
  allegiance: string[];
  Kingsguard: string;
  books: string[];
  The: string;
  children: string[];
  createdAt: Date;
  culture: string;
  gender: string;
  house: string;
  id: string;
  longevity: string[];
  longevityB: string[];
  longevityC: string[];
  name: string;
  pagerank: {
    rank: number;
    title: string;
  };
  title: string;
  plod: string;
  plodB: string;
  plodC: string;
  slug: string;
  spouse: string[];
  titles: string[];
  updatedAt: Date;
};

class CharactersStore extends CrudStore {
  public characters = [];

  constructor() {
    super();
    this.apiPath = 'https://api.got.show/api';
  }

  fetchCharacters() {
    return this.get('/book/characters');
  }
}

export const charactersStore = new CharactersStore();
