import { baseURL, repositoriesQuantity } from '../variables.js'

async function getActivityUser(userName) {
    const url = `${baseURL}${userName}/events?per_page=${repositoriesQuantity}`
    const response = await fetch(url)
    return await response.json()
}

export { getActivityUser }

const getEventType = data => data.filter(eventType => eventType.type == 'PushEvent')


async function getUserCommits(user) {
    getActivityUser(user).then(userData => {

        const commitsMessages = getEventType(userData).map(data => data.payload.commits[0].message)
        console.log(commitsMessages)
    })

}

async function getRepositoriesName(user) {
    getActivityUser(user).then(data => {
        
        const filterRepositoriesName = getEventType(data).map(repoName => repoName.repo.name)
        console.log(filterRepositoriesName)
    })
}

getRepositoriesName('diogokenway')
getUserCommits('diogokenway')

