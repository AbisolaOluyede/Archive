<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { AlertCircle, ArrowLeft, Home } from "lucide-vue-next";

const router = useRouter();
</script>

<template>
	<div
		class="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
		<!-- 404 display -->
		<p class="font-serif text-8xl font-bold text-stone-200 select-none">
			404
		</p>

		<div
			class="flex h-14 w-14 items-center justify-center rounded-full bg-stone-100">
			<AlertCircle class="h-7 w-7 text-stone-500" />
		</div>

		<div class="space-y-2">
			<h1 class="font-serif text-2xl font-semibold text-stone-900">
				Page not found
			</h1>
			<p class="max-w-sm text-sm text-stone-500">
				The page you're looking for doesn't exist or has been moved.
			</p>
		</div>

		<div class="flex gap-3">
			<button
				@click="router.back()"
				class="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
				<ArrowLeft class="h-4 w-4" />
				Go back
			</button>
			<RouterLink
				to="/"
				class="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700">
				<Home class="h-4 w-4" />
				Home
			</RouterLink>
		</div>
	</div>
</template>
