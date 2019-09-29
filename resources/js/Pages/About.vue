<template>
    <layout>
        <div class="object-cover">

            <div class="bg-white rounded-lg p-4 object-center text-center border-2 border-yellow-500">

                <div class="ml-40 mr-40">
                    <h2 class="text-xl text-black text-thin">About Me</h2>
                    <p class="italic text-gray-600 text-thin">
                        I'm a free lance web developer with experience in a range of technologies, see below. While I typically work as a full stack developer, my skills are
                        stronger on the backend. But, with the advent of new tools like Inertia.js and TailwindCSS, the frontend is becoming more and more fun.
                        In addition to being a developer, I am also currently studying Software Engineering at the Pennsylvania State University to gain deeper insights and a
                        more rigorous understanding of core software concepts, architecture, etc.
                    </p>
                </div>

                <h2 class="text-xl text-black text-thin text-center pt-8">Familiar Technologies</h2>

                <div class="flex content-start flex-wrap ml-40 mr-40 text-sm text-gray-700">

                    <div class="w-1/3 m-2 text-center bg-yellow-100 rounded flex-grow p-3">
                        <h4 class="text-xl text-bold pt-2">Backend</h4>
                        <ul class="no-disc">
                            <li><strong>PHP</strong>: Used since 2006</li>
                            <li><strong>SQL</strong>: Used since 2006</li>
                            <li><strong>MySQL</strong>: Used since 2006</li>
                            <li><strong>Laravel</strong>: Used since 2015</li>
                            <li><strong>NoSQL</strong>: Used since 2018</li>
                        </ul>
                    </div>

                    <div class="w-1/3 m-2 text-center bg-yellow-100 rounded flex-grow p-3">
                        <h4 class="text-xl text-bold pt-3">Frontend</h4>
                        <ul class="no-disc">
                            <li><strong>Javascript</strong>: Used since 2006</li>
                            <li><strong>HTML</strong>: Used since 2006</li>
                            <li><strong>CSS</strong>: Used since 2006</li>
                            <li><strong>JQuery</strong>: Used since 2007</li>
                            <li><strong>Angular.js</strong>: Used since 2016</li>
                            <li><strong>Vue.js</strong>: Used since 2017</li>
                            <li><strong>Laravel Mix</strong>: Used since 2017</li>
                            <li><strong>Babel</strong>: Used since 2017</li>
                            <li><strong>TailwindCss</strong>: Used since 2019</li>
                            <li><strong>Inertia.js</strong>: Used since 2019</li>
                        </ul>
                    </div>

                    <div class="w-1/3 m-2 text-center bg-yellow-100 rounded flex-grow p3">
                        <h4 class="text-xl text-bold pt-3">Automated Testing</h4>
                        <ul class="no-disc">
                            <li><strong>PHPUnit</strong>: Used since 2016</li>
                            <li><strong>Laravel Dusk</strong>: Used since 2017</li>
                        </ul>
                    </div>

                    <div class="w-1/3 m-2 text-center bg-yellow-100 rounded flex-grow p-3">
                        <h4 class="text-xl text-bold pt-3">Misc.</h4>
                        <ul class="no-disc">
                            <li><strong>WordPress</strong>: Used since 2012</li>
                            <li><strong>Laravel Cashier</strong>: Used since 2015</li>
                            <li><strong>PHP Storm (IDE)</strong>: Used since 2016</li>
                            <li><strong>Laravel Forge</strong>: Used since 2017</li>
                            <li><strong>Laravel Spark</strong>: Used since 2017</li>
                            <li><strong>Laravel Valet</strong>: Used since 2018</li>
                        </ul>
                    </div>

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
