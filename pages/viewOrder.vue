<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card v-if="order">
            <v-card-title>
              Order #{{ order.id }}
            </v-card-title>
            <v-card-subtitle>
              <p><strong>Date:</strong> {{ formatDate(order.date) }}</p>
              <p><strong>Status:</strong> {{ order.status }}</p>
              <p><strong>Total Price:</strong> ${{ order.totalPrice.toFixed(2) }}</p>
            </v-card-subtitle>
  
            <v-card-text>
              <v-list>
                <v-list-item v-for="detail in orderDetails" :key="detail.id">
                  <v-list-item-content>
                    <v-list-item-title><strong>Product:</strong> {{ detail.productName }}</v-list-item-title>
                    <v-list-item-subtitle><strong>Quantity:</strong> {{ detail.quantity }}</v-list-item-subtitle>
                    <v-list-item-subtitle><strong>Price:</strong> ${{ detail.price.toFixed(2) }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-alert v-else type="info">
            Loading order...
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  
  const order = ref([])
  const orderDetails = ref([])
  
  const route = useRoute()
  
  const fetchOrder = async () => {
    const orderId = route.params.orderId
    try {
      const response = await fetch(`http://localhost:8080/v1/orders/${orderId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch order')
      }
      const orderData = await response.json()
      order.value = orderData
      orderDetails.value = orderData.orderDetails // Assuming orderDetails are part of the response
    } catch (error) {
      console.error('Error fetching order:', error)
    }
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  onMounted(fetchOrder)
  </script>
  
  <style scoped>
  .order-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  
  .order-container h1,
  .order-container h2 {
    margin-bottom: 20px;
  }
  
  .order-container p {
    margin: 5px 0;
  }
  
  .order-container ul {
    list-style-type: none;
    padding: 0;
  }
  
  .order-container li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .order-container li:last-child {
    border-bottom: none;
  }
  </style>
  