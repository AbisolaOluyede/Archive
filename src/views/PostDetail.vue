<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getPostById } from "@/api/posts.js";
import { ArrowLeft, CalendarDays, Eye, Tag, User } from "lucide-vue-next";

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const router = useRouter();

const post = await getPostById(props.id);

const tags = computed(() => {
	if (!post.tags) return [];
	if (Array.isArray(post.tags)) return post.tags;
	return post.tags
		.split(",")
		.map((t) => t.trim())
		.filter(Boolean);
});

function formatDate(dateStr) {
	if (!dateStr) return null;
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function renderContent(content) {
	if (!content) return "No content available.";
	return content;
}
</script>

<template>
	<div class="mx-auto max-w-2xl">
		<div class="mb-8 flex items-center gap-4">
			<button
				@click="router.back()"
				class="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900">
				<ArrowLeft class="h-4 w-4" />
				Back
			</button>
			<span class="text-stone-200">/</span>
			<RouterLink
				to="/"
				class="text-sm text-stone-500 transition-colors hover:text-stone-900">
				Home
			</RouterLink>
		</div>

		<div class="mb-4 flex flex-wrap items-center gap-2">
			<span
				class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
				:class="
					post.status === 'PUBLISHED'
						? 'bg-green-50 text-green-700'
						: 'bg-amber-50 text-amber-700'
				">
				{{ post.status }}
			</span>
			<span
				v-if="post.category"
				class="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600">
				<Tag class="h-3 w-3" />
				{{ post.category }}
			</span>
		</div>

		<h1
			class="font-serif text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
			{{ post.title }}
		</h1>

		<div
			class="mt-4 flex flex-wrap items-center gap-4 text-sm text-stone-400">
			<span v-if="post.author" class="flex items-center gap-1">
				<User class="h-4 w-4" />
				{{ post.author }}
			</span>
			<span v-if="post.publishedAt" class="flex items-center gap-1">
				<CalendarDays class="h-4 w-4" />
				{{ formatDate(post.publishedAt) }}
			</span>
			<span class="flex items-center gap-1">
				<Eye class="h-4 w-4" />
				{{ Math.max(0, post.viewCount ?? 0) }} views
			</span>
		</div>

		<div v-if="tags.length" class="mt-4 flex flex-wrap gap-2">
			<span
				v-for="tag in tags"
				:key="tag"
				class="rounded-full border border-stone-200 px-3 py-0.5 text-xs text-stone-500">
				#{{ tag }}
			</span>
		</div>

		<hr class="my-8 border-stone-200" />

		<p
			v-if="post.excerpt"
			class="mb-6 font-serif text-lg leading-relaxed text-stone-600 italic">
			{{ post.excerpt }}
		</p>

		<div
			v-if="post.content"
			class="prose prose-stone max-w-none font-serif leading-relaxed text-stone-700"
			v-html="renderContent(post.content)" />
		<p v-else class="text-stone-400 italic">
			This post has no content yet.
		</p>

		<div
			class="mt-12 flex items-center justify-between border-t border-stone-200 pt-6">
			<button
				@click="router.back()"
				class="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
				<ArrowLeft class="h-4 w-4" />
				Previous page
			</button>
			<RouterLink
				to="/"
				class="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700">
				All posts
			</RouterLink>
		</div>
	</div>
</template>
