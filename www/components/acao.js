$(document).on("click","#calcular",function(){

var resultado;
var peso;
var altura;
var idade;
var sexo;


peso = $("#peso").val();
altura = $("#altura").val();
idade = $("#idade").val();
sexo = $("#sexo").val();

      if(sexo == 'masculino'){
       $(resultado).val(66+(13.7*peso)+(5.0 * altura)(6.8*idade));
       $("#visor").val(resultado);
  }
    if(sexo=='feminino'){
       $(resultado).val(665 + (9.6 * peso) + (1.8*altura) - (4.7*idade));
       $("#visor").val(resultado);
  }




}); 