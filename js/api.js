$.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function (response) {
        const listadoPersonas = $('#listado-personas');
        const contenedorPersonas = $.map(response.data, function(person) {
            // Crear un div con la clase persona
            const div = $('<div>').addClass('persona');
            // Crear un div que contiene el nombre de la persona
            const nameDiv = $('<div>').addClass('persona-nombre').text(person.first_name + ' ' + person.last_name);
            // Crear un div que contiene el email de la persona
            const emailDiv = $('<div>').addClass('persona-email').text(person.email);
            // Crear un img que contiene la imagen de la persona
            const image = $('<img>').addClass('persona-imagen').attr('src', person.avatar);
            // Agregar la imagen, el nombre y el email al div con clase "persona"
            div.append(image, nameDiv, emailDiv);
            return div;
        });
        listadoPersonas.append(contenedorPersonas);
    }
});