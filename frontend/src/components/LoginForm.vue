<template lang="">
  <div class="flex justify-center">
    <form @submit.prevent="onSubmit" class="w-6/12 p-4 bg-secondary border-brown-medium border-4 shadow-2xl">
      <input type="text" placeholder="Benutzername" v-model="username" class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"/>
      <input type="password" placeholder="Passwort" v-model="password" class="bg-secondary w-36 p-1 mr-2 border-2 border-brown-medium placeholder-brown-medium font-semibold rounded"/><br />
      <Button @click="loginBtnClicked" btnText="Einloggen"/>
      <div class="mt-2">Passwort vergessen</div>
    </form>
    <!-- <div v-if="error">Etwas ging schief</div> -->
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia'

import Button from './Button.vue';

export default {
  name: 'LoginForm',
  components: {Button},
  data() {
    return {
      buttonText: "Einloggen"
    }
  },

  setup() {
    const auth = useUserStore();
    let username = ref('');
    let password = ref('');
    const { loggedIn } = storeToRefs(auth)
    
    const loginBtnClicked = () => {
      auth.login({
        username: username.value,
        password: password.value,
        platform: 'PC',
      });
    };

    return {
      loginBtnClicked,
      username,
      password,
      loggedIn,
    }
  },
};
</script>
