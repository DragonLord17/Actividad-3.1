function funcionAlert(){
    alert("Hola Mundo!");
    
    alert("Soy el primer script");
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionMensaje(){
    var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
  alert(mensaje);
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionArregloSimple(){
    // Array que almacena los 12 meses del año

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Se muestra el nombre de cada mes
    alert(meses[0]);
    alert(meses[1]);
    alert(meses[2]);
    alert(meses[3]);
    alert(meses[4]);
    alert(meses[5]);
    alert(meses[6]);
    alert(meses[7]);
    alert(meses[8]);
    alert(meses[9]);
    alert(meses[10]);
    alert(meses[11]);
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionOperadores(){
    var valores = [true, 5, false, "hola", "adios", 2];

    // Cual de los 2 elementos de texto es mayor
    // Si el resultado es true, el primer texto es mayor
    var resultado = valores[3] > valores[4];
    alert(resultado);

    // Combinar valores booleanos
    var valor1 = valores[0];
    var valor2 = valores[2];

    // Obtener un resultado TRUE
    var resultado = valor1 || valor2;
    alert(resultado);

    // Obtener un resultado FALSE
    resultado = valor1 && valor2;
    alert(resultado);

    // Operaciones matemáticas
    var num1 = valores[1];
    var num2 = valores[5];

    var suma = num1 + num2;
    alert(suma);

    var resta = num1 - num2;
    alert(resta);

    var multiplicacion = num1 * num2;
    alert(multiplicacion);

    var division = num1 / num2;
    alert(division);

    var modulo = num1 % num2;
    alert(modulo);
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionEstructurasControl(){
    var numero1 = 5;
    var numero2 = 8;

    if(numero1 <= numero2) {
        alert("numero1 no es mayor que numero2");
    }
    if(numero2 >= 0) {
        alert("numero2 es positivo");
    }
    if(numero1 < 0 || numero1 != 0) {
        alert("numero1 es negativo o distinto de cero");
    }
    if(++numero1 < numero2) {
        alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionEntradaDatosCadenas(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = prompt("Introduce tu número de tu Indentificaci\u00f3n (sin la letra)");// \u00f3 para la ó acentuada en UNICODE
    var letra = prompt("Introduce la letra de tu Indentificaci\u00f3n (en may\u00fasculas)"); // \u00fa para la ú acentuada en UNICODE
    letra = letra.toUpperCase();

    if(numero < 0 || numero > 99999999) {
        alert("El número proporcionado no es válido");
    }
    else {
        var letraCalculada = letras[numero % 23];
        if(letraCalculada != letra) {
            alert("La letra o el n\u00famero proporcionados no son correctos");
    }
    else {
        alert("El n\u00famero de tu Indentificaci\u00f3n y su letra son correctos");
    }
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionFactorial(){
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
    var resultado = 1;

    for(var i=1; i<=numero; i++) {
        resultado *= i;
    }
    document.getElementById("factorial").innerHTML = "El factorial de ["+numero+"] es = "+resultado;
    
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionFuncionesBasicas(){
    var numero = prompt("Introduce un número entero");
          var resultado = parImpar(numero);
          alert("El número "+numero+" es "+resultado);

          function parImpar(numero) {
            if(numero % 2 == 0)   return "par";
            else   return "impar";
            }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionCadenas(){
    function info(cadena) {
        var resultado = "La cadena \""+cadena+"\" ";
        // Comprobar mayúsculas y minúsculas
        if(cadena == cadena.toUpperCase())
        resultado += " está formada sólo por mayúsculas";
        else if(cadena == cadena.toLowerCase())
            resultado += " está formada sólo por minúsculas";
        else
        resultado += " está formada por mayúsculas y minúsculas";
        return resultado;
    }

    alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
    alert(info("En un lugar de la mancha..."));
    alert(info("aprendiendo javascript..."));
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function funcionCadenasPalindromo(){
    function palindromo(cadena) {
        
        var resultado = "La cadena \""+cadena+"\" \n";

        // Pasar a minusculas la cadena
        var cadenaOriginal = cadena.toLowerCase();

        // Convertir la cadena en un array
        var letrasEspacios = cadenaOriginal.split("");

        // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
        var cadenaSinEspacios = "";
        for(i in letrasEspacios)
            if(letrasEspacios[i] != " ")
            cadenaSinEspacios += letrasEspacios[i];

        var letras = cadenaSinEspacios.split("");
        var letrasReves = cadenaSinEspacios.split("").reverse();

        // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
        var iguales = true;
        for(i in letras)
            if(letras[i] != letrasReves[i])
         iguales = false;


        if(iguales)
            resultado += " es un palíndromo";
        else
            resultado += " no es un palíndromo";
        return resultado;
    }

    document.getElementById("palindromo").innerHTML = palindromo("La ruta nos aporto otro paso natural");
    document.getElementById("nopalindromo").innerHTML = palindromo("Esta frase no se parece a ningun palindromo");
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function valida(campo){
			var bRet = false;
			if (campo.value == "")
				document.getElementById("rfc").innerHTML = "Faltan datos";
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					document.getElementById("rfc").innerHTML ="No tiene formato de RFC";
				else
					bRet = true;
			return bRet;
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

window.onload = function() {
  //Obtiene un elemento  del HTML a través de su id "información" para agregar mensajes
  var info = document.getElementById("informacion");

  // Obtiene el número de enlaces de la pagina a través de su tag "a"
  var enlaces = document.getElementsByTagName("a");

  // crea un mensaje para ser visualizado en el HTML:
  info.innerHTML = "Numero de enlaces = "+enlaces.length;

  // Direccion del penultimo enlace
  var mensaje = "El pen&uacute;ltimo enlace apunta a: "+enlaces[enlaces.length-2].href;

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;

  for(var i=0; i<enlaces.length; i++)
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
                contador++;

// agrega infomación al mensaje para ser visualizado en el HTML:
info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

// Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a"); // [2] para el tercer párrafo

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";

  var enlace = document.getElementById("enlace");
  enlace.className = "visible";

  var enlace1 = document.getElementById("enlace1");
  enlace.className = "oculto";

}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function muestraOculta(id) {
	  var elemento = document.getElementById('contenidos_'+id);
	  var enlace = document.getElementById('enlace_'+id);

	  if(elemento.style.display == "" || elemento.style.display == "block") {
	    elemento.style.display = "none";
	    enlace.innerHTML = 'Mostrar contenidos';
	  }
	  else {
	    elemento.style.display = "block";
	    enlace.innerHTML = 'Ocultar contenidos';
	  }
	}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/


function agregaLinea(){
    var oTbl = document.getElementById("tblUno");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);

	oCelda1.innerHTML = "Celda";
	oCelda2.innerHTML = 'Texto y campo ' +
	'<input type="text" name="campo"/>';
}

function eliminaLinea(){
    var oTbl = document.getElementById("tblUno");
    oTbl.deleteRow(1);
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

contador=3;
function anade() {
  var elemento = document.createElement("li");
  var lista = document.getElementById("lista");
  var nuevoElemento = "<li>Elemento "+(++contador)+"</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
* Función: muestra
* Objetivo: llena la información para el examen y muestra tabla y botón
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function muestra(sValor, oTbl, oElemento){
var nTabla=0, i=0;
var oLinea;
var oCeldaOpe, oCeldaRes, oCeldaCal;

var oCtrl;
var oCtrl2;
	if (isNaN(sValor))
		alert("Debe elegir la tabla de multiplicar");
	else{
		nTabla = parseInt(sValor, 10);
		if (oElemento != null){
			oElemento.style.visibility = "visible";

			if (oTbl != null){
				//Si la tabla está llena, vaciarla primero
				if (oTbl.rows.length>1){
					for (i=1; i<=10; i++)
						oTbl.deleteRow(-1);
				}

				//Colocar operaciones y campos para resultado en la tabla
				for (i=1; i<=10; i++){
					oLinea = oTbl.insertRow(-1);
					oCeldaOpe = oLinea.insertCell(0);
					oCeldaRes = oLinea.insertCell(1);
					oCeldaCal=oLinea.insertCell(2);
					oCeldaOpe.innerHTML = nTabla + " * " + i;


					oCtrl = document.createElement("input");
					oCtrl.type="text";
					oCtrl.id = "txtResultado"+i;
					oCeldaRes.appendChild(oCtrl);

					oCeldaCal.innerHTML =  " ok " ;

					oCtrl2 = document.createElement("text");
					//oCtrl2.type="text";
					oCtrl2.id="Ok"+i;
					oCeldaCal.appendChild(oCtrl2);


				}
			}
		}
	}
}


/*
* Función: califica
* Objetivo: verifica las respuestas capturadas en cada celda de la tabla
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function califica(sValor, oTbl,oCeldaCal){
var nTabla=0, i=0, nCapturado=0, nCalif=0;
var sValorCapturado="", sErr="";
var sValorCal="";
	if (isNaN(sValor))
		sErr = "Debe elegir la tabla de multiplicar";
	else{
		nTabla = parseInt(sValor, 10);

		//Recorrer los campos si ya están pintados
		if (oTbl.rows.length>1){
			for (i=1; i<=10; i++){
				sValorCapturado = document.getElementById("txtResultado"+i).value;
				if (isNaN(sValorCapturado)){
					sErr = sErr + "Error de captura en el resultado "+i + "\n";
                sValorCapturado = document.getElementById("txtResultado"+i).style="border: 4px solid #d81717; background-color: #d81717";
                }
                else{
					nCapturado = parseInt(sValorCapturado,10);
					if (nCapturado == (nTabla*i)){
						nCalif++;
						//sValorCal=document.getElementById("Ok"+i).style="border: 4px solid #4bf510; background-color: #4bf510";
						//sValorCal=document.getElementById("Ok"+i).style="background-color: #4bf510 ";
							sValorCapturado = document.getElementById("txtResultado"+i).style="border: 4px solid #4bf510; background-color: #4bf510";
					} else
                        sValorCapturado = document.getElementById("txtResultado"+i).style="border: 4px solid #d81717; background-color: #d81717";
                        
				}
			}

		}
	}
	if (sErr == "")
		document.getElementById("calf").innerHTML =("Calificacion = "+nCalif);
	else
		document.getElementById("calf").innerHTML = sErr;
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        
        var fecha = campo.value;
        var fecha2 = fecha.toString();
        var arrayfecha = fecha.split("-");
        var formato = ""+arrayfecha[2]+"/"+arrayfecha[1]+"/"+arrayfecha[0];
        
        
        if (formato == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(formato);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        			nDia = parseInt(valor.substring(0,2), 10);
        			nMes = parseInt(valor.substring(3,5), 10);
        			nAnio = parseInt(valor.substring(6,10), 10);

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }

        function creasigno(nDia,nMes){

        var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
        var newContent = document.createTextNode("SIGNO ARIES"+"       Numero de la Suerte = 5");
            newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#d81717 ; width: 153px ;height:150px ";
        }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          var newContent = document.createTextNode("SIGNO TAURO"+"       Numero de la Suerte = 12");
            newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#008f39 ; width: 153px ;height:150px ";
        }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            var newContent = document.createTextNode("SIGNO GEMINIS"+"       Numero de la Suerte = 3");
            newDiv.style="border: 3px solid #ffffff; background-color:#f8f32b ; width: 153px ;height:150px ";
        }else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              var newContent = document.createTextNode("SIGNO CANCER"+"       Numero de la Suerte = 2");
                 newDiv.style="border: 3px solid #8a9597 ; background-color:#ffffff ; width: 153px ;height:150px ";
            }
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                var newContent = document.createTextNode("SIGNO LEO"+"       Numero de la Suerte = 9");
                  newDiv.style="color: #ffffff; border: 3px solid #d81717; background-color:#ff8000 ; width: 153px ;height:150px ";
              }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                  var newContent = document.createTextNode("SIGNO VIRGO"+"       Numero de la Suerte = 17");
                  newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#5b3a29 ; width: 153px ;height:150px ";
              }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                    var newContent = document.createTextNode("SIGNO LIBRA"+" Numero de la Suerte = 6");
                  newDiv.style="color: #ffffff; border: 3px solid #0000ff; background-color:#ff0080 ; width: 153px ;height:150px ";
              }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      var newContent = document.createTextNode("SIGNO ESCORPIO"+"Numero de la Suerte = 8");
                  newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#cb3234 ; width: 153px ;height:150px ";
              }else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                        var newContent = document.createTextNode("SIGNO SAGITARIO"+"Numero de la Suerte = 4");
                  newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#cf3476 ; width: 153px ;height:150px ";
              }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                          var newContent = document.createTextNode("SIGNO CAPRICORNIO"+"       Numero de la Suerte = 23");
                  newDiv.style="color: #ffffff; border: 3px solid #ffffff; background-color:#000000 ; width: 153px ;height:150px ";
              }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                            var newContent = document.createTextNode("SIGNO ACUARIO"+"       Numero de la Suerte = 0");
                  newDiv.style="border: 3px solid #9c9c9c; background-color:#5dc1b9 ; width: 153px ;height:150px ";
              }else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                              var newContent = document.createTextNode("SIGNO PICIS"+"       Numero de la Suerte = 7");
                  newDiv.style="color: #ffffff; border: 3px solid #4b0082; background-color:#572364 ; width: 153px ;height:150px ";
              }


        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        
}
        
