const API_URL = 'http://localhost:8000'

export const api = {
  getCoins() {
    return fetch(`${API_URL}/coins`)
      .then(response => response.json())
  },
  getUser(id) {
    return fetch(`${API_URL}/coins/${id}`)
      .then(response => response.json())
      .catch(err => err.json())
  }
}