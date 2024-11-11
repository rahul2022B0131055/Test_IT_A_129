const username = document.querySelector('#username');
const password = document.querySelector("#password");
const button = document.querySelector(".login-btn");
const login = document.querySelector("#login-container");
const git = document.querySelector("#fetch-git");
const main_body = document.getElementById("main-body");
const gitlist = document.querySelector(".gitlist");
const select_sort=document.querySelector("#select-sort")

const user = {
    username: "admin",
    password: "admin"
};

main_body.style.display = "none";

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value === user.username) {
        if (password.value === user.password) {
            login.style.display = "none";
            main_body.style.display = "block";
        } else {
            alert("Wrong password");
        }
    } else {
        alert("No user exists");
    }
});

git.addEventListener("click", async () => {
    let data = await fetch("https://api.github.com/users");
    let jsonData = await data.json();

    gitlist.innerHTML = "";
    jsonData.slice(0, 10).forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.login;
        gitlist.appendChild(listItem);
    });
});
