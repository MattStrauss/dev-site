<template>
    <layout>
        <div class="bg-gray-600 p-6 inset-y-auto object-center">
            <div class="text-center text-gray-100">
                <h2 class="text-3xl font-hairline text-yellow-500">Projects</h2>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
            </div>
            <div class="max-w-lg rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto border-gray-700 border-2">
                <img class="w-full" src="/images/grocery.jpg" alt="Grocery Aisle">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-yellow-600"><a href="https://swiftgrocerylist.com" class="hover:text-yellow-500">Swift Grocery List</a></div>
                    <p class="text-gray-700 text-base">
                        A web application that helps you create a grocery shopping list fast. Built with Laravel and Vue.js. Includes recipes, drag-and-drop aisle sorting and much more.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">#laravel</span>
                    <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">#vueJS</span>
                    <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">#bootstrap4</span>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from '@/Shared/Layout'

    export default {
        components: {
            Layout,
        },
    }
</script>
