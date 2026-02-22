import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://api.oluwasetemi.dev",
	headers: {
		"Content-Type": "application/json",
	},
});

export const postsApi = {
	/**
	 * Fetch all posts with optional pagination
	 * @param {Object} params - Query params: page, limit
	 */
	getAll(params = {}) {
		return apiClient.get("/posts", { params });
	},

	/**
	 * Fetch a single post by its ID
	 * @param {string} id - Post UUID
	 */
	getById(id) {
		return apiClient.get(`/posts/${id}`);
	},

	/**
	 * Fetch a single post by its slug
	 * @param {string} slug - Post slug
	 */
	getBySlug(slug) {
		return apiClient.get(`/posts/slug/${slug}`);
	},

	/**
	 * Create a new post
	 * @param {Object} payload - Post data
	 */
	create(payload) {
		return apiClient.post("/posts", payload);
	},

	/**
	 * Update an existing post
	 * @param {string} id - Post UUID
	 * @param {Object} payload - Fields to update
	 */
	update(id, payload) {
		return apiClient.patch(`/posts/${id}`, payload);
	},

	/**
	 * Delete a post
	 * @param {string} id - Post UUID
	 */
	remove(id) {
		return apiClient.delete(`/posts/${id}`);
	},
};

export const getPosts = (params) => postsApi.getAll(params);

export const getPostById = async (id) => {
	const response = await postsApi.getById(id);
	return response.data;
};
