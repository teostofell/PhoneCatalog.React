import Axios from "axios";

const origin = "http://localhost:2436/";


export async function getOrder(userId){

    let result =  await Axios.get(origin + "api/orders", {
        params: {
            userId: userId
        }})
    .then(response => {
                return response.data
            }
        );

    return result;
}


export async function addItemToOrder(item){

    var body = item;
    let result =  await Axios.post(origin + "api/orderitems", body)
        .then(response => {
                    return { items: response.data }
                }
            );

    return result;
}


export async function resetItemFromOrder(itemId){
    let result = await Axios.delete(origin + `api/orderitems/${itemId}`)
        .then((response) => {
            return response;
        })
    return result;
}

export async function closeOrder(orderId){
    let result = await Axios.delete(origin + `api/orders/${orderId}`)
        .then((response) => {
            return response;
        })
    return result;
}


