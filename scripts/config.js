function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerId;
    configOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    configOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    // quitar los stilos aplicados cuando hubo un error y se sale de ese configuracion
    divInputPlayerNameElement.classList.remove('error');
    playerNameInputElement.value = '';
    configErrorsElement.textContent = '';
}

function savePlayerConfig(event) {
    // no dejar que se recargue la pagina al enviar el formulario
    event.preventDefault();

    // intantiaring (toma el elemento form)
    const formaData = new FormData(event.target);
    // extraer la data del input con nombre playername (tric() quita los espacios en blanco de los extremos del string)
    const enteredUserName = formaData.get('playername').trim();

    // validamos si el string está vacio con ayuda de js, ya que este toma un string vacio como falso (falsy and trully concept)
    if (!enteredUserName){
        divInputPlayerNameElement.classList.add('error');
        configErrorsElement.textContent = 'Please enter a valid name!';
        // no continuar con el metodo (stop the execute of the function)
        return;
    }

    // save name player
    players[editedPlayer - 1].name = enteredUserName;

    if(players[0].name === players[1].name){
        divInputPlayerNameElement.classList.add('error');
        configErrorsElement.textContent = 'Both player names can not be the same!';
        return;
    }

    const updatedPlayerDataElment = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElment.children[1].textContent = enteredUserName.toUpperCase();

    closePlayerConfig();
}


