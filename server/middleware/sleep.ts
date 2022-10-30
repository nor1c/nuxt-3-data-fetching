const sleep = () => new Promise((resolve) => setTimeout(resolve, 2500))

export default async () => {
  console.log('waiting for 2.5s');
  await sleep()
  return
}