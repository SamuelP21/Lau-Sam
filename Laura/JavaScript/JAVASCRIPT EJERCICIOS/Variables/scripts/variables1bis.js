		// Declaración de variables.
		  var x, y;
		  var suma, resta, multiplicacion, division;
		  var dni= 123456789;
		  var letra_dni = "W";
		  var DNI= dni + letra_dni;
		  
		// Asignacion de valores. 
		  x= 5;
		  y= 3;
		  suma = x + y;
		  resta = x - y;
		  multiplicacion = x * y;
		  division = x / y;
		  
		// Mostrar por pantalla las distintas variables.
		  document.write(x + "<br>");
		  //document.write('<br>');
		  document.write(y);
		  document.write('<br>');
		  document.write("El valor de la variable x es " + x);
		  document.write('<br>');
		  document.write("El valor de la variable y es " + y);
		  document.write('<br>');
		  
		  
		  document.write("El resultado de sumar las variables x e y es " + suma);
		  document.write('<br>');
		  document.write("El resultado de restar las variables x e y es " + resta);
		  document.write('<br>');
		  document.write("El resultado de multiplicar las variables x e y es " + multiplicacion);
		  document.write('<br>');
		  document.write("El resultado de dividir las variables x e y es " + division);
		  document.write('<br>');
		  
		  
		  document.write("DNI: " + DNI);
		  document.write('<br>');
		  document.write("Número del DNI: " + dni);
		  document.write('<br>');
		  document.write("Letra del DNI: " + letra_dni)