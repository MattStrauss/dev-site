<template>
    <main>
        <header class="flex justify-start p-3">
            <inertia-link href="/" :class="($page.route === 'welcome') ? 'text-yellow-700 p-2' : 'p-2'">Home </inertia-link>
            <inertia-link href="/about" :class="($page.route === 'about') ? 'text-yellow-700 p-2' : 'p-2'">About</inertia-link>
            <inertia-link href="/contact" :class="($page.route === 'contact') ? 'text-yellow-700 p-2' : 'p-2'">Contact</inertia-link>
        </header>

        <article>
            <slot />
        </article>
    </main>
</template>
