<script setup>
import { useCryptoStore } from '../stores/crypto.js'
import { ref } from 'vue'
const cryptoStore = useCryptoStore()



const NFTContract = ref(null);
const TokenID = ref(null);
const InitialPrice = ref(null);
const OpenDatetime = ref(null)
const CloseDatetime = ref(null)

async function createNewAuction() {
    console.log(Date.parse(OpenDatetime.value) / 1000)
    console.log(Date.parse(CloseDatetime.value) / 1000)
    console.log(NFTContract.value)
    const result = await cryptoStore.createNewAuction(NFTContract.value, TokenID.value, InitialPrice.value, Date.parse(OpenDatetime.value) / 1000, Date.parse(CloseDatetime.value) / 1000)
    console.log(result.transactionHash)
    if (result.transactionHash) {
        await cryptoStore.createNewAuctioToBackend(result.transactionHash)
    }
}


</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    NFT Contract
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="NFTContract" type="text" placeholder="Enter NFT Contract">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    TokenID
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="TokenID" type="number" placeholder="Enter NFT TokenID">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    Initial Price ( WEI )
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="InitialPrice" type="number" placeholder="Enter Initial Price ( WEI )">
            </div>

            <div class="mb-4">
                <label for="opendatetime">Open time: </label>
                <input type="datetime-local" v-model="OpenDatetime" />
            </div>

            <div class="mb-4">
                <label for="closedatetime">Close time: </label>
                <input type="datetime-local" v-model="CloseDatetime" />
            </div>



            <div class="flex items-center justify-between">
                <button @click="createNewAuction"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Create a new Auction
                </button>
            </div>

        </form>
    </div>
</template>