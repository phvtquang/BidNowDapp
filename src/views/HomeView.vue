<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useCryptoStore } from '../stores/crypto.js';

const cryptoStore = useCryptoStore();

</script>

<template>
  <body class="bg-gradient-to-br from-purple-500 to-blue-500 h-screen">
    <div class="flex items-center justify-center h-full">
      <div class="container mx-auto px-4 py-8 flex items-center justify-center">
        <div class="w-1/2">
          <h1 class="text-white text-4xl font-extrabold  mb-4">Welcome to BidNow NFT Marketplace!</h1>
          <p class="text-white text-lg mb-4">Check out latest NFT collection and become a part of the blockchain
            revolution.</p>
          <button @click="cryptoStore.initializeWeb3" class=" bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded
            shadow">Get
            Started</button>
        </div>
        <div class="w-1/2">
          <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
            alt="NFT Image" class="w-full">
        </div>
      </div>
    </div>
  </body>
</template>
