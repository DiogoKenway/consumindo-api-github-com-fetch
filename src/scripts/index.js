import { getRepositories } from './services/repositories.js'
import { getUser } from './services/user.js'

import { user } from './objects/user.js'
import { screen } from './objects/screen.js'
import { getActivityUser } from './services/activity.js'


document.querySelector("#btn-search").addEventListener('click', () => {
    const nameSearch = document.querySelector('#input-search').value
    
    if (validateEmptyInput(nameSearch)) return

    getUserData(nameSearch)
    
})


document.querySelector('#input-search').addEventListener('keydown', e => {
    const userName = e.target.value
    const key = e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return

        getUserData(userName)
    }
})



async function getUserData(userName) {

    const userResponse = await getUser(userName)
    
    if (userResponse.message == "Not Found") {
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)
    const activityResponse = await getActivityUser(userName)

    user.setActivity(activityResponse)
    

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
    screen.renderActivity(user)
}



function validateEmptyInput(userName) {
    if (userName == "") {
        alert("Preencha O Campo!!!")
        return true
    }
}
