<template>
    <main class="border-t-8 border-yellow-500">
        <header class="flex flex-row-reverse text-gray-100 p-3">
            <inertia-link href="/contact" :class="($page.route === 'contact') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'"><i class="fas fa-at fa-fw"></i></inertia-link>
            <inertia-link href="/" :class="($page.route === 'welcome') ? 'text-yellow-500 p-2' : 'p-2 hover:text-yellow-500'"><i class="fa fa-home fa-fw"></i> </inertia-link>
        </header>

        <article>
            <slot />
        </article>
    </main>
</template>
