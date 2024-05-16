
<template>
  <div>
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
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-container>
      <h1>Page Client</h1>

      <!-- Utilisation de v-row pour les lignes et v-col pour les colonnes -->
      <v-row>
        <v-col
          v-for="cocktail in cocktails"
          :key="cocktail.id"
          cols="12"      
          md="3" 
          >     
          <v-card rounded="0" >

            <v-img src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/recettes-de-cocktail/788840-9-fre-FR/Recettes-de-cocktail.jpg">
             
              <v-card-title  class=" text-white text-h6">{{ cocktail.name }}</v-card-title>

            </v-img>

    
  <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <div class="text-center">
      <v-btn
      v-bind="activatorProps"
      color="green"
      text="Commander"
      variant="flat"
      rounded="0"
      width="100%"
    ></v-btn>
  </div>

  </template>

  <template v-slot:default="{ isActive }">
    <v-card>
      <v-card-title>{{ cocktail.name }}</v-card-title>
      <v-card-text>
        <v-img src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/recettes-de-cocktail/788840-9-fre-FR/Recettes-de-cocktail.jpg"></v-img>
        <p>Description: {{ cocktail.description }}</p>
        <p>Price S: {{ cocktail.priceS }}</p>
        <p>Price M: {{ cocktail.priceM }}</p>
        <p>Price L: {{ cocktail.priceL }}</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Commander ce cocktail"
          color="green"
          variant="flat"
        ></v-btn>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
            <!-- Insérez ici le contenu de votre carte -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script lang="ts" setup>

const dialog = ref(false)


const fetchCocktails = async () => {
  try {
    const response = await fetch('http://localhost:8080/v1/cocktails/all');
    if (!response.ok) {
      throw new Error('Failed to fetch cocktails');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
};

const cocktails = ref([]);

onMounted(async () => {
  cocktails.value = await fetchCocktails();
});

const goToPanier = () => {
  // Define your panier navigation logic here
};

const logout = () => {
  // Define your logout logic here
};






</script>


<style >
.text-container {
  position: relative;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Fond blanc avec opacité */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre douce */
}

.headline {
  font-family: "Roboto", sans-serif; /* Belle police de Roboto */
}
</style>