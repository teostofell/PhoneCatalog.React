import Axios from "axios";

const origin = "http://localhost:2436/";

function convertArrayToObject(items) {
    let result = {};

    for (let i of items) {
        result[i] = false;
    }

    return result;
}

function convertObjectToArray(items) {
    let result = [];

    for (let i in items) {
        if (items[i])
            result.push(i);
    }

    return result;
}


export async function getPhones(filter = null, itemsOnPage = 0, page = 0) {
    console.log(filter);

    let filterVM = { ...filter };

    // TODO: Check this code

    if (filterVM != null) {
        filterVM.Brand = convertObjectToArray(filterVM.Brand);
        filterVM.OS = convertObjectToArray(filterVM.OS);
    }

    if (filterVM.Price) {
        filterVM["Price[From]"] = filterVM.Price["From"];
        filterVM["Price[To]"] = filterVM.Price["To"];
    }
    if (filterVM.Storage) {
        filterVM["Storage[From]"] = filterVM.Storage["From"];
        filterVM["Storage[To]"] = filterVM.Storage["To"];
    }


    let { Storage, Price } = filterVM;

    console.log(filterVM, "1");


    var queries = { ...filterVM, ItemsOnPage: itemsOnPage, Page: page };

    let result = await Axios.get(origin + "api/phones", {
        params: queries
    })
        .then(response => {
            let totalItems = parseInt(response.headers["x-items-total-count"]);
            let totalPages = parseInt(response.headers["x-pages-total-count"]);
            return { items: response.data, totalItems, totalPages }
        }
        );
    console.log(result, "GET ITEMS");
    return result;
}

export async function getFilters() {
    let result = await Axios.get(origin + "api/filters")
        .then(response => {
            let items = response.data;

            items.Brand = convertArrayToObject(items.Brand);
            items.OS = convertArrayToObject(items.OS);

            console.log(items, "2");

            return { items: response.data }
        });

    return result;
}

export async function makeSearch(searchString) {
    let result = await Axios.get(origin + "api/phones", {
        params: {
            search: searchString
        }
    }).then(response => { return { items: response.data } });
    return result;
}

export async function getDetails(slug) {
    let result = await Axios.get(origin + "api/phones", {
        params: {
            slug: slug
        }
    }).then(response => { return { details: response.data } });
    return result;
}

export async function getDetailsById(id) {
    let result = await Axios.get(origin + `api/phones/${id}`, {
    }).then(response => { return response.data });
    return result;
}

export async function createPhone(data, token) {
    console.log(token, "From form create");

    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    let result = await Axios.post(origin + "api/phones", data, axiosConfig)
        .then(response => { return { details: response.data } });
    return result;
}

export async function updatePhone(data, token) {
    console.log(token, "From form");

    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    let result = await Axios.put(origin + `api/phones/${data.Id}`, data, axiosConfig)
        .then(response => { return { details: response.data } });
    return result;
}

export async function deletePhone(id, token) {
    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    let result = await Axios.delete(origin + `api/phones/${id}`, axiosConfig)
        .then(response => { return { details: response.data } });
    return result;
}

export async function getPhonePhotos(id) {
    let result = await Axios.get(origin + `api/photos`, {
        params: {
            phoneId: id
        }
    }).then(response => { return response.data });
    return result;
}

export async function addPhonePhoto(id, data) {
    console.log(data, "From form");

    let result = await Axios.post(origin + `api/photos/?phoneId=${id}`, data)
        .then(response => { return { details: response.data } });
    return result;
}

export async function removePhonePhoto(id) {
    let result = await Axios.delete(origin + `api/photos/${id}`)
        .then(response => { return { details: response.data } });
    return result;
}

export async function addComment(comment) {
    let result = await Axios.post(origin + "api/comments", comment)
        .then(response => response);

    return result;
}

export async function getComments(phoneId) {
    let result = await Axios.get(origin + `api/comments/${phoneId}`)
        .then(response => response);

    return result;
}