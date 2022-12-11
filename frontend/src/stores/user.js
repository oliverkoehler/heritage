import { defineStore } from 'pinia';
import apolloClient from '../plugins/apollo';
import { loginUser } from '@/apollo/mutations';
import { myUser } from '@/apollo/queries';

export const useUserStore = defineStore('users', {
  state: () => ({
    loggedIn: localStorage.getItem('loggedIn') ?? false,
    user: JSON.parse(localStorage.getItem('user')),
  }),

  actions: {
    async login(credentials) {
      const login = (
        await apolloClient.mutate({
          mutation: loginUser,
          variables: { ...credentials },
        })
      ).data;

      if (!login) return;

      if (!login.loginUser.success) {
        console.log(login.loginUser.msg)

        return;
      }

      localStorage.setItem('access-token', login.loginUser.msg);

      await apolloClient.resetStore();

      this.fetchUser();
    },

    async fetchUser() {
      const user = (
        await apolloClient.query({
          query: myUser,
        })
      ).data;

      this.loggedIn = true;
      this.user = user.myUser;
      localStorage.setItem('loggedIn', this.loggedIn);
      localStorage.setItem('user', JSON.stringify(this.user));
    },

    async logout() {
      localStorage.removeItem('access-token');
      localStorage.removeItem('user');
      localStorage.removeItem('loggedIn');

      this.loggedIn = false;
      this.user = null;

      await apolloClient.resetStore();
    },
  },
});
