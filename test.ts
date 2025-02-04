// Seleciona o botão pelo ID
const button = document.getElementById("myButton");

if (button) {
    button.addEventListener("click", () => {
        alert("TypeScript funcionando no Chrome!");
    });
} else {
    console.error("Botão não encontrado!");
}
