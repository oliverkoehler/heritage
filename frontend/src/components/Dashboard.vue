<template lang="">
  <div>
    <div class="text-2xl font-bold ">Willkommen {{ user.name }}!</div>
    <div class="text-xs">ID: {{user._id}}</div>
    <Button btnText="Ausloggen" @click="handleLogoutClick"/>
  </div>
</template>
<script>
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';

import Button from './Button.vue';

export default {
  name: 'Dashboard',
  components: {Button},

  setup() {
    const userStore = useUserStore();
    const { user } = storeToRefs(userStore);

    const handleLogoutClick = () => {
      userStore.logout()
    }

    return {
      user,
      handleLogoutClick
    };
  },
};
</script>
<style lang=""></style>
