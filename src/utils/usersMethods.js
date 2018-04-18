import Axios from "axios";


const origin = "http://localhost:2436/";

export async function registration(user) {
    if (user.Password !== user.ConfirmPassword)
        throw {
            response: {
                data: {
                    Message: "Passwords does not match",
                    Password: "OMG"
                }
            }
        }
    let result = await Axios.post(origin + "api/users", user)
        .then(response => response);
    return result;
}

export async function authentication(user) {

    var params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', user.Email);
    params.append('password', user.Password);

    let token = await Axios.post(origin + "token", params)
        .then(response => response.data.access_token);

    let userInfo = await Axios.get(origin + "api/users", {
        params: {
            email: user.Email
        }
    })
        .then(response => response.data);

    console.log({ token, user: userInfo }, "Authentication");
    return { token, user: userInfo };
}

export async function uploadAvatar(userId, file) {
    let result = await Axios.post(origin + `api/photos/?userId=${userId}`, file)
        .then(response => response);

    return result;
}

export async function getUsers(filter = null, itemsOnPage = 0, page = 0){
    let result =  await Axios.get(origin + "api/users")
        .then(response => {
                    return response.data
                }
            );
    console.log(result, "GET ITEMS");
    return result;
}

export async function getUserOrders(userId){
    let result = await Axios.get(origin + `api/orders/${userId}`)
        .then((response) => {
            return response;
        })
        
    return result;
}

export async function changeRole(userId, roleId){
    let result = await Axios.put(origin + `api/roles/${roleId}/?userId=${userId}`)
        .then((response) => response);

    return result;
}