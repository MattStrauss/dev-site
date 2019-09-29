<template>
    <layout>
        <div class="bg-white rounded-lg p-10 inset-y-auto object-center border-2 border-yellow-500">
            <div class="text-center text-gray-600">
                <h2 class="text-xl font-thin text-yellow-700 pb-3">Contact Me</h2>
                <ul class="no-disc">
                    <li class="hover:text-yellow-700"><a href="mailto:strausstester@gmail.com">strausstester@gmail.com</a></li>
                    <li class="hover:text-yellow-700"><a href="https://github.com/570studio">@570studio</a> (GitHub)</li>
                    <li class="hover:text-yellow-700"><a href="https://twitter.com/mstrauss_dev">@strauss_dev</a> (Twitter)</li>
                    <li class="hover:text-yellow-700"><a href="https://laracasts.com/@mstrauss">@mstrauss</a> (Laracasts) </li>
                </ul>
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
