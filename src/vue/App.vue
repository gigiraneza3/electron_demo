<template>
  <nav>
    <router-link :to="{ name: 'home' }">Accueil</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </nav>
  <router-view />
</template>