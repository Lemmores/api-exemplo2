const form = document.getElementById("form")
const uf = document.getElementById("uf")
const city = document.getElementById("cidade")

addEventListener("load", () => {
    carregarUF()
})


uf.addEventListener("change", () => {
    carregarMunicipios()
})


form.addEventListener("submit", (e) => {
    e.preventDefault()
})



function carregarUF() {
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    fetch(url).then(res => {
        return res.json()
    }).then(estados => {
        estados.forEach(estado => {
            let opt = criarNo("option")
            opt.innerHTML = estado.sigla
            opt.value = estado.sigla
            anexarNo(opt, uf)
        });
    })
}

function carregarMunicipios() {
    let sigla = uf.value
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + sigla + "/municipios"

    fetch(url).then(res => {
        return res.json()
    }).then(cidades => {
        cidades.forEach(cidade => {
            let opt = criarNo("option")
            opt.innerHTML = cidade.nome
            opt.value = cidade.nome
            anexarNo(opt, city)
        })
    })
}


function criarNo(el) {
    return document.createElement(el)
}

function anexarNo(elf, elp) {
    elp.appendChild(elf)
}
