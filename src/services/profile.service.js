import axios from "axios";

class ProfileService {
  getUserAndAuth() {
    return axios.get(`api/multi/getUserAndAuths`);
  }
  getPayHistory() {
    return axios.get(`api/user/payhistory`);
  }
  getSellItemHistory() {
    return axios.get(`api/user/sellitemshistory`);
  }
  getContacts() {
    return axios.get(`api/contacts`);
  }
}

export { ProfileService };
