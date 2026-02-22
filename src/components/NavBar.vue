<template>
	<header
		class="sticky top-0 z-50 border-b border-ink-100 bg-cream/90 backdrop-blur-sm">
		<nav
			class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
			<!-- Logo / Home link -->
			<RouterLink
				to="/"
				class="font-display text-xl font-bold tracking-tight text-ink-800 transition-colors hover:text-ink-600">
				The Archive
			</RouterLink>

			<!-- Desktop nav links -->
			<ul class="flex items-center gap-8">
				<li v-for="link in navLinks" :key="link.to">
					<RouterLink
						:to="link.to"
						class="font-body text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
						active-class="text-ink-900 border-b-2 border-ink-700 pb-0.5"
						exact-active-class="text-ink-900">
						{{ link.label }}
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
];
</script>
