const screen = {
    userProfile: document.querySelector('.profile-data'),
    userActivity: document.querySelector('.activity'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                     <img src="${user.avatarURL}" alt="Foto De Perfil do Usuario">
                                     <div class="data">
                                        <h1>${user.name || 'Não Possui nome cadastrado 🙁'}</h1>
                                        <p>${user.bio || 'Não Possui Bio Cadastrada 😢'}</p>
                                     </div>
                                    </div>

                                    <div class="following-followers">
                                        <div class="followers">
                                            <div class="icon-followers">👥 Seguidores</div> 
                                            <p class="numbers-followers">${user.followers}</p>
                                        </div>
                                        <div class="following">
                                            <div class="icon-following">👥 Seguindo</div> 
                                            <p class="numbers-following">${user.following}</p>
                                        </div>
                                    </div>
                                    <div class="line"></div>`

        let repositoriesItens = ''
        user.repositories.forEach( repo => {
            
            repositoriesItens +=
            `<li><a href="${repo.html_url}" target="_blank">${repo.name}
            <div class="info-repositories">
                <span>🍴${repo.forks_count}</span>
                <span>⭐${repo.stargazers_count}</span>
                <span>👀${repo.watchers_count}</span>
                <span>📚${repo.language || 'Sem Linguagem'}</span>
                </div>
                </a></li>`
        })

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>
                                            <div class="line"></div>`
        }
    },

    renderActivity(user) {
        
        let recentActivities = ''
        this.userActivity.innerHTML = ''

        user.activityList.forEach( activity =>  {
            
            if (activity.type == 'PushEvent') {
    
                        recentActivities += `
                                    <li>
                                        <strong>${activity.repo.name}:</strong> 
                                        <span>${activity.payload.commits[0].message}</span>
                                    </li>`

                }
                

            })
            
            if (user.activityList.length > 0) {

                this.userActivity.innerHTML = `<div class="user-activity">
                                                    <h2>Atividade</h2>
                                                    <ul>${recentActivities}</ul>
                                                </div>`
            } else {
                recentActivities = 'SEM ATIVIDADES RECENTES'
                this.userActivity.innerHTML  = `<h2>${recentActivities}<h2>`
            }
    },


    renderNotFound() {
        this.userProfile.innerHTML = `<h2>USUÁRIO NÃO ENCONTRADO...</h2>`
    }
}

export { screen }