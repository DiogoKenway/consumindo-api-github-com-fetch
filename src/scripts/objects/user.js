const user = {
    avatarURL: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    activityList : [],
    following: 0,
    followers:0,

    setInfo (gitHubUser) {
        this.avatarURL = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setRepositories (repositories) {
        this.repositories = repositories
    },

    setActivity (userActivity) {
        this.activityList  = userActivity
    }

}

export { user }