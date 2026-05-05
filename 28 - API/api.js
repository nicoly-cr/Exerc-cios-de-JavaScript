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