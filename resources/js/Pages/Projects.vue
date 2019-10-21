<template>
    <layout>
        <div class="bg-gray-600 p-6 inset-y-auto object-center">
            <div class="max-w-sm rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto ">
                <img class="w-full" src="/images/grocery.jpg" alt="Grocery Aisle">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-yellow-600"><a href="https://swiftgrocerylist.com" class="hover:text-yellow-500">Swift Grocery List</a></div>
                    <p class="text-gray-700 text-base">
                        A grocery list making web application built with Laravel and Vue.js. Includes recipes, aisle sorting and much more.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb2">#laravel</span>
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
