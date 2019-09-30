<template>
    <layout>
        <div class="object-cover">

            <div class="bg-white rounded-lg p-4 object-center text-center border-2 border-yellow-500">

                <div class="md:ml-40 md:mr-40  pb-5">
                    <p class="text-3xl text-yellow-700 font-hairline border-b">About Me</p>
                    <p class="italic text-gray-600 text-thin pt-2">
                        I'm a free lance web developer with experience in a range of technologies, see below. While I typically work as a full stack developer, my skills are
                        stronger on the backend. But, with the advent of new tools like <a href="https://github.com/inertiajs" class="underline hover:text-yellow-700"> Inertia.js</a>
                        and <a href="https://tailwindcss.com/" class="underline hover:text-yellow-700">TailwindCSS</a>, the frontend is becoming more and more fun. I am keenly
                        interested in open source software and am a Laravel Core contributor. <strong>I also firmly believe that automated testing saves lives</strong>.
                        In addition to being a developer, I am currently studying Software Engineering at the Pennsylvania State University to gain deeper insights and a
                        more rigorous understanding of core software concepts, architecture, etc.
                    </p>
                </div>

                <div class="md:ml-40 md:mr-40 pt-5 text-center">
                    <h2 class="text-3xl text-yellow-700 font-hairline border-b">Familiar Technologies</h2>

                    <div class="flex content-start flex-wrap text-sm text-gray-700 pt-2">

                        <div class="w-1/3 m-2 bg-yellow-100 rounded flex-grow p-3">
                            <h4 class="text-xl text-bold pt-2">Backend</h4>
                            <ul class="no-disc">
                                <li><strong>PHP</strong>: Used since 2006</li>
                                <li><strong>SQL</strong>: Used since 2006</li>
                                <li><strong>MySQL</strong>: Used since 2006</li>
                                <li><strong>Laravel</strong>: Used since 2015</li>
                                <li><strong>NoSQL</strong>: Used since 2018</li>
                            </ul>
                        </div>

                        <div class="w-1/3 m-2 bg-yellow-100 rounded flex-grow p-3">
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

                        <div class="w-1/3 m-2 bg-yellow-100 rounded flex-grow p3">
                            <h4 class="text-xl text-bold pt-3">Automated Testing</h4>
                            <ul class="no-disc">
                                <li><strong>PHPUnit</strong>: Used since 2016</li>
                                <li><strong>Laravel Dusk</strong>: Used since 2017</li>
                            </ul>
                        </div>

                        <div class="w-1/3 m-2 bg-yellow-100 rounded flex-grow p-3">
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
