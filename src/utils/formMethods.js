import Axios from "axios";

const origin = "http://localhost:2436/";


export async function getFormData() {

    let cities = await Axios.get(origin + "api/cities")
        .then(response => {
            return response.data
        }
        );

    let resolutions = await Axios.get(origin + "api/screenresolutions")
        .then(response => {
            return response.data
        }
        );

    let os = await Axios.get(origin + "api/os")
    .then(response => {
        return response.data
    }
    );

    let brands = await Axios.get(origin + "api/brands")
    .then(response => {
        return response.data
    }
    );

    let roles = await Axios.get(origin + "api/roles")
    .then(response => {
        return response.data
    }
    );

    return { cities, resolutions, brands, os, roles };
}