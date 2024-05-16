<template>
  <v-container>
    <h1> Page Barmaker</h1>
    <v-form @submit.prevent="createCocktail">
      <v-text-field v-model="newCocktail.name" label="Name" required></v-text-field>
      <v-text-field v-model="newCocktail.description" label="Description" required></v-text-field>
      <v-text-field v-model="newCocktail.priceS" label="Prix Taille S" required></v-text-field>
      <v-text-field v-model="newCocktail.priceM" label="Prix Taille M" required></v-text-field>
      <v-text-field v-model="newCocktail.priceL" label="Prix Taille L" required></v-text-field>
      <v-btn type="submit" color="primary">Create Cocktail</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newCocktail: {
        name: '',
        description: '',
        priceS: '',
        priceM: '',
        priceL: ''
      }
    };
  },
  methods: {
    async createCocktail() {
      try {
        const response = await fetch('http://localhost:8080/v1/cocktails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newCocktail)
        });
        if (!response.ok) {
          throw new Error('Failed to create cocktail');
        }
        // Optionally, handle success response
        console.log('Cocktail created successfully');
      } catch (error) {
        console.error('Error creating cocktail:', error);
        // Handle error
      }
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>