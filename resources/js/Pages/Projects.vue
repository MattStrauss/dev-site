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
            <div v-for="project in filteredProjects" class="max-w-lg rounded overflow-hidden bg-gray-200 mt-3 mb-3 shadow-lg mx-auto border-gray-700 border-2">
                <img class="w-full" :src="project.img">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-yellow-600"> <a :href="project.link" class="hover:text-yellow-700" v-text="project.name"></a></div>
                    <p class="text-gray-700 text-base" v-text="project.description"></p>
                </div>
                <div class="px-6 py-4">
                    <span v-for="skill in project.skills" class="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">
                        <a @click="filterProjects(skill)" class="hover:text-yellow-400 cursor-pointer" > #{{skill}}</a></span>
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
                        'name': 'Swift Grocery List',
                        'skills': ['laravel', 'vueJS', 'bootstrap4', 'html'],
                        'link': 'https://swiftgrocerylist.com',
                        'img': '/images/grocery.jpg',
                        'description': "A web application that helps you create a grocery shopping list fast. Built with Laravel and Vue.js. Includes recipes, drag-and-drop aisle sorting and much more."
                    },
                    {
                        'name': 'Other Project',
                        'skills': ['rails', 'reactJS', 'tailwind', 'html'],
                        'link': 'https://google.com',
                        'img': '/images/grocery.jpg',
                        'description': "Another project"
                    }
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
