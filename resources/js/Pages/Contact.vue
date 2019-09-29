<template>
    <layout>
        <div class="bg-white rounded-lg p-10 inset-y-auto object-center">
            <img class="h-56 w-56 rounded-full mx-auto border-2 border-yellow-600" src="/images/avatar_alt.jpg">
            <div class="text-center">
                <h2 class="text-lg">Matt Strauss</h2>
                <div class="text-yellow-700">Full Stack Developer</div>
                <div class="text-gray-600">Pennsylvania, USA</div>
                <div class="text-gray-600">Software Engineering Student</div>
                <div class="text-gray-600">PHP, Laravel, Vue, Automated Testing</div>
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
