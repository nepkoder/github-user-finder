// initize github obj
GitHub github = new GitHub();

// also initize ui obj
UI ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');

// search input event 
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        // fetch user ie make http call here
        github.getUser(userText).then(data => {
            console.log(data);

            if(data.profile.message == 'Not Found') {
                // user not fould code or alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // profile display code
                ui.showProfile(data.profile);
            }
        })

        // console.log(userText);
    } else {
        // clear profile
        ui.clearProfile();
    }
})