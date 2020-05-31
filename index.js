class Client{
    
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class UI{
    addClient(client){
        var tableClients = document.getElementById("addRows"),
        elemento = document.createElement("tr");

        /* Add a row a the table */
        elemento.innerHTML = `
            <td>${client.username}</th>
            <td>${client.email}</th>
            <td>${client.password}</th>
            <td>
                <button class="btn btn-danger btn-block" name="delete">Delete</button>
            </td>
        `;

        tableClients.appendChild(elemento);
    }
    
    resetForm(){
        document.getElementById("form-clients").reset();
    }

    deleteClient(elemento){
        if(elemento.name ===  'delete'){
            elemento.parentElement.parentElement.remove();
            this.showMessage("Client Remove Successfully", "info");
        }
    }

    showMessage(message, cssClass){
        var div = document.createElement("div");
        div.className = "alert alert-"+cssClass;
        div.appendChild(document.createTextNode(message));

        /* Showing in DOM */
        var container = document.querySelector(".container");
        var app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    }
}


/* Captura de los eventos del DOM */

/* Escuchando el evento del boton Accept */
document.getElementById("form-clients").addEventListener("submit", function(e){
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var client = new Client(username, email, password);

    var ui = new UI();
    ui.addClient(client);
    ui.resetForm();
    ui.showMessage("Client Add Successfully ", "success");
    e.preventDefault();
});

/* Escuchando el evento de boton Delete */
document.getElementById("addRows").addEventListener("click", function(e){
    var ui = new UI();
    ui.deleteClient(e.target);
});

