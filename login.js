const supabaseClient = supabase.createClient(
    "https://leuvfjvspbafrmdcvizs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxldXZmanZzcGJhZnJtZGN2aXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjY0ODIsImV4cCI6MjA5MjQ0MjQ4Mn0.DwdITrizQAYu33I3LifqaCRuzcy7L2OndfFqea48_tk"
);

async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password: senha
    });

    if (error) {
        alert("Erro: " + error.message);
    } else {
        alert("Login feito!");
        window.location.href = "index.html";
    }
}

function irCadastro() {
    window.location.href = "cadastro.html";
}

async function esqueciSenha() {
    const email = document.getElementById("email").value;

    if (!email) {
        alert("Digite seu email!");
        return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email);

    if (error) {
        alert("Erro: " + error.message);
    } else {
        alert("Email de recuperação enviado!");
    }
}