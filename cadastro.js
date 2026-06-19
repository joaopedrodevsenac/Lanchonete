const SUPABASE_URL = "https://leuvfjvspbafrmdcvizs.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxldXZmanZzcGJhZnJtZGN2aXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjY0ODIsImV4cCI6MjA5MjQ0MjQ4Mn0.DwdITrizQAYu33I3LifqaCRuzcy7L2OndfFqea48_tk"
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function cadastrar() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password: senha
    });

    if (error) {
        alert("Erro: " + error.message);
        return;
    }

    const user = data.user;

    const { error: erroInsert } = await supabaseClient
        .from("clientes")
        .insert([
            {
                id: user.id,
                nome,
                cpf,
                email,
                telefone
            }
        ]);

    if (erroInsert) {
        alert("Erro ao salvar dados: " + erroInsert.message);
        return;
    }

    alert("Conta criada!");
    window.location.href = "login.html";
}