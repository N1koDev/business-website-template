// Seleciona o botão pelo ID
var button = document.getElementById("myButton");
if (button) {
    button.addEventListener("click", function () {
        alert("TypeScript funcionando no Chrome!");
    });
}
else {
    console.error("Botão não encontrado!");
}
