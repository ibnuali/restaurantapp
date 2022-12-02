import ApiService from "./ApiService";

export async function apiGetOrderItems() {
    return ApiService.fetchData({
        url: "/order-item/",
        method: "GET",
    });
}

export async function apiGetOrderItemsById(id) {
    return ApiService.fetchData({
        url: `/order-item/${id}`,
        method: "GET",
    });
}

export async function apiCreateOrderItem(data) {
    return ApiService.fetchData({
        url: "/order-item/",
        method: "POST",
        data,
    });
}
