import { baseURL, repositoriesQuantity } from '../variables.js'

async function getActivityUser(userName) {
    const url = `${baseURL}${userName}/events?per_page=${repositoriesQuantity}`
    const response = await fetch(url)
    return await response.json()
}

export { getActivityUser }


