<template>
    <div class="flex flex-col">
        <div class="flex">
            <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="[
                'px-4 py-2 mr-2 text-sm font-medium rounded-t-md focus:outline-none',
                activeTab === index ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-700'
            ]">
                {{ tab.name }}
            </button>
        </div>
        <div class="p-6 bg-white border-l border-r border-b rounded-b-md">
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                <h2 class="text-lg font-medium">{{ tab.name }}</h2>
                <p class="mt-1">{{ tab.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            tabs: [
                {
                    name: 'Tab 1',
                    content: 'This is the content of Tab 1'
                },
                {
                    name: 'Tab 2',
                    content: 'This is the content of Tab 2'
                },
                {
                    name: 'Tab 3',
                    content: 'This is the content of Tab 3'
                }
            ]
        }
    }
}
</script>

