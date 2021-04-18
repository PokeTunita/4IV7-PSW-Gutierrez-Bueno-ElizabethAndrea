function problema1(){

    var p1_input = document.querySelector('#p1-input').value;



    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p1_array = p1_input.split(' ').reverse();

  

      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}



//problema 2
function problema2(){
    //lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */

    //construir vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores 
    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir el resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}

function problema3(){
    var entrada = document.querySelector('#p3-input').value;

    var teclas = "QWERTYUIOPASDFGHJKLÑZXCVBNMÁÍÚÉÓ,";
    if(entrada.length <= 30){
        var continuar = true;
        for(var i=0; i<entrada.length; i++){
            var teclitas = entrada.charAt(i);
            for(var j = 0; j < teclas.length; j++){
                if(teclitas == teclas.charAt(j))
                    break;
                if(j == teclas.length){
                    continuar = false;
                    break;
                }
            }
        }
        if(continuar == true){
            var palabras = entrada.split(',');
            var array = [];
            palabras.forEach(function(palabras){
                var otraArray = [];
                //Dividir la palabra por carácteres.
                for(var i = 0; i < palabras.length; i++){
                    otraArray.push(palabras.charAt(i));
                }
                //Eliminar carácteres repetidos.
                for(var i = otraArray.length -1; i >=0; i--){
                    if(otraArray.indexOf(otraArray[i]) !== i) otraArray.splice(i,1);
                }
                array.push(otraArray.length);
            });
            //Evalúa cuál tiene más elementos.
            var mayor = Math.max.apply(null, array);
            var respuesta = "";
            //Concatenar la respuesta en el String.
            for(var i = 0; i < array.length; i ++){
                if(array[i] == mayor){
                    respuesta += palabras[i] + ",";
                }
            }
            //Arrojar resultado.
            document.querySelector('#p3-output').textContent= 'Las palabra o palabras con ' + respuesta + ' Con ' + mayor + ' caracteres';    
            
        }
        else{
            alert("Esperemos que funcione xD");
        }
        } else{
            alert("No se permiten palabras con demasiados carácteres");
        }
}