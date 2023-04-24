<script setup>
import NFTCard from '../components/NFTCard.vue';
// Get list auction
async function getListAuctionByStatus(status) {
    const url = 'http://localhost:8080/api/v1/auction/get-list-auction-from-status?statusAuction=' + status
    fetch(url, {
        method: 'GET',
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
</script>

<template>
    <button @on-click="getListAuctionByStatus">GET LIST AUCTION</button>
    <div class="bg-gradient-to-br from-purple-500 to-blue-500 h-screen">

        <div class="grid grid-cols-5">
            <NFTCard :NFTname="'LOL'"></NFTCard>
        </div>

    </div>
</template>


