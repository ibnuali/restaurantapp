import ApiService from "./ApiService";

export async function apiGetFood() {
    return ApiService.fetchData({
        url: "/food/",
        method: "GET",
    });
}

export async function apiGetFoodById(id) {
    return ApiService.fetchData({
        url: `/food/${id}`,
        method: "GET",
    });
}

export async function apiGetFoodByCategory(categoryId) {
    return ApiService.fetchData({
        url: `/food/category/${categoryId}`,
        method: "GET",
    });
}
