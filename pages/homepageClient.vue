
<template>
  <div>
   
    <navbarComp/>
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
    <v-btn
      color="red"
      text="Supprimer"
      variant="flat"
      rounded="0"
      width="100%"
      @click="deleteCocktail(cocktail.id)"
    ></v-btn>
  </div>

  </template>

  <template v-slot:default="{ isActive }">
    <v-card>
      <v-card-title>{{ cocktail.name }}</v-card-title>
      <v-card-text>
        <v-img src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/recettes-de-cocktail/788840-9-fre-FR/Recettes-de-cocktail.jpg"></v-img>
        <p>Description: {{ cocktail.description }}</p>
        <p>Prix: {{ cocktail.price }}</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Commander ce cocktail"
          color="green"
          variant="flat"
          @click="addToBasket(cocktails)"
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
import useBasket from "~/composables/useBasket";
import type { Cocktail } from "~/model/cocktail";
import type { Order } from "~/model/order";


const { addToBasket} = useBasket();


const router = useRouter();

// Fonction pour récupérer les cocktails depuis le serveur
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

// Fonction pour supprimer un cocktail
const deleteCocktail = async (cocktailId: number) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/cocktails/${cocktailId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete cocktail');
    }
    // Mettre à jour la liste des cocktails après suppression
    cocktails.value = cocktails.value.filter((cocktail: Cocktail) => cocktail.id !== cocktailId);
    console.log('Cocktail deleted successfully');
  } catch (error) {
    console.error('Error deleting cocktail:', error);[]
  }
};

// Déclarer une référence réactive pour stocker les cocktails
const cocktails = ref<Array<Cocktail>>([]);

// Appeler fetchCocktails lors du montage du composant
onMounted(async () => {
  cocktails.value = await fetchCocktails();
});

// Autres fonctions et logique de composant
// ...



const order : Order = {};


const createOrder = async () => {
  order.date = new Date();
  order.totalPrice = 12;
  order.status = "En préparation";

  try {
    const response = await fetch("http://localhost:8080/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(order)
    });
    if(!response.ok){
       throw new Error('Failed to create order')
    } 
    router.push('/order');
    console.log(order)
    return await response.json();
  }catch (error){
    console.error('Error fetching orders:', error);
    return [];
  }
}

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