<template>
<v-toolbar height="100" class="bg-grey" prominent>
    <v-img 
      src="@/public/Bar.svg"
      height="100"
      width="200"
    />
    <v-title class="text-h4 text-black">Bar'App</v-title>

    <v-spacer></v-spacer>
    <v-btn variant="plain" link to="panier">Panier</v-btn>
    

    <v-btn text="Page d'accueil" link to="/"></v-btn>
    <!-- Déconnexion -->
    <v-btn @click="logout" icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


interface User {
    id : number,
    username: string,
    token: string
}

const router = useRouter();
const user = ref<User | null>(null);

const logout = () =>{
        user.value = null;
        router.push('/login')
    }
</script>