<script setup>
const props = defineProps({
    NFTname: String,
    NFTdescription: String,
    NFTOwner: String,
    CurrenBid: Number,
})
</script>

<template>
    <div class="flex items-center justify-center ">
        <div class="my-10 w-72 bg-gray-800 p-5 rounded-md shadow-xl cursor-pointer">
            <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape">
            <h2 class="text-cyan-400 text-md font-bold mt-3">{{ NFTname }}</h2>
            <p class="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="flex justify-between items-center text-sm">
                <p class="text-red-400 font-bold">
                    <i class="fab fa-ethereum"></i> Current Bid
                </p>
                <p class="text-purple-400 font-bold">
                    <i class="fab fa-ethereum"></i> 70.1 ETH
                </p>
                <p class="text-gray-400">
                    <i class="fas fa-clock"></i> 3 days left
                </p>
            </div>
            <p class="bg-gray-600 h-[0.5px] w-full my-2"></p>
            <div class="flex items-center">
                <img src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="BAYC"
                    class="h-8 w-8 border border-white rounded-full mr-2">
                <p class="text-gray-400 text-[12px]">
                    Created by <a href="https://opensea.io/collection/boredapeyachtclub" target="_black" rel="no-opener"
                        class="text-white font-bold">Bored Ape Yatch Club</a>
                </p>
            </div>
        </div>

    </div>
</template>

