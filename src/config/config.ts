const proxyurl: string = "https://murmuring-ridge-43711.herokuapp.com/"
const URL: string =  "https://jobs.github.com/"

export const BASEURL: string = `${proxyurl}${URL}`

export const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json')
headers.append('Access-Control-Allow-Origin', '*')
headers.append('Access-Control-Allow-Credentials', 'true')
headers.append('GET', 'POST')