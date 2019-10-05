<template>
    <layout>
        <div class="bg-gray-600 p-10 inset-y-auto object-center">
            <div class="text-center text-gray-100">
                <h2 class="text-3xl font-hairline text-yellow-500">Contact</h2>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
            </div>

            <form class="w-full max-w-lg ml-auto mr-auto mt-5 text-gray-100">
                <div v-if="success" class="bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 mb-4 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div class="py-1"><svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                            <p class="font-bold">Message Sent Successfully</p>
                            <p class="text-sm">I'll be in touch as soon as possible, thanks!</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-name">
                            Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                               v-model="fields.name" :class="(errors && errors.name) ? 'border-red-500' : ''"  id="grid-name" name="name" type="text" placeholder="Your Name">
                        <p v-if="errors && errors.name" class="text-red-400 text-xs italic">{{ errors.name[0] }}</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-email">
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               v-model="fields.email" :class="(errors && errors.email) ? 'border-red-500' : ''" id="grid-email" name="email" type="email" placeholder="you@company.com">
                        <p v-if="errors && errors.email" class="text-red-400 text-xs italic">{{ errors.email[0] }}</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-start">
                            Start Date
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    v-model="fields.start" :class="(errors && errors.start) ? 'border-red-500' : ''" name="start" id="grid-start">
                                <option> </option>
                                <option>ASAP</option>
                                <option>Within the next Month</option>
                                <option>Within the next Six months</option>
                                <option>Not sure...</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p v-if="errors && errors.start" class="text-red-400 text-xs italic">{{ errors.start[0] }}</p>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-work-type">
                            Work Type
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    v-model="fields.type" :class="(errors && errors.type) ? 'border-red-500' : ''" name="type" id="grid-work-type">
                                <option> </option>
                                <option>Full Stack</option>
                                <option>Backend</option>
                                <option>Frontend</option>
                                <option>Planning</option>
                                <option>Management</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p v-if="errors && errors.type" class="text-red-400 text-xs italic">{{ errors.type[0] }}</p>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-remote">
                            Remote?
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    v-model="fields.remote" :class="(errors && errors.remote) ? 'border-red-500' : ''" name="remote" id="grid-remote">
                                <option></option>
                                <option>Yes</option>
                                <option>Mostly</option>
                                <option>Some</option>
                                <option>No</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p v-if="errors && errors.remote" class="text-red-400 text-xs italic">{{ errors.remote[0] }}</p>
                    </div>

                </div>
                <div class="flex flex-wrap -mx-3 mb-6 mt-4">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-description">
                            Job Description
                        </label>
                        <textarea rows="8"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              v-model="fields.description" :class="(errors && errors.description) ? 'border-red-500' : ''" name="description" id="grid-description" placeholder="Some details you'd like to share about the job...">
                        </textarea>
                        <p v-if="errors && errors.description" class="text-red-400 text-xs italic">{{ errors.description[0] }}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button @click="clearForm" class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"  type="button">
                        Reset Form
                    </button>
                    <button @click="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                        Send
                    </button>
                </div>
            </form>

        </div>

        <div class="bg-gray-700 p-4 object-center text-center pb-20">
            <div class="md:ml-64 md:mr-64  pb-5">
                <p class="text-3xl text-yellow-500 font-hairline">Hire Me</p>
                <div class="w-16 border-t-4 border-yellow-500 text-center ml-auto mr-auto mt-3 mb-3">  </div>
                <p class="italic text-gray-100 text-hairline pt-2">
                    If you'd like to hire me to work on your project or application, please fill out the form above with the details so we can discuss it.
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
        data() {
            return {
                fields: {},
                errors: {},
                success: false,
                loaded: true,
            }
        },
        methods: {
            submit() {
                if (this.loaded) {
                    this.loaded = false;
                    this.success = false;
                    this.errors = {};
                    axios.post('/contact', this.fields).then(response => {
                        this.fields = {};
                        this.loaded = true;
                        this.success = true;
                    }).catch(error => {
                        this.loaded = true;
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors || {};
                        }
                    });
                }
            },
            clearForm() {
                this.fields = {};
                this.loaded = true;
                this.success = false;
                this.errors = {};
            }
        },
    }
</script>
