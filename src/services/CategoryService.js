import ApiService from "./ApiService";

export async function apiGetCategories() {
    return ApiService.fetchData({
        url: "/category/",
        method: "GET",
    });
}

export async function apiGetCategoryById(id) {
    return ApiService.fetchData({
        url: `/categories/${id}`,
        method: "GET",
    });
}