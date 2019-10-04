<template>
    <layout>
        <div class="bg-gray-600 p-10 inset-y-auto object-center">
            <div class="text-center text-gray-100">
                <h2 class="text-3xl font-hairline text-yellow-500">Contact</h2>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
                <ul class="no-disc pt-2 leading-loose">
                    <li class="hover:text-yellow-500">
                        <a href="mailto:strausstester@gmail.com"><i class="far fa-envelope fa-fw"></i> strausstester@gmail.com <i class="far fa-envelope fa-fw"></i></a>
                    </li>
                    <li class="hover:text-yellow-500">
                        <a href="https://github.com/MattStrauss"><i class="fab fa-github fa-fw"></i> @MattStrauss <i class="fab fa-github fa-fw"></i></a>
                    </li>
                    <li class="hover:text-yellow-500">
                        <a href="https://twitter.com/mstrauss_dev"><i class="fab fa-twitter fa-fw"></i> @mstrauss_dev <i class="fab fa-twitter fa-fw"></i></a>
                    </li>
                    <li class="hover:text-yellow-500">
                        <a href="https://laracasts.com/@mstrauss"><i class="fab fa-laravel fa-fw"></i> @mstrauss <i class="fab fa-laravel fa-fw"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-gray-700 p-4 object-center text-center pb-20">
            <div class="md:ml-64 md:mr-64  pb-5">
                <p class="text-3xl text-yellow-500 font-hairline">For Hire</p>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
                <p class="italic text-gray-100 text-hairline pt-2">
                    If you'd like to hire me to work on your project or application, please email me at the address above with the details and we can discuss it.
                    To see my current projects and contributions check out my GitHub page.
                </p>
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
