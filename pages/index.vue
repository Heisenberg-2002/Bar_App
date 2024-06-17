<template>
  <v-container class="d-flex align-center justify-center" fluid>
      <v-col cols="12" sm="6" md="4">
        <v-img 
          src="@/public/Bar.svg"
          width="700"
          height="400"
        />
      </v-col>
      <v-btn height="100" class="bg-pink mr-2" link to="homepageClient">
        Vous êtes Client
      </v-btn>
      <v-btn height="100" class="bg-green ml-2" link to="homepageBarmaker">
        Vous êtes Barmaker
      </v-btn>
      
  </v-container>
  </template>



<script lang="ts" setup>

</script>

<style>
html,
body {
  background-color: #d7f18e;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Pour éviter la barre de défilement horizontale */
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>

function definePageMeta(arg0: { layout: string; }) { throw new Error("Function
not implemented."); }
