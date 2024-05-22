export default defineNuxtRouteMiddleware((to, from) => {
    debugger
    const token =  localStorage.getItem('token');
    if (!token && to.path !== '/login') {
      return navigateTo('/login');
    }
  });