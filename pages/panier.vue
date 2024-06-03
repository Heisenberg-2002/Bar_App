<template>
    <navbar-comp />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Mon panier</v-card-title>
            <v-card-text>
               bite  {{ basketItems }}
              <v-list>
                <v-list-item
                  v-for="(item, index) in basketItems"
                  :key="index"
                >
                  <v-row align="center" justify="space-between" class="w-100">
                    <v-col cols="6">
                      <v-list-item-title>{{ item.price }}</v-list-item-title>
                    </v-col>
                    <v-col cols="3">
                      <v-list-item-subtitle>{{ item.quantity }} €</v-list-item-subtitle>
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

  const { basketItems } = useBasket();

  
  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: 20px auto;
  }
  </style>
  