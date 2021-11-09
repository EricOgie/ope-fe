import auth from "../services/auth";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {},
  actions: {
    login(_, data) {
      auth.login(data).then((res) => console.log(res));
    },
    register(_, data) {
      auth.register(data).then((res) => console.log(res));
    },
  },
  modules: {},
};
