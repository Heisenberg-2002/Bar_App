<template>
    <navbar-comp />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Mon panier</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(item, index) in basketItems"
                  :key="index"
                >
                  <v-row align="center" justify="space-between" class="w-100">
                    <v-col cols="6">
                      <v-list-item-title>{{ item.cocktailName }}</v-list-item-title>
                    </v-col>
                    <v-col cols="3">
                      <v-list-item-subtitle>{{ item.price }} €</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-end">
                      <v-icon @click="removeFromCart">mdi-delete</v-icon>
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-list>
              <hr>
              <br>
              <v-row>
                <v-col>
                  <v-title> Montant total : {{ }} €</v-title>
                </v-col>
                <v-col align="end">
                   <v-btn
                    text="Commander"
                    color="green"
                    variant="flat"
                   >
                  </v-btn>
                </v-col>
                
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
import Order from './order.vue';


  const router = useRouter();


  const { basketItems } = useBasket();

  const removeFromCart = (index: number) => {
  basketItems.value.splice(index, 1)
}

// const order : Order = {};


// const createOrder = async () => {
//   order.date = new Date();
//   order.totalPrice = 12;
//   order.status = "En préparation";

//   try {
//     const response = await fetch("http://localhost:8080/v1/orders", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body : JSON.stringify(order)
//     });
//     if(!response.ok){
//        throw new Error('Failed to create order')
//     } 
//     router.push('/homepageClient');
//     console.log(order)
//     return await response.json();
//   }catch (error){
//     console.error('Error fetching orders:', error);
//     return [];
//   }
// }


  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: 20px auto;
  }
  </style>
  