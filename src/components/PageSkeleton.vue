<template>
	<!--
    This component is the Suspense fallback shown while lazy-loaded
    route components are being fetched/imported.
  -->
	<main class="mx-auto max-w-5xl px-6 py-16">
		<!-- Simulated page header skeleton -->
		<div class="mb-12 space-y-4">
			<div class="skeleton h-4 w-24" />
			<div class="skeleton h-10 w-2/3" />
			<div class="skeleton h-4 w-1/3" />
		</div>

		<!-- Simulated post card skeletons -->
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="n in 6"
				:key="n"
				class="rounded-xl border border-ink-100 bg-white p-6 space-y-3">
				<div class="skeleton h-4 w-3/4" />
				<div class="skeleton h-3 w-full" />
				<div class="skeleton h-3 w-5/6" />
				<div class="skeleton h-3 w-1/2" />
			</div>
		</div>
	</main>
</template>
