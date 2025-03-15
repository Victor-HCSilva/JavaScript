console.log('ola, mundo')
const btn = document.querySelector("#btn")

const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/Victor-HCSilva")

    xhr.onload = () => { // Usando onload para sucesso, on error para tratar erros
        if (xhr.status === 200) {
            try {
                const res = JSON.parse(xhr.responseText)
                const name = res.name
                const avatar = res.avatar_url
                const followers = res.followers
                const blog_url = res.blog

                const avatar_el = document.createElement("img")
                avatar_el.setAttribute("src", avatar)
                avatar_el.setAttribute("width", "128")
                avatar_el.style = "border-radius:100%;"
                const name_el = document.createElement("h1")
                name_el.textContent = name; // Usando textContent para segurança

                const followers_el = document.createElement("p")
                followers_el.innerText = `Seguidores: ${followers}`

                const blog_el = document.createElement("a")
                blog_el.setAttribute('href', blog_url)
                blog_el.innerText = blog_url

                document.body.appendChild(avatar_el)
                document.body.appendChild(name_el);
                document.body.appendChild(followers_el)
                document.body.appendChild(blog_el)
                
                
            } catch (error) {
                console.error("Erro ao analisar o JSON:", error)
            }
        } else {
            console.error("Erro na requisição:", xhr.status)
        }
    }

    xhr.onerror = () => {
        console.error("Erro na requisição")
    }

    xhr.send(null)
    
}

btn.addEventListener("click", loadData)