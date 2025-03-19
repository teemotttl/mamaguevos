document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerform");
    const loginForm = document.getElementById("loginform");
    const userNameSpan = document.getElementById("user-name");
    const userEmailSpan = document.getElementById("user-email");
    const logoutButton = document.getElementById("logout");

    // Cadastro do usuário
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let username = document.getElementById("newUsername").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("newPassword").value;

            let user = {
                username: username,
                email: email,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user));
            alert("Cadastro realizado com sucesso!");

            window.location.href = "index.html"; // Redireciona para o login
        });
    }

    // Login do usuário
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                alert("Login bem-sucedido!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "perfil.html"; // Redireciona para a página de perfil
            } else {
                alert("Usuário ou senha incorretos!");
            }
        });
    }

    // Exibir dados do usuário no perfil
    if (userNameSpan && userEmailSpan) {
        let storedUser = JSON.parse(localStorage.getItem("user"));
        let isLoggedIn = localStorage.getItem("loggedIn");

        if (storedUser && isLoggedIn === "true") {
            userNameSpan.textContent = storedUser.username;
            userEmailSpan.textContent = storedUser.email;
        } else {
            alert("Você precisa estar logado para acessar essa página!");
            window.location.href = "index.html"; // Redireciona para o login
        }
    }

    // Logout do usuário
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            alert("Você saiu da conta!");
            window.location.href = "index.html"; // Voltar para login
        });
    }
});