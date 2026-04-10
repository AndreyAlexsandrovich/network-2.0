export const FetchProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Ошибка API");
        const data = await response.json();
        return data.products || [];  // Возвращаем только массив товаров
    } catch (error) {
        console.error("Products API error:", error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Товар не найден");
        return await response.json();
    } catch (error) {
        console.error("Product API error:", error);
        return null;
    }
};