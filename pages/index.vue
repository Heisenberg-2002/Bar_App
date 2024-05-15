<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-img
          src="C:\Users\arthu\OneDrive\Bureau\Examen-Mai-2024\Bar-App\public\Bar.svg"
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

<style lang="scss" scoped>
html,
body {
  background-color: #d7f18e;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Pour éviter la barre de défilement horizontale */
}
</style>

function definePageMeta(arg0: { layout: string; }) { throw new Error("Function
not implemented."); }
