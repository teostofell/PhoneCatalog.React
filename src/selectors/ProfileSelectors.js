export const tokenSelector = (state) => state.login.token;
export const isLoggedSelector = (state) => state.login.isLogged;
export const isAdminSelector = (state) => state.login.user.IsAdmin;
export const isModalOpenSelector = (state) => state.login.isModalOpen;
export const avatarSelector = (state) => state.login.user.Avatar;
export const userIdSelector = (state) => state.login.user.Id;
export const userSelector = (state) => state.login.user;
export const ordersSelector = (state) => state.login.orders;