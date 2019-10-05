<template>
    <main class="border-t-8 border-yellow-500">
        <header class="text-gray-100 p-3">
            <div class="social flex flex-row-reverse float-right">
                <a class="px-2 hover:text-yellow-500" href="https://github.com/MattStrauss"><i class="fab fa-github fa-fw"></i></a>
                <a class="px-2 hover:text-yellow-500" href="https://twitter.com/mstrauss_dev"><i class="fab fa-twitter fa-fw"></i></a>
                <a class="px-2 hover:text-yellow-500" href="https://laracasts.com/@mstrauss"><i class="fab fa-laravel fa-fw"></i></a>
            </div>
            <div class="flex flex-col">
                <i @click="toggleNavMenu" :class="[navMenuOpen ? 'fas fa-bars fa-fw fa-rotate-90 p-2 ml-2 cursor-pointer' : 'fas fa-bars fa-fw p-2 cursor-pointer']"></i>
                <inertia-link v-if="navMenuOpen" href="/" :class="($page.route === 'welcome') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'">
                    <i class="fa fa-home fa-fw"></i> Home </inertia-link>
                <inertia-link v-if="navMenuOpen" href="/contact" :class="($page.route === 'contact') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'">
                    <i class="fas fa-at fa-fw"></i> Contact</inertia-link>
            </div>

            </header>

        <article>
            <slot />
        </article>
    </main>
</template>

<script>
    import Layout from '@/Shared/Layout'

    export default {
        data() {
            return {
                navMenuOpen: false,
            }
        },
        methods: {
            toggleNavMenu() {
                this.navMenuOpen = ! this.navMenuOpen;
            }
        },
    }

</script>
