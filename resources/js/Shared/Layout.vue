<template>
    <main class="border-t-8 border-yellow-500">
        <header class="flex flex-col text-gray-100 p-3">
            <i @click="toggleNavMenu" :class="[navMenuOpen ? 'fas fa-bars fa-fw fa-rotate-90 p-2 ml-2 cursor-pointer' : 'fas fa-bars fa-fw p-2 cursor-pointer']"></i>
            <inertia-link v-if="navMenuOpen" href="/" :class="($page.route === 'welcome') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'">
                <i class="fa fa-home fa-fw"></i> Home </inertia-link>
            <inertia-link v-if="navMenuOpen" href="/contact" :class="($page.route === 'contact') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'">
                <i class="fas fa-at fa-fw"></i> Contact</inertia-link>
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
