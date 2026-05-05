fetch("https://jsonplaceholder.typicode.com/users")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
    });


//---------------------------------------------------------------------------------


async function buscarUsuario(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    console.log(dados);
}
buscarUsuario();


//---------------------------------------------------------------------------------


async function carregarUsuarios(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    const container = document.getElementById("usuarios");
    usuarios.forEach(usuario => {
        container.innerHTML += `<p>${usuario.name} - ${usuario.email}</p>`
    });
}
carregarUsuarios();


//---------------------------------------------------------------------------------


async function carregarPosts(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resposta.json();
    const container = document.getElementById("posts");
    posts.slice(0,6).forEach(post => {
        container.innerHTML += `
        <div>
            <h3>${post.title}</h3>
            <p>${post.body} </p>
        </div>`;
    });
}
carregarPosts();


//---------------------------------------------------------------------------------


//exercício
async function carregarPosts2() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await resposta.json();
        const container = document.getElementById("posts2");

        container.innerHTML = "";

        posts.slice(0, 6).forEach(post => {
            container.innerHTML += `
                <div class="post-card">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar posts:", error);
    }
}
carregarPosts2();


//---------------------------------------------------------------------------------


//async function buscarDados(){
//    try{
//        const resposta = await fetch("https://api.exemplo.com/dados");
//        const dados = await resposta.json();
//        console.log(dados);
//    }catch(erro){
//        console.log("Erro ao buscar API");
//    }
//}
//buscarDados();


//---------------------------------------------------------------------------------


async function buscarUsuarios(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    console.log(dados);
}


//---------------------------------------------------------------------------------


async function enviarDados() {
    const novoUsuario = {
        name: "João Silva",
        email: "joao.silva@example.com"
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUsuario)
    });

    const usuarioCriado = await resposta.json();
    console.log(usuarioCriado);
}
enviarDados();


//---------------------------------------------------------------------------------


async function atualizarUsuario(){
    const usuarioAtualizado = {
        id: 1,
        name: "João Silva",
        email: "joao.silva@example.com"
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuarioAtualizado)
    });

    const usuarioAtualizadoResult = await resposta.json();
    console.log(usuarioAtualizadoResult);
}
atualizarUsuario();


//---------------------------------------------------------------------------------


async function atualizarParcialUsuario(){
    const usuarioParcialAtualizado = {
        name: "João Silva",
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuarioParcialAtualizado)
    });

    const usuarioParcialAtualizadoResult = await resposta.json();
    console.log(usuarioParcialAtualizadoResult);
}
atualizarParcialUsuario();


//---------------------------------------------------------------------------------


async function excluirUsuario() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    });

    if(resposta.ok){
        console.log("Usuário excluído com sucesso");
    }else{
        console.log("Erro ao excluir usuário");
    }
}
excluirUsuario();