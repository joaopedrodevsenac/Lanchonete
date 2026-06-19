const SUPABASE_URL = "https://leuvfjvspbafrmdcvizs.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxldXZmanZzcGJhZnJtZGN2aXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjY0ODIsImV4cCI6MjA5MjQ0MjQ4Mn0.DwdITrizQAYu33I3LifqaCRuzcy7L2OndfFqea48_tk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function recuperar() {
    const email = document.getElementById("email").value;

    if (!email) {
        alert("Digite seu email!");
        return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: "trocar-senha.html"
    });

    if (error) {
        alert("Erro: " + error.message);
    } else {
        alert("Enviamos um link para o seu email!");
    }
}

function voltar() {
    window.location.href = "login.html";
}