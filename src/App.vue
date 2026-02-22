<template>
	<div class="min-h-screen bg-cream">
		<Suspense>
			<template #default>
				<RouterView v-slot="{ Component, route }">
					<Transition name="page" mode="out-in">
						<component :is="Component" :key="route.fullPath" />
					</Transition>
				</RouterView>
			</template>

			<template #fallback>
				<PageSkeleton />
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import PageSkeleton from "@/components/PageSkeleton.vue";
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;
}
.page-enter-from {
	opacity: 0;
	transform: translateY(8px);
}
.page-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}
</style>
