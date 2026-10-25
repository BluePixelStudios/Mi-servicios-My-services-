
let selectedPlan = null;

// Mostrar el año actual en el pie de página.
document.getElementById("year").textContent =
    new Date().getFullYear();

// Guardar el plan elegido.
function choosePlan(name, price) {
    selectedPlan = {
        name: name,
        price: price
    };

    document.getElementById("selection").textContent =
        "Plan elegido: " + name + " — $" + price + " USD";

    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
}

// Botón para consultar el proyecto.
function contactMe() {
    if (!selectedPlan) {
        alert("¡Primero elige uno de nuestros planes!");

        document.getElementById("precios").scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    const message =
        "Hola, me interesa el plan " + selectedPlan.name +
        " de $" + selectedPlan.price +
        " USD. Me gustaría conversar sobre mi proyecto.";

    alert(
        message +
        "\n\nEsta es una demostración. Añade tus datos de contacto " +
        "para que tus clientes puedan enviarte su solicitud."
    );
}
