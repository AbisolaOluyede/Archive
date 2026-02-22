<script setup>
import { RouterLink } from "vue-router";
import { Github, Twitter, Mail, Rss, ArrowRight } from "lucide-vue-next";

const author = {
	name: "Abisola",
	role: "Software Engineer & Technical Writer",
	bio: "I write about web development, software architecture, and the tools and patterns that make building for the web more enjoyable. Topics include Node.js, TypeScript, GraphQL, microservices, and everything in between.",
	location: "Nigeria",
	links: [
		{
			label: "GitHub",
			href: "https://github.com/oluwasetemi",
			icon: "github",
		},
		{
			label: "Twitter",
			href: "https://twitter.com/oluwasetemi",
			icon: "twitter",
		},
		{ label: "Email", href: "mailto:hello@oluwasetemi.dev", icon: "mail" },
		{ label: "RSS", href: "/rss.xml", icon: "rss" },
	],
};

const topics = [
	"Node.js",
	"TypeScript",
	"GraphQL",
	"REST APIs",
	"Microservices",
	"System Design",
	"Caching",
	"Observability",
	"Architecture Patterns",
	"Developer Tooling",
];
</script>

<template>
	<div class="mx-auto max-w-2xl">
		<!-- Page heading -->
		<div class="mb-10">
			<h1
				class="font-serif text-4xl font-bold tracking-tight text-stone-900">
				About
			</h1>
			<p class="mt-2 text-stone-500">The person behind the words.</p>
		</div>

		<!-- Author card -->
		<div class="rounded-xl border border-stone-100 bg-white p-8 shadow-sm">
			<!-- Avatar placeholder -->
			<div class="flex items-start gap-6">
				<div
					class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-stone-900 text-xl font-bold text-white">
					{{ author.name.charAt(0) }}
				</div>
				<div>
					<h2 class="font-serif text-2xl font-bold text-stone-900">
						{{ author.name }}
					</h2>
					<p class="mt-0.5 text-sm text-stone-500">
						{{ author.role }}
					</p>
					<p class="mt-0.5 text-xs text-stone-400">
						📍 {{ author.location }}
					</p>
				</div>
			</div>

			<!-- Bio -->
			<p class="mt-6 leading-relaxed text-stone-600">
				{{ author.bio }}
			</p>

			<!-- Social links -->
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					v-for="link in author.links"
					:key="link.label"
					:href="link.href"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-1.5 text-sm text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900">
					<Github v-if="link.icon === 'github'" class="h-3.5 w-3.5" />
					<Twitter
						v-else-if="link.icon === 'twitter'"
						class="h-3.5 w-3.5" />
					<Mail
						v-else-if="link.icon === 'mail'"
						class="h-3.5 w-3.5" />
					<Rss v-else-if="link.icon === 'rss'" class="h-3.5 w-3.5" />
					{{ link.label }}
				</a>
			</div>
		</div>

		<!-- Topics section -->
		<div class="mt-10">
			<h2 class="font-serif text-xl font-semibold text-stone-900">
				Topics I write about
			</h2>
			<div class="mt-4 flex flex-wrap gap-2">
				<span
					v-for="topic in topics"
					:key="topic"
					class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-600">
					{{ topic }}
				</span>
			</div>
		</div>

		<!-- This blog section -->
		<div class="mt-10">
			<h2 class="font-serif text-xl font-semibold text-stone-900">
				This blog
			</h2>
			<p class="mt-3 leading-relaxed text-stone-600">
				This is a personal blog where I document things I learn,
				patterns I find useful, and opinions I've developed through
				years of building software. Articles range from quick references
				to deep dives — whatever format best suits the topic.
			</p>
			<p class="mt-3 leading-relaxed text-stone-600">
				All content is written by me unless otherwise noted. If you spot
				an error or want to discuss something, feel free to reach out
				via any of the links above.
			</p>
		</div>

		<!-- CTA -->
		<div
			class="mt-12 flex items-center justify-between border-t border-stone-200 pt-6">
			<p class="text-sm text-stone-400">Thanks for stopping by.</p>
			<RouterLink
				to="/"
				class="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-700">
				Read the blog
				<ArrowRight class="h-4 w-4" />
			</RouterLink>
		</div>
	</div>
</template>
