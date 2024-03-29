<template>
    <layout>
          <div class="bg-gray-600 p-10 inset-y-auto object-center">
            <img class="h-40 w-40 rounded-full mx-auto border-2 border-yellow-500" src="/images/avatar_alt_3.jpg">
              <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
              <div class="text-center text-gray-100 font-thin">
                  <h2 class="text-lg">Matt Strauss</h2>
                  <div class="text-yellow-500">Full Stack Developer</div>
                  <div>Pennsylvania, USA</div>
                  <div>PHP, Laravel, Vue, Automated Testing</div>
              </div>
          </div>

        <div class="object-cover">

            <div class="bg-gray-700 p-4 object-center text-center pb-10">

                <div class="md:ml-40 md:mr-40  pb-5">
                    <p class="text-3xl text-yellow-500 font-hairline">About</p>
                    <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
                    <p class="italic text-gray-100 text-hairline pt-2">
                        I'm a freelance web developer with experience in a range of technologies, see below. While I typically work as a full stack developer, my skills are
                        stronger on the backend. But, with the advent of new tools like <a href="https://inertiajs.com/" class="underline hover:text-yellow-500"> Inertia.js</a>
                        and <a href="https://tailwindcss.com/" class="underline hover:text-yellow-500">TailwindCSS</a>, the frontend is becoming more and more fun. I am keenly
                        interested in open source software and <strong> a long time user/fan of automated testing</strong>.
                        In addition to being a developer, I am currently studying Software Engineering at the Pennsylvania State University to gain deeper insights and a
                        more rigorous understanding of core software concepts, architecture, etc.
                    </p>
                </div>

                <div class="md:ml-40 md:mr-40 pt-5 text-center">
                    <h2 class="text-3xl text-yellow-500 font-hairline">Familiar With</h2>
                    <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>

                    <div class="flex content-start flex-wrap flex-col sm:flex-row text-gray-700 pt-2 content-center">

                        <div class="sm:w-1/3 w-auto border-2 border-gray-800 m-2 bg-gray-200 rounded flex-grow content-center p-3">
                            <div class="border-b-2 border-gray-600 mb-4">
                                <h4 class="text-3xl font-thin pt-2">Backend</h4>
                            </div>
                            <div class="px-6 py-4">

                                <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                                     v-for="skill in skills.backend" :key="skill">{{ skill }}
                                </span>

                            </div>
                        </div>

                        <div class="sm:w-1/3 w-auto border-2 border-gray-800 m-2 bg-gray-200 rounded flex-grow content-center p-3">
                            <div class="border-b-2 border-gray-600 mb-4">
                                <h4 class="text-3xl font-thin pt-2">Frontend</h4>
                            </div>
                            <div class="px-6 py-4">

                                <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                                      v-for="skill in skills.frontend" :key="skill">{{ skill }}
                                </span>

                            </div>
                        </div>

                        <div class="sm:w-1/3 w-auto border-2 border-gray-800 m-2 bg-gray-200 rounded flex-grow content-center p-3">
                            <div class="border-b-2 border-gray-600 mb-4">
                                <h4 class="text-3xl font-thin pt-2">Automated Testing</h4>
                            </div>
                            <div class="px-6 py-4">

                                <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                                      v-for="skill in skills.testing" :key="skill">{{ skill }}
                                </span>

                            </div>
                        </div>

                        <div class="sm:w-1/3 w-auto border-2 border-gray-800 m-2 bg-gray-200 rounded flex-grow content-center p-3">
                            <div class="border-b-2 border-gray-600 mb-4">
                                <h4 class="text-3xl font-thin pt-2">Miscellaneous </h4>
                            </div>
                            <div class="px-6 py-4">

                                 <span class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                                       v-for="skill in skills.misc" :key="skill">{{ skill }}
                                </span>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </layout>
</template>

<script>
    import Layout from '@/Shared/Layout';

    const skills =
        {
            'backend' : ['PHP', 'SQL', 'MySQL', 'Laravel', 'RubyOnRails', 'Ruby', 'Redis', 'C', 'C++', 'Java', 'Swift', 'Mips/Assembly', 'VHDL', 'Livewire'].sort(),
            'frontend' : ['HTML', 'Javascript', 'CSS', 'Tailwind', 'Bootstrap', 'Alpine.js', 'React.js', 'Vue.js', 'Inertia.js', 'Angular.js', 'Laravel Blade'].sort(),
            'testing' : ['PHPUnit', 'JUnit', 'Laravel Dusk', 'Codeception', 'Jest', 'Selenium'].sort(),
            'misc' : ['WordPress', 'Laravel Cashier', 'Laravel Nova', 'Laravel Forge', 'PHP Storm', 'Laravel Spark'].sort()
        };

    export default {
        components: {
            Layout,
        },
        data: function() {
            return {
                skills : skills,
            }
        }

    }
</script>
