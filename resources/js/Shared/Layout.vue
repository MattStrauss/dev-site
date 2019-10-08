<template>
    <main class="border-t-8 border-yellow-500">
        <header class="text-gray-100 p-3">
            <div class="social flex flex-row-reverse float-right pt-1">
                <a class="px-2 hover:text-yellow-500" href="https://github.com/MattStrauss"><i class="fab fa-github fa-fw"></i></a>
                <a class="px-2 hover:text-yellow-500" href="https://twitter.com/mstrauss_dev"><i class="fab fa-twitter fa-fw"></i></a>
                <a class="px-2 hover:text-yellow-500" href="https://laracasts.com/@mstrauss"><i class="fab fa-laravel fa-fw"></i></a>
            </div>

            <div class="flex">
                <i @click="toggleNavMenu" class="fas fa-bars fa-fw p-2 mr-2 cursor-pointer"></i>
                <inertia-link v-if="navMenuOpen" href="/" class="p-1 hover:text-yellow-500 ml-1 mr-1" :class="($page.route === 'welcome') ? 'text-yellow-500' : ''">
                    <i class="fa fa-home fa-fw"></i><span class="uppercase tracking-wide text-xs font-bold"> Home</span></inertia-link>
                <inertia-link v-if="navMenuOpen" href="/contact" class="p-1 hover:text-yellow-500" :class="($page.route === 'contact') ? 'text-yellow-500' : ''">
                    <i class="fas fa-mail-bulk fa-fw"></i><span class="uppercase tracking-wide text-xs font-bold"> Contact</span></inertia-link>
            </div>

            </header>

        <article>
            <slot />
        </article>
        <div class="bg-gray-800 p-4 text-center text-yellow-500 text-xs" v-html="getCopyright"></div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                navMenuOpen: false,
                title: this.$page.title,
            }
        },
        methods: {
            toggleNavMenu() {
                this.navMenuOpen = ! this.navMenuOpen;
            }
        },
        computed: {
            getCurrentYear() {
                let currentDate = new Date();
                return currentDate.getFullYear();
            },
            getCopyright () {
                return "&copy;"+ this.getCurrentYear + " Matt Strauss. All Rights Reserved.";
            }
        },
        watch: {
            title: {
                immediate: true,
                handler(title) {
                    document.title = title;
                },
            },
        },
    }
</script>
