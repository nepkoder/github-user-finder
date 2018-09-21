 class GitHub {

    // pahile github ma gayera develoepr add banauneey ani clientID and clientSecret add garey !!
    constructor() {
        this.client_id = '5d2ab57210a53471d9a0';
        this.client_secret = '7d19b90c2e15cbb55819f0725c442a959c91fe16';
        
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