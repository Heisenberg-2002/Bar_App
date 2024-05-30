<template>
  <v-container>
    <div>Page panier</div>



  <!-- Order -->
    <v-row class="d-flex flex-column">
      <v-col>
        <v-card>
          
        </v-card>
      </v-col>
    </v-row>



    <v-btn link to="homepageClient">Retourner accueil </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import type { Order } from '~/model/order';


 definePageMeta ({middleware : "auth"})





const fetchOrders = async () => {
  try {
    const response = await fetch("http://localhost:8080/v1/orders")
    if (!response.ok){
      throw new Error('Failed to fetch orders')
    }
    return await response.json();
  }catch (error) {
    console.error('Error fetching orders:', error );
    return [];
  }
}


const orders = ref<Array<Order>>



</script>

<style lang="scss" scoped></style>
