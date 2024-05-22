<template>
        <h1> Login </h1>
    <v-form @submit.prevent="handleLogin" class="pt-5">
      <v-text-field v-model="username" label="Username" variant="solo-inverted" width="600" required></v-text-field>
      <v-text-field v-model="password" label="Password" variant="solo-inverted" width="600" required></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
        <v-btn @click="router.push('/jdmeg')"></v-btn>
    </v-form>
      <p v-if="error">{{ error }}</p>
</template>

<script lang="ts" setup>
import {useAuth} from "../components/auth/useAuth"


    const username = ref('');
    const password = ref(''); 

    const {login , error } = useAuth();

    const handleLogin = () => {
      login({ username: username.value, password: password.value})
    }

    const router = useRouter()


</script>