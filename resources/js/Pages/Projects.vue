<template>
    <layout>
        <div class="bg-gray-600 p-6 inset-y-auto object-center">
            <div class="text-center text-gray-100">
                <h2 class="text-3xl font-hairline text-yellow-500">Projects</h2>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3"> </div>
            </div>
            <div v-if="projectsFilteredBy" class="text-center">
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2">
                   <i class="fas fa-filter fa-fw"></i> "{{ projectsFilteredBy }}" <i @click="clearFilter" class="fas fa-times-circle parent hover:text-red-500"></i></span>
            </div>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4">
                <div v-for="project in filteredProjects" class="max-w-lg rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto border-gray-700 border-2">
                    <img class="w-full" :src="project.img">
                    <div class="px-6 py-4 bg-gray-300">
                        <div class="font-bold text-xl mb-2 text-yellow-600"> <a :href="project.link" class="hover:text-yellow-700" v-text="project.name"></a></div>
                        <p class="text-gray-700 text-base" v-text="project.description"></p>
                        <p v-if="project.demo" class="mt-4 text-gray-700">
                            <a :href="project.demo" class="hover:text-yellow-700"> <i class="fas fa-video"></i> Demo</a>
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <span v-for="skill in project.skills" class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">
                            <a @click="filterProjects(skill)" class="hover:text-yellow-400 cursor-pointer" > #{{skill}}</a></span>
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
        data() {
            return {
                projectsFilteredBy: '',
                projects: [
                    {
                        'name': 'MenuCrunch',
                        'skills': ['laravel', 'alpineJS', 'tailwindCss'],
                        'link': 'https://menucrunch.com',
                        'img': '/images/menucrunch.png',
                        'demo' : 'https://screencast-o-matic.com/watch/crf0X6VelBg',
                        'description': "Allows restaurants to quickly and easily get their menu online. This app also helps restaurants accept and streamline online orders and has powerful analysis tools."
                    },
                    {
                        'name': 'SWENG Scheduler',
                        'skills': ['laravel', 'reactJS', 'd3js', 'tailwindCss'],
                        'link': 'https://psuswengscheduler.com/',
                        'img': '/images/sweng.png',
                        'demo' : 'https://screencast-o-matic.com/watch/crjQbsVjDJT',
                        'description': "A tool to help students find course information and get course recommendations for the Software Engineering curriculum at the Pennsylvania State University."
                    },
                    {
                        'name': 'Swift Grocery List',
                        'skills': ['laravel', 'vueJS', 'bootstrap4'],
                        'link': 'https://swiftgrocerylist.com',
                        'img': '/images/sgl.png',
                        'demo' : null,
                        'description': "A web application that helps you create a grocery shopping list fast. Built with Laravel and Vue.js. Includes recipes, drag-and-drop aisle sorting and much more."
                    },
                    {
                        'name': 'Tetris',
                        'skills': ['java'],
                        'link': 'https://github.com/MattStrauss/tetris',
                        'img': '/images/tetris.png',
                        'demo' : 'https://screencast-o-matic.com/watch/crjDIXVj4DV',
                        'description': "A java version of the classic game of Tetris. Includes a preview of the upcoming piece and a score keeper."
                    },
                    {
                        'name': 'My Dev Site',
                        'skills': ['laravel', 'inertiaJS', 'vueJS', 'tailwindCss'],
                        'link': 'https://mattstrauss.dev',
                        'img': '/images/devsite.png',
                        'demo' : null,
                        'description': "The site you are looking at right now! It was built with the amazing Inertia.js framework, which I highly recommend checking out."
                    },
                    {
                        'name': 'Dresser',
                        'skills': ['laravel', 'larevel livewire', 'tailwindCss'],
                        'link': 'https://github.com/MattStrauss/dresser',
                        'img': '/images/dresser.png',
                        'demo' : null,
                        'description': "A quick and (relatively) dirty mock project to try out Laravel Livewire. The idea was to create a UI that would typically require a decent amount of JS, but to only use Livewire and write zero JS. " +
                            "This is heavily inspired by Caleb Porzio's Guest Spotlight episode on Laracasts where he built an interactive table. It's open source on github, so check it out!"
                    },
                    {
                        'name': 'Tic-Tac-Toe',
                        'skills': ['assembly'],
                        'link': 'https://github.com/MattStrauss/tictactoe',
                        'img': '/images/tic_tac_toe.png',
                        'demo' : 'https://screencast-o-matic.com/watch/crfUlvVea9L',
                        'description': "An assembly version of Tic-Tac-Toe whereas you compete against the machine. The machine is semi-intelligent, which considering this program was written in assembly, was not easy to pull off."
                    },
                ]
            }
        },
        computed:
            {
                filteredProjects() {
                    if (this.projectsFilteredBy) {
                        return this.projects.filter((project) => project.skills.includes(this.projectsFilteredBy));
                    }
                    else {
                        return this.projects;
                    }
                }
            },
        methods:
            {
                filterProjects(skill) {
                    this.projectsFilteredBy = skill;
                },
                clearFilter() {
                    this.projectsFilteredBy = '';
                },
            },
    }
</script>
