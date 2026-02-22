<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { getPosts } from "@/api/posts.js";
import { CalendarDays, Eye, ArrowRight } from "lucide-vue-next";

// Layout Components
import NavBar from "@/components/NavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

const response = await getPosts({ page: 1, limit: 12 });

const posts = ref(response.data?.data ?? []);
const meta = ref(response.data?.meta ?? {});

// Helpers
function formatDate(dateStr) {
	if (!dateStr) return null;
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

function getExcerpt(post) {
	if (post.excerpt) return post.excerpt;
	if (post.content) {
		const stripped = post.content.replace(/<[^>]+>/g, "");
		return stripped.length > 160 ? stripped.slice(0, 160) + "…" : stripped;
	}
	return "No preview available.";
}
</script>

<template>
	<div>
		<NavBar />

		<main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
			<div class="mb-10">
				<h1
					class="font-serif text-4xl font-bold tracking-tight text-stone-900">
					Latest Posts
				</h1>
				<p class="mt-2 text-stone-500">
					{{ meta.total ?? posts.length }} articles published
				</p>
			</div>

			<div
				v-if="posts.length === 0"
				class="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
				<p class="text-stone-400">No posts found.</p>
			</div>

			<div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<article
					v-for="post in posts"
					:key="post.id"
					class="group flex flex-col rounded-xl border border-stone-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
					<span
						class="mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
						:class="
							post.status === 'PUBLISHED'
								? 'bg-green-50 text-green-700'
								: 'bg-amber-50 text-amber-700'
						">
						{{ post.status }}
					</span>

					<RouterLink :to="`/posts/${post.id}`" class="flex-1">
						<h2
							class="font-serif text-lg font-semibold leading-snug text-stone-900 transition-colors group-hover:text-stone-600">
							{{ post.title }}
						</h2>
						<p class="mt-2 text-sm leading-relaxed text-stone-500">
							{{ getExcerpt(post) }}
						</p>
					</RouterLink>

					<div
						class="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
						<div
							class="flex items-center gap-3 text-xs text-stone-400">
							<span
								v-if="post.publishedAt"
								class="flex items-center gap-1">
								<CalendarDays class="h-3 w-3" />
								{{ formatDate(post.publishedAt) }}
							</span>
							<span class="flex items-center gap-1">
								<Eye class="h-3 w-3" />
								{{ Math.max(0, post.viewCount ?? 0) }}
							</span>
						</div>
						<RouterLink
							:to="`/posts/${post.id}`"
							class="flex items-center gap-1 text-xs font-medium text-stone-700 transition-colors hover:text-stone-900">
							Read <ArrowRight class="h-3 w-3" />
						</RouterLink>
					</div>
				</article>
			</div>
		</main>

		<AppFooter />
	</div>
</template>
