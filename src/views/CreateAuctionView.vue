<template>
    <div class="flex items-center justify-center h-screen">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    NFT Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Enter NFT name">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    NFT Description
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Enter NFT Description">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    Token ID
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Enter unique Token ID">
            </div>


            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Create a new Auction
                </button>
            </div>

        </form>
    </div>
</template>