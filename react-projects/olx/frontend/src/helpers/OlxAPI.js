import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://alunos.b7web.com.br:501';

const apiFetchFile = async (endPoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.append('token', token);
        }
    }
    const res = await fetch("http://alunos.b7web.com.br:501"+endPoint, {
        method: "POST",
        body
    })
    const response = await res.json();

    if (response.notallowed) {
        window.location.href = '/signin';
        return;
    }
    return response;
}

const apiFetchPost = async (endPoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch("http://alunos.b7web.com.br:501"+endPoint, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const response = await res.json();

    if (response.notallowed) {
        window.location.href = '/signin';
        return;
    }
    return response;
}

const apiFetchGet = async (endPoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI + endPoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchPut = async (endPoint, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI + endPoint}?${qs.stringify(body)}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const response = await res.json();

    if (response.notallowed) {
        window.location.href = '/signin';
        return;
    }
    return response;
}

const OlxAPI = {

    login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/signin',
            { email, password }
        );
        return json;
    },

    register: async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state:stateLoc}
        );
        return json;
    },

    getStates: async () => {
        const json = await apiFetchGet('/states');
        return json.states;
    },

    getCategories: async () => {
        const json = await apiFetchGet('/categories');
        return json.categories;
    },

    getAds: async (options) => {
        const json = await apiFetchGet('/ad/list', options);
        return json;
    },

    getAd: async (id, other) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id, other}
        );
        return json;
    },
    addAd: async (fData) => {
        const json = await apiFetchFile(
            '/ad/add',
            fData
        );
        return json;
    },

    getUser: async () => {
        const json = await apiFetchGet(
            `/user/me`
        );
        return json;
    },

    changeUserInfo: async (body) => {
        const json = await apiFetchPut(
            'user/me',
            body
        );
        return json;
    }
}

export default () => OlxAPI;