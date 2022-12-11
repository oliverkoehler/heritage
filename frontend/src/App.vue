<template>
  <div class="
    text-brown
    bg-primary
    h-screen
    pt-10
  ">
    <LoginForm v-if="!loggedIn" />
    <Dashboard v-else />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import Dashboard from './components/Dashboard.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import './assets/tailwind.css';

export default {
  name: 'App',
  components: {
    LoginForm,
    Dashboard,
  },

  setup() {
    const auth = useUserStore();
    const { loggedIn } = storeToRefs(auth);

    return {
      loggedIn,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
