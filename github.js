 class GitHub {

    // pahile github ma gayera develoepr add banauneey ani clientID and clientSecret add garey !!
    constructor() {
        this.client_id = '';
        this.client_secret = '';
        
    }

    async getUserAndRepos(user) {
        const profileResponse = await fetch('https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}');

        const reposResponse = await fetch('https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}');
        
        const profile = await profileResponse.json();
        const respos = await reposResponse.json();
        return {
            profile,
            respos
        }
    }

}