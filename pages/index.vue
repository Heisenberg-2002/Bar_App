<template>
  <v-container class="centered-element" fluid>
    <v-row justify="center" class="">
      <v-col cols="12" sm="6" md="4" >
        <v-img 
          src="@/public/Bar.svg"
          width="500"
          height="400"
        />
      </v-col>
    </v-row>
    <v-row justify="center" class="space-between">
      <v-btn class="bg-pink mr-2" link to="homepageClient"
        >Vous êtes Client</v-btn
      >
      <v-btn class="bg-green ml-2" link to="homepageBarmaker"
        >Vous êtes Barmaker</v-btn
      >
    </v-row>
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
.centered-element {
  position: absolute; /* Position absolue par rapport au viewport */
  top: 50%; /* Placer l'élément au milieu verticalement */
  left: 50%; /* Placer l'élément au milieu horizontalement */
  transform: translate(-50%, -50%); /* Centrer l'élément */
}
</style>

function definePageMeta(arg0: { layout: string; }) { throw new Error("Function
not implemented."); }
