 
 // status da oficina
  function atualizarStatusOficina() {
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hora = agora.getHours();
    const badge = document.getElementById('status-oficina');
    const badgeForm = document.getElementById('status-oficinaForm');
  
    let estaAberto = false;

    // Segunda (1) a Sexta (5): das 08h às 17h59 (fecha às 18h)
    if (diaSemana >= 1 && diaSemana <= 5) {
      if (hora >= 8 && hora < 18) {
        estaAberto = true;
      }
    } 
    // Sábado (6): das 08h às 11h59 (fecha às 12h)
    else if (diaSemana === 6) {
      if (hora >= 8 && hora < 12) {
        estaAberto = true;
      }
    }

    // Atualiza o texto e a cor da etiqueta
    if (estaAberto) {
      badge.textContent = '🟢 Aberto agora';
      badge.classList.add('aberto');
      badge.classList.remove('fechado');
      badgeForm.textContent = '🟢 Aberto agora';
      badgeForm.classList.add('aberto');
      badgeForm.classList.remove('fechado');
    } else {
      badge.textContent = '🔴 Fechado no momento';
      badge.classList.add('fechado');
      badge.classList.remove('aberto');
      badgeForm.textContent = '🔴 Fechado no momento';
      badgeForm.classList.add('fechado');
      badgeForm.classList.remove('aberto');
    }
  }

  // Executa assim que a página carrega
  atualizarStatusOficina();

 
 
 
 // Get the modal
let modal = document.getElementById("myModal")



// Get the button that opens the modal
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0]

// When the user clicks on the button, open the modal

 btn.onclick = function() {
  modal.style.display = "block"
 }
 btn1.onclick = function() {
   modal.style.display = "block"
 }
btn2.onclick = function() {
  modal.style.display = "block"
}
 btn3.onclick = function() {
  modal.style.display = "block"
 }
 btn4.onclick = function() {
  modal.style.display = "block"
 }
 btn5.onclick = function() {
  modal.style.display = "block"
 }
 btn6.onclick = function() {
  modal.style.display = "block"
 }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

function dados() {
 

  let nome = window.document.getElementById('nome').value.toUpperCase()
    let cpf = window.document.getElementById('cpf').value.toUpperCase()
    let email = window.document.getElementById('email').value.toUpperCase()
    let telefone = window.document.getElementById('telefone').value.toUpperCase()
    let cep = window.document.getElementById('cep').value.toUpperCase()
    let placa = window.document.getElementById('placa').value.toUpperCase()
    let select = window.document.getElementById('servicos')
   let servicos = select.options[select.selectedIndex].text
   let mensagem = window.document.getElementById('mensagem').value

   
    console.log(nome)
    console.log(cpf)
    console.log(email)
    console.log(telefone)
    console.log(cep)
    console.log(placa)
    console.log(servicos)
    console.log(mensagem)
    
       
    let url = ("https://api.whatsapp.com/send?phone=5513996184428&text=%0A Entrando em contato através do site %0A Nome: " + nome + "%0A CPF: " + cpf + "%0A Email: " + email + "%0A Telefone: " + telefone + "%0A Cep: " + cep + "%0A Placa: " + placa  + "%0A Serviços: "  + servicos + "%0A Mensagem: "  + mensagem )
    
    window.open(url)
    console.log(url)
    
       }


    