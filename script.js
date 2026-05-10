function openExperience(evt, expName) {
    // Esconde todos os conteúdos de experiência
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("exp-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe "active" de todos os botões
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra o conteúdo atual e adiciona a classe "active" ao botão que abriu a aba
    document.getElementById(expName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
