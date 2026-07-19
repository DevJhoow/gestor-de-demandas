const form = document.getElementById("formDemanda");
const lista = document.getElementById("listaDemandas");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const area = document.getElementById("area").value;
    const prioridade = document.getElementById("prioridade").value;

    const demanda = document.createElement("div");

    demanda.innerHTML = `
        <h3>${titulo}</h3>
        <p>Área: ${area}</p>
        <p>Prioridade: ${prioridade}</p>
        <hr>
    `;

    lista.appendChild(demanda);

    form.reset();

});
