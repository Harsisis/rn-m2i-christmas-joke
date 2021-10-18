enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export abstract class CrudStore {
  protected apiPath = '';

  protected async get(resource = '') {
    return fetch(this.apiPath + resource);
  }
}
