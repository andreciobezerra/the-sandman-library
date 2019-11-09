export const searchScreen = (() => {
  const load = () => $('#controlBoard').empty().load('components/searchScreen.html #searchScreen')
  const search = () => console.log('to implement')
  return { load, search }
})()