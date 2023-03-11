import useStates from "~~/storage/states";

const { getResult } = useStates();

export default defineNuxtRouteMiddleware((to, from) => {
  //limit access to result page. 
  if (to.path === "/result" && getResult.size === 0) {
    return navigateTo("/", { redirectCode: 301 });
  }
  return true;
});
