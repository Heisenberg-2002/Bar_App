<template>
  <div class="d-flex align-center justify-center">
    <v-form @submit.prevent="handleLogin" class="pt-5">
      <h3> Login </h3>
      <v-text-field v-model="username" label="Username" variant="solo-inverted" width="600" required></v-text-field>
      <v-text-field v-model="password" label="Password" variant="solo-inverted" width="600" required></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
        
      <p v-if="error">{{ error }}</p>

    </v-form>
  </div>
</template>

<script lang="ts" setup>


    const username = ref('');
    const password = ref(''); 

    const {login , error } = useAuth();

    const handleLogin = () => {
      login({ username: username.value, password: password.value})
    }



</script>