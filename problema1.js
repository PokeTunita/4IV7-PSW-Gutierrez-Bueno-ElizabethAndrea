function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}
function capital(){
    var cantidad = document.dinero.cantidad.value;
    var dinero = parseFloat(cantidad);
    var intereses = dinero * 0.02;
    var total = intereses + dinero;
    document.dinero.total.value="$"+total+"MXN";
}
function vender(){
    var sueldo = parseFloat(document.ventas.cantidad.value);
    var ventas = parseFloat(document.ventas.vendido.value);
    var resultado = sueldo + (ventas*0.1);
    document.ventas.total.value="$"+resultado+"MXN";
}
function descontar(){
    var inicio = parseFloat(document.descuento.cantidad.value);
    var total = inicio * 0.85;
    document.descuento.total.value="$"+total+"MXN";
}
function calificar(){
    var parciales = parseFloat(document.calificaciones.parcial.value);
    var examenes = parseFloat(document.calificaciones.examen.value);
    var trabajos = parseFloat(document.calificaciones.trabajo.value);
    var total = (parciales * 0.55) + (examenes * 0.3) + (trabajos * 0.15);
    document.calificaciones.total.value="Tu calificación es de "+total;
}
function calcular(){
    var hombres= parseFloat(document.porcentajes.hombres.value);
    var mujeres= parseFloat(document.porcentajes.mujeres.value);
    var e= hombres + mujeres;
    var porchom= (hombres*100)/e;
    var porcMuj= (mujeres*100)/e;
    document.porcentajes.ph.value = porchom + "%";
    document.porcentajes.pm.value = porcMuj + "%";
}
function cEdad(){
    var años = parseInt(document.edad.año.value);
    var fecha= new Date();
    var actual= fecha.getFullYear();
    if(años>1940 && años<actual){
        var total = actual-años;
        document.edad.total.value = "Este año usted cumple " + total;
    }else{
        alert("Año inválido");
    }
}
function operar(){
    var numerito1= parseFloat(document.operaciones.numero1.value);
    var numerito2= parseFloat(document.operaciones.numero2.value);
    var resultado= 0;
    if(numerito1==numerito2){
        resultado= numerito1*numerito2;
    }
    if(numerito1>numerito2){
        resultado= numerito1-numerito2;
    }
    if(numerito1<numerito2){
        resultado= numerito1+numerito2;    
    }    
    document.operaciones.total.value= resultado;
}
function calcularMayor(){
    var numerito1= parseFloat(document.mayores.numero1.value);
    var numerito2= parseFloat(document.mayores.numero2.value);
    var numerito3= parseFloat(document.mayores.numero3.value);
    if(numerito1>numerito2 && numerito1>numerito3){
        document.mayores.total.value= numerito1;}
    if(numerito2>numerito1 && numerito2>numerito3){
        document.mayores.total.value= numerito2;
    }
    if(numerito3>numerito1 && numerito3>numerito2){
        document.mayores.total.value= numerito3;
    }
}
function pagar(){
    var horas = parseInt(document.horasExtras.horas.value);
    var pagoHora = parseFloat(document.horasExtras.pago.value);
    var resultado = 0;
    if(horas <= 40){
        resultado = horas * pagoHora;
    }
    if(horas > 40 && horas<=48){
        resultado = (pagoHora * 40) + ((horas-40) * pagoHora * 2);
    }
    if(horas > 48){
        resultado = (pagoHora * 40) + (pagoHora * 16) + ((horas - 48) * pagoHora * 3); 
    }
    document.horasExtras.total.value = "Su sueldo total es de $" + resultado;
}
function abonar(){
    var meses = parseInt(document.salario.meses.value);
    var s = parseFloat(document.salario.salarioss.value);
    var resultado = 0;
    if(meses < 12){
        resultado = s * 0.05;
    }
    if(meses >= 12 && meses < 24){
        resultado = s * 0.07;
    }
    if(meses >= 24 && meses < 60){
        resultado = s * 0.1;
    }
    if(meses >= 60 && meses < 120){
        resultado = s * 0.15;
    }
    if(meses >= 120){
        resultado = s * 0.2;
    }
    document.salario.total.value = "Su utilidad es de: $" + resultado;

}