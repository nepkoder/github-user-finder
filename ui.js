class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // resultant github information to user
    showProfile(user) {
        console.log(user);

        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_bank" class="btn bnt-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public Repository: ${user.public_repos}</span>
        <span class="badge badge-primary">Public Gits: ${user.public_gists}</span>
        <span class="badge badge-primary">Followers: ${user.followers}</span>
        <span class="badge badge-primary">Following: ${user.following}</span>
        </br></br>

        <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>

        </div>
        </div>
        </div>

        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // display user repository
    showRepos(repos) {
        var output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
            </div>
            </div>
            </div>
            `;
        });

        // output repos
        document.getElementById('repos').innerHTML = output;
    }

// showing alert message to user on html page
    showAlert(message, className) {
        // create div 
        const div = document.createElement('div');
        // add class to div
        div.className = className;

        // add text to that div
        div.appendChild(document.createTextNode(message));

        // get parent
        const constainer = document.querySelector('.searchSection');

        // get search box
        const search = document.querySelector('.search');

        // insert alert
        container.insertBefore(div, search);

        // timout after 4 sec
        setTimeout( () => {
            this.clearAlert();
        }, 4000);
    }


    // clear alert message 
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

// clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}