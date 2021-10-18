export abstract class CrudStore implements IApiStore {
  protected apiPath = '';

  protected async get(resource = '') {
    return fetch(this.apiPath + resource);
  }
}
