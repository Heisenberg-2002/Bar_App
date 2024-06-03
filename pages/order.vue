<template>
  <navbar-comp />
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Ma commande</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(order, index) in orders"
                :key="index"
              >
                <v-row align="center" justify="space-between" class="w-100">
                  <v-col cols="6">
                    <v-list-item-title>{{ order.status }}</v-list-item-title>
                  </v-col>
                  <v-col cols="3">
                    <v-list-item-subtitle>{{ order.totalPrice }} €</v-list-item-subtitle>
                  </v-col>
                  <v-col cols="3" class="d-flex justify-end">
                    <v-icon @click="deleteOrder(order.id)">mdi-delete</v-icon>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
            <hr>
            <br>
            <v-row>
              <v-col>
                <v-title> Montant total :</v-title>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Cocktail } from '~/model/cocktail';
import type { Order } from '~/model/order';



const removeFromCart = (index: number) => {
  orders.value.splice(index, 1)
}

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

const cocktails = ref<Array<Cocktail>>([]);

onMounted(async () => {
  cocktails.value = await fetchCocktails();
});



const getOrder = async () => {
  try{
  const response = await fetch('http://localhost:8080/v1/orders', {
    method: "GET",
    });
  if(!response.ok){
    throw new Error('Failed to create order')
  }
  return await response.json()
}catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
    }
};

const orders = ref<Array<Order>>([]);

onMounted(async () => {
  orders.value = await getOrder();
});

const deleteOrder = async (orderId : number) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/orders/${orderId}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error('Failed to delete order');
    }

    orders.value = orders.value.filter((order: Order) => order.id !== orderId);
    console.log('Order deleted successfully');
  }catch (error) {
    console.log('Error deleting order',error); []
  }
};

</script>

<style scoped>
.v-card {
  max-width: 600px;
  margin: 20px auto;
}
</style>
