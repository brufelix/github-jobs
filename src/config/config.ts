const URL: string =  "https://jobs.github.com/"
const proxyurl: string = "https://cors-anywhere.herokuapp.com/"

<<<<<<< HEAD
export const BASEURL: string = `${URL}`
=======
export const BASEURL: string = `${proxyurl}${URL}`
>>>>>>> 3c8d60214016a8c21fae92405bbeb759cb8b604e

export const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json')
headers.append('Access-Control-Allow-Origin', '*')
headers.append('Access-Control-Allow-Credentials', 'true')
headers.append('GET', 'POST')