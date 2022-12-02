import ApiService from "./ApiService";

export async function apiGetOrder() {
    return ApiService.fetchData({
        url: "/order/",
        method: "GET",
    });
}

export async function apiGetOrderById(id) {
    return ApiService.fetchData({
        url: `/order/${id}`,
        method: "GET",
    });
}

export async function apiCreateOrder(data) {
    return ApiService.fetchData({
        url: "/order/",
        method: "POST",
        data,
    });
}
