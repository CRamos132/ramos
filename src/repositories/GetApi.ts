function GetApi(url: string): string {
  console.log(process.env.NODE_ENV)
  console.log(process.env.GITHUB_TOKEN)
  console.log(process.env.TESTE_EV)
  return `Dale ${url}`
}

export default GetApi
