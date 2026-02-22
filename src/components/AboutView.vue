<script setup>
import { RouterLink } from "vue-router";
import { BookOpen, Github } from "lucide-vue-next";
</script>

<template>
	<div class="mx-auto max-w-2xl">
		<div class="flex items-center gap-3 mb-8">
			<div
				class="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900">
				<BookOpen class="h-6 w-6 text-white" />
			</div>
			<div>
				<h1 class="font-serif text-3xl font-bold text-stone-900">
					Archive
				</h1>
				<p class="text-sm text-stone-500">A blog application</p>
			</div>
		</div>

		<div
			class="prose prose-stone font-serif leading-relaxed text-stone-700">
			<p>
				This application was built as part of the AltSchool of Frontend
				Engineering Assessment 3. It demonstrates a practical
				implementation of Vue 3, Vue Router, and modern frontend
				tooling.
			</p>
			<h2
				class="font-serif text-xl font-semibold text-stone-900 mt-8 mb-3">
				Tech stack
			</h2>
			<ul class="space-y-1 text-sm text-stone-600">
				<li>
					⚡ <strong>Vue 3</strong> with Composition API &
					<code>&lt;script setup&gt;</code>
				</li>
				<li>
					🛣️ <strong>Vue Router 4</strong> with lazy-loaded routes
				</li>
				<li>🎨 <strong>Tailwind CSS v4</strong> for styling</li>
				<li>🧱 <strong>shadcn/ui patterns</strong> via Radix Vue</li>
				<li>✨ <strong>Lucide Vue Next</strong> for icons</li>
				<li>🌐 <strong>Axios</strong> for API requests</li>
				<li>
					⚠️ <strong>Error Boundary</strong> via
					<code>onErrorCaptured</code>
				</li>
				<li>
					💤 <strong>Suspense</strong> for async component loading
				</li>
			</ul>
		</div>

		<div class="mt-10">
			<RouterLink
				to="/"
				class="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700">
				Browse posts
			</RouterLink>
		</div>
	</div>
</template>
