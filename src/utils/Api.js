import {getPhones, getFilters, makeSearch, getDetails, createPhone, getDetailsById, updatePhone, getPhonePhotos,
     addPhonePhoto, removePhonePhoto, addComment, getComments, deletePhone } from "./phonesMethods";
import { registration, authentication, uploadAvatar, getUsers, getUserOrders, changeRole } from "./usersMethods";
import { addItemToOrder, getOrder, resetItemFromOrder, closeOrder } from "./ordersMethods";
import { getFormData } from "./formMethods";

let Api = {};


export default {...Api, getPhones, getFilters, registration, makeSearch, authentication,
    getDetails, addItemToOrder, getOrder, resetItemFromOrder, getFormData, createPhone,
    getDetailsById, updatePhone, uploadAvatar, getUsers, closeOrder, getPhonePhotos, addPhonePhoto,
    removePhonePhoto, getUserOrders, changeRole, addComment, getComments, deletePhone };


