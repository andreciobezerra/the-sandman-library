export const mainScreen = (() => {
  const load = () => $('#controlBoard').empty().load('components/mainScreen.html #mainScreen')
  const listBooks = () => console.log('to implement')
  return { load,listBooks }
})()

