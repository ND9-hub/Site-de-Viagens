
function abrirModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
   
    document.getElementById('topo').style.marginTop="-150px";
    document.getElementById('modal_pai').style.zIndex="9999";
    document.getElementById('modal').style.marginTop="80px";
    
    document.getElementById('bagagem').style.marginLeft="-500px";
    document.getElementById('bagagem_pai').style.zIndex="-2";
    document.getElementById('hotel').style.marginLeft="-500px";
    document.getElementById('hotel_pai').style.zIndex="-2";
    document.getElementById('contato').style.marginLeft="-500px";
    document.getElementById('contato_pai').style.zIndex="-2";
    document.getElementById('redes_sociaiss').style.marginLeft="-500px";
    document.getElementById('redes_sociais_pai').style.zIndex="-2";
    
    document.getElementById('compra').innerHTML="";
}

document.getElementById('quantia_bagagens').value=3;

function efetuarCompra(){
    document.getElementById('compra').innerHTML="É necessário se cadastrar para efetuar a compra.";
}


function abrirBagagem(){
    document.getElementById('bagagem_pai').style.zIndex="99";
    document.getElementById('bagagem').style.marginLeft="-50px";
    
    document.getElementById('hotel').style.marginLeft="-500px";
    document.getElementById('hotel_pai').style.zIndex="-2";
    document.getElementById('contato').style.marginLeft="-500px";
    document.getElementById('contato_pai').style.zIndex="-2";
    document.getElementById('redes_sociaiss').style.marginLeft="-500px";
    document.getElementById('redes_sociais_pai').style.zIndex="-2";

    
}

function abrirHotel(){
    document.getElementById('hotel_pai').style.zIndex="99";
    document.getElementById('hotel').style.marginLeft="-50px";
    
    document.getElementById('bagagem').style.marginLeft="-500px";
    document.getElementById('bagagem_pai').style.zIndex="-2";
    document.getElementById('contato').style.marginLeft="-500px";
    document.getElementById('contato_pai').style.zIndex="-2";
    document.getElementById('redes_sociaiss').style.marginLeft="-500px";
    document.getElementById('redes_sociais_pai').style.zIndex="-2";
}

function abrirContato(){
    document.getElementById('contato_pai').style.zIndex="99";
    document.getElementById('contato').style.marginLeft="-50px";
    
    document.getElementById('bagagem').style.marginLeft="-500px";
    document.getElementById('bagagem_pai').style.zIndex="-2";
    document.getElementById('hotel').style.marginLeft="-500px";
    document.getElementById('hotel_pai').style.zIndex="-2";
    document.getElementById('redes_sociaiss').style.marginLeft="-500px";
    document.getElementById('redes_sociais_pai').style.zIndex="-2";
}

function abrirRedesSociais(){
    document.getElementById('redes_sociais_pai').style.zIndex="99";
    document.getElementById('redes_sociaiss').style.marginLeft="-50px";
    
    document.getElementById('bagagem').style.marginLeft="-500px";
    document.getElementById('bagagem_pai').style.zIndex="-2";
    document.getElementById('contato').style.marginLeft="-500px";
    document.getElementById('contato_pai').style.zIndex="-2";
    document.getElementById('hotel').style.marginLeft="-500px";
    document.getElementById('hotel_pai').style.zIndex="-2";
}

function fecharModal (){
    
    var count=1 ;
    var Time_counter=setInterval(timer, 1000) ;
    
    function timer() {
        count=count-1;
        
        if(count <=1){
            clearInterval(Time_counter);
            document.getElementById('modal_pai').style.zIndex="-2";
            return;
        }
        
        document.getElementById("timer").innerHTML=count;
    }
    
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0)";
    
    document.getElementById('topo').style.marginTop="0px";
    document.getElementById('modal').style.marginTop="-500px";
}

function fecharBagagem (){
    
   var count=1 ;
    var Time_counter=setInterval(timer, 1000) ;
    
    function timer() {
        count=count-1;
        
        if(count <=1){
            clearInterval(Time_counter);
            document.getElementById('bagagem_pai').style.zIndex="-2";
            return;
        }
        
        document.getElementById("timer").innerHTML=count;
    } document.getElementById('bagagem_pai').style.backgroundColor="rgba(0,0,0,0)";
    
    document.getElementById('bagagem').style.marginLeft="-500px";
}

function fecharHotel (){
    
   var count=1 ;
    var Time_counter=setInterval(timer, 1000) ;
    
    function timer() {
        count=count-1;
        
        if(count <=1){
            clearInterval(Time_counter);
            document.getElementById('hotel_pai').style.zIndex="-2";
            return;
        }
        
        document.getElementById("timer").innerHTML=count;
    } document.getElementById('hotel_pai').style.backgroundColor="rgba(0,0,0,0)";

    document.getElementById('hotel').style.marginLeft="-500px";
}

function fecharContato (){
    
   var count=1 ;
    var Time_counter=setInterval(timer, 1000) ;
    
    function timer() {
        count=count-1;
        
        if(count <=1){
            clearInterval(Time_counter);
            document.getElementById('contato_pai').style.zIndex="-2";
            return;
        }
        
        document.getElementById("timer").innerHTML=count;
    } document.getElementById('contato_pai').style.backgroundColor="rgba(0,0,0,0)";

    document.getElementById('contato').style.marginLeft="-500px";
}

function fecharRedesSociais (){
    
   var count=1 ;
    var Time_counter=setInterval(timer, 1000) ;
    
    function timer() {
        count=count-1;
        
        if(count <=1){
            clearInterval(Time_counter);
            document.getElementById('redes_sociais_pai').style.zIndex="-2";
            return;
        }
        
        document.getElementById("timer").innerHTML=count;
    } document.getElementById('redes_sociais_pai').style.backgroundColor="rgba(0,0,0,0)";

    document.getElementById('redes_sociaiss').style.marginLeft="-500px";
}

function entrar (){
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    
    document.getElementById('mensagem').innerHTML = "Cadastro efetuado com sucesso!";
    
    document.getElementById('mensagem').style.color='green';  
    document.getElementById('nome').style.border='solid 0.5px black';
    document.getElementById('telefone').style.border='solid 0.5px black';
    document.getElementById('email').style.border='solid 0.5px black';
}

function validar (){
    if (document.getElementById('nome').value == '' && document.getElementById('telefone').value == '' && document.getElementById('email').value == ''){
        document.getElementById('mensagem').innerHTML = "Por favor preencha os campos, pois são obrigatórios.";
        
        document.getElementById('mensagem').style.color='brown'; 
        document.getElementById('nome').style.border='solid 0.5px brown';
        document.getElementById('telefone').style.border='solid 0.5px brown';
        document.getElementById('email').style.border='solid 0.5px brown';
    
    } else if (document.getElementById('nome').value == '' && document.getElementById('telefone').value == ''){
        document.getElementById('nome').style.border='solid 0.5px brown';
        document.getElementById('telefone').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    } else if (document.getElementById('nome').value == '' && document.getElementById('email').value == ''){
        document.getElementById('nome').style.border='solid 0.5px brown';
        document.getElementById('email').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    } else if (document.getElementById('telefone').value == '' && document.getElementById('email').value == ''){
        document.getElementById('telefone').style.border='solid 0.5px brown';
        document.getElementById('email').style.border='solid 0.5px brown';
        document.getElementById('telefone').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    } else if (document.getElementById('nome').value == ''){
        document.getElementById('nome').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    } else if (document.getElementById('telefone').value == ''){
        document.getElementById('telefone').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    } else if (document.getElementById('email').value == ''){
        document.getElementById('email').style.border='solid 0.5px brown';
        document.getElementById('mensagem').innerHTML = "Por favor, preencha os campos, pois são obrigatórios.";
        document.getElementById('mensagem').style.color='brown';
    }
    
}

function abrirConteudo (){
    document.getElementById('conteudo_mais').style.display="block";
    document.getElementById('abrir_conteudo_pai').style.display="none";
    document.getElementById('fechar_conteudo_pai').style.display="flex";
}

function fecharConteudo (){
    document.getElementById('conteudo_mais').style.display="none";
    document.getElementById('abrir_conteudo_pai').style.display="flex";
    document.getElementById('fechar_conteudo_pai').style.display="none";
}