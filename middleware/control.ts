import useStates from "~~/storage/states";

const { getResult } = useStates();

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/result" && from.path !== "/" && getResult.size === 0) {
    return navigateTo("/", { redirectCode: 301 });
  }
  return true;
});
