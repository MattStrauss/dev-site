<template>
    <layout>
          <div class="bg-gray-600 p-10 inset-y-auto object-center">
            <img class="h-40 w-40 rounded-full mx-auto border-2 border-yellow-500" src="/images/avatar_alt.jpg">
              <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
              <div class="text-center text-gray-100 font-thin">
                  <h2 class="text-lg">Matt Strauss</h2>
                  <div class="text-yellow-500">Full Stack Developer</div>
                  <div>Pennsylvania, USA</div>
                  <div>PHP, Laravel, Vue, Automated Testing</div>
              </div>
          </div>

        <div class="object-cover">

            <div class="bg-gray-700 p-4 object-center text-center pb-20">

                <div class="md:ml-40 md:mr-40  pb-5">
                    <p class="text-3xl text-yellow-500 font-hairline">About</p>
                    <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
                    <p class="italic text-gray-100 text-hairline pt-2">
                        I'm a freelance web developer with experience in a range of technologies, see below. While I typically work as a full stack developer, my skills are
                        stronger on the backend. But, with the advent of new tools like <a href="https://inertiajs.com/" class="underline hover:text-yellow-500"> Inertia.js</a>
                        and <a href="https://tailwindcss.com/" class="underline hover:text-yellow-500">TailwindCSS</a>, the frontend is becoming more and more fun. I am keenly
                        interested in open source software and am a Laravel Core contributor. <strong>I also firmly believe that automated testing saves lives</strong>.
                        In addition to being a developer, I am currently studying Software Engineering at the Pennsylvania State University to gain deeper insights and a
                        more rigorous understanding of core software concepts, architecture, etc.
                    </p>
                </div>

                <div class="md:ml-40 md:mr-40 pt-5 text-center">
                    <h2 class="text-3xl text-yellow-500 font-hairline">Familiar Tech</h2>
                    <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>

                    <div class="flex content-start flex-wrap text text-gray-600 pt-2">

                        <div class="w-1/3 m-2 bg-yellow-500 rounded flex-grow content-center p-3">
                            <h4 class="text-xl text-bold pt-2">Backend</h4>
                            <ul class="no-disc">
                                <li><strong>PHP</strong>: Used since 2006</li>
                                <li><strong>SQL</strong>: Used since 2006</li>
                                <li><strong>MySQL</strong>: Used since 2006</li>
                                <li><strong>Laravel</strong>: Used since 2015</li>
                                <li><strong>NoSQL</strong>: Used since 2018</li>
                            </ul>
                        </div>

                        <div class="w-1/3 m-2 bg-gray-600 rounded flex-grow p-3">
                            <h4 class="text-xl text-yellow-500 text-bold pt-3">Frontend</h4>
                            <ul class="no-disc text-yellow-500">
                                <li><strong>Javascript</strong>: Used since 2006</li>
                                <li><strong>HTML</strong>: Used since 2006</li>
                                <li><strong>CSS</strong>: Used since 2006</li>
                                <li><strong>JQuery</strong>: Used since 2007</li>
                                <li><strong>Bootstrap</strong>: Used since 2014</li>
                                <li><strong>Angular.js</strong>: Used since 2016</li>
                                <li><strong>Vue.js</strong>: Used since 2017</li>
                                <li><strong>Laravel Mix</strong>: Used since 2017</li>
                                <li><strong>Babel</strong>: Used since 2017</li>
                                <li><strong>TailwindCss</strong>: Used since 2019</li>
                                <li><strong>Inertia.js</strong>: Used since 2019</li>
                            </ul>
                        </div>

                        <div class="w-1/3 m-2 bg-gray-600 rounded flex-grow p-3">
                            <h4 class="text-xl text-yellow-500 text-bold pt-3">Automated Testing</h4>
                            <ul class="no-disc text-yellow-500">
                                <li><strong>PHPUnit</strong>: Used since 2016</li>
                                <li><strong>Laravel Dusk</strong>: Used since 2017</li>
                            </ul>
                        </div>

                        <div class="w-1/3 m-2 bg-yellow-500 rounded flex-grow p-3">
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
