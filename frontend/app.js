const resetForm = () => {
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}

function enviar(){
    const email = "gabriel.laco@aluno.senai.br"
    const senha = "1234"

    const emailpre = document.getElementById('email').value
    const senhapre = document.getElementById('senha').value

    if(emailpre === "" && senhapre === ""){
        alert("Preencher os campos vazios!")
    }else{
        if(email === emailpre && senha === senhapre){
            alert("Dados preenchidos corretamente")
        }else{
            alert("Email ou senha incorreta!")
        }
    }

}