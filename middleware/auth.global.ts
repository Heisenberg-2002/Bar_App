export default defineNuxtRouteMiddleware((to) => {
    const token =  localStorage.getItem('token');

    if (token && to?.path === "login") {
      return navigateTo("/");
    }
    if (!token && to.path !== '/login') {
      return navigateTo('/login');
    }
  });