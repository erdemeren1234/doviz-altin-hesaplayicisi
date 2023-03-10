export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/result" && from.path !== "/") {
    return navigateTo("/", { redirectCode: 301 });
  }
  return true;
});
