import { callApi } from '../helpers/apiHelper';

class FighterService {
  #endpoint = 'fighters.json';

  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    // todo: implement this method
    const endpoint = `details/fighter/${id}.json`;
    try {
      const result = await callApi(endpoint);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
