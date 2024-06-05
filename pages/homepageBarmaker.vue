<template>
   <navbarComp/>
  <v-container>
    <h1> Page Barmaker</h1>
    <v-form @submit.prevent="createCocktail" class="pt-5">
      <v-text-field v-model="newCocktail.name" label="Name" variant="solo-inverted" width="600"></v-text-field>
      <v-text-field v-model="newCocktail.description" label="Description" variant="solo-inverted" width="600" required></v-text-field>
      <v-text-field v-model="newCocktail.price" label="Prix" variant="solo-inverted" width="600" required></v-text-field>
      <v-btn type="submit" color="primary">Create Cocktail</v-btn>
    </v-form> 
    <div class="pt-4">
      <v-btn color="pink" link to="homepageClient" >Page Client</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

// Create a reactive object for newCocktail
const newCocktail = reactive({
  name: '',
  description: '',
  price:'',
 
});

// Use the router from vue-router for navigation
const router = useRouter();

// Define the createCocktail method
const createCocktail = async () => {
  try {
    const response = await fetch('http://localhost:8080/v1/cocktails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCocktail)
    });
    if (!response.ok) {
      throw new Error('Failed to create cocktail');
    }
    // Navigate to /homepageClient upon success
    router.push('/homepageClient');
    console.log('Cocktail created successfully');
  } catch (error) {
    console.error('Error creating cocktail:', error);
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>