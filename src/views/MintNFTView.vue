<script setup>
import { useMintNFTStore } from '../stores/mintNFT.js';
import { useCryptoStore } from '../stores/crypto.js';
import { ref } from 'vue'


const mintNFTStore = useMintNFTStore();
const cryptoStore = useCryptoStore();

const previewUrl = ref(null);
const file = ref(null);

const nameNFT = ref(null);
const descriptionNFT = ref(null);
const tokenID = ref(null);

// FOR PREVIEW PURPOSE ONLY
async function onFileSelect(event) {
  try {
    file.value = event.target.files[0]
    console.log(file.value);

    const reader = new FileReader();
    reader.onload = (e) => {
      previewUrl.value = e.target.result;
    };
    reader.readAsDataURL(file.value);

  } catch (err) {
    console.error(err)
  }
}


async function mintNFT() {
  const imageHASH = await mintNFTStore.uploadFile(file.value)

  const metadata = {
    name: nameNFT.value,
    description: descriptionNFT.value,
    image: "https://ipfs.io/ipfs/" + imageHASH,
  }
  const metadataHash = await mintNFTStore.uploadMetadata(metadata)

  await cryptoStore.mintAndApprovalNFT(tokenID.value, metadataHash)
  await mintNFTStore.uploadToBackend(cryptoStore.account, cryptoStore.NFTTokenContractAddress, tokenID.value, nameNFT.value, descriptionNFT.value, imageHASH, metadataHash)
}


</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          NFT Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="nameNFT" type="text" placeholder="Enter NFT name">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          NFT Description
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="descriptionNFT" type="text" placeholder="Enter NFT Description">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Token ID
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="tokenID" type="text" placeholder="Enter unique Token ID">
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="photo">
          Upload Image
        </label>
        <input class="block" type="file" @change="onFileSelect">
      </div>

      <img class="h-40 w-60" v-if="previewUrl" :src="previewUrl" />


      <div class="flex items-center justify-between">
        <button @click="mintNFT"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">
          Mint NFT
        </button>
      </div>


    </form>
  </div>
</template>


