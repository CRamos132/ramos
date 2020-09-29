function GetApi(url: string): string {
  console.log(process.env.GITHUB_TOKEN)
  return `Dale ${url}`
}

export default GetApi
