<template>
    <layout>
        <div class="bg-white rounded-lg p-10 inset-y-auto object-center border-2 border-yellow-500">
            <div class="text-center text-gray-600">
                <h2 class="text-3xl font-hairline text-yellow-700 border-b">Contact Info</h2>
                <ul class="no-disc pt-2 leading-loose">
                    <li class="hover:text-yellow-700"><a href="mailto:strausstester@gmail.com">strausstester@gmail.com <i class="far fa-envelope fa-fw"></i></a></li>
                    <li class="hover:text-yellow-700"><a href="https://github.com/MattStrauss">@MattStrauss <i class="fab fa-github fa-fw"></i></a></li>
                    <li class="hover:text-yellow-700"><a href="https://twitter.com/mstrauss_dev">@strauss_dev <i class="fab fa-twitter fa-fw"></i></a></li>
                    <li class="hover:text-yellow-700"><a href="https://laracasts.com/@mstrauss">@mstrauss <i class="fab fa-laravel fa-fw"></i></a></li>
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
