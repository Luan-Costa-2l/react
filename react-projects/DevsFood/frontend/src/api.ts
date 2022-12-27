const BASE = 'https://api.b7web.com.br/devsfood/api';

type FieldType = {
    category?: string;
    page?: string;
    search?: string;
}

export default {
    getCategories: async () => {
        const res = await fetch(BASE + '/categories');
        const json = await res.json();
        return json;
    },

    getProducts: async (category: number, page: number, search: string) => {
        // GET /products ([search, page, category])
        let fields: FieldType = {};
        if (category !== 0) {
            fields.category = category.toString();
        }
        if (page > 0) {
            fields.page = page.toString();
        }
        if (search != '') {
            fields.search = search;
        }
        let queryString = new URLSearchParams(fields).toString()
        const res = await fetch(BASE + '/products?' + queryString);
        const json = res.json();
        return json;
    },
};