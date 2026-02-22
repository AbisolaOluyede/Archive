<template>
	<slot v-if="!hasError" />

	<div
		v-else
		class="flex flex-col items-center justify-center py-24 px-6 text-center">
		<AlertTriangle class="mb-4 h-12 w-12 text-amber-500" />
		<h2 class="font-display text-2xl font-bold text-ink-800 mb-2">
			Something went wrong
		</h2>
		<p class="font-body text-ink-500 mb-6 max-w-md">
			{{ errorMessage }}
		</p>
		<button
			class="inline-flex items-center gap-2 rounded-lg bg-ink-800 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink-700"
			@click="reset">
			<RefreshCw class="h-4 w-4" />
			Try again
		</button>
	</div>
</template>

<script setup>
import { ref, onErrorCaptured } from "vue";
import { AlertTriangle, RefreshCw } from "lucide-vue-next";

const hasError = ref(false);
const errorMessage = ref("");

onErrorCaptured((err) => {
	hasError.value = true;
	errorMessage.value = err?.message || "An unexpected error occurred.";
	return false; // stop propagation
});

function reset() {
	hasError.value = false;
	errorMessage.value = "";
}
</script>
