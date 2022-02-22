 function trim(){
     let name= '   Hovappa   ';
     console.log('trimmed name ',name.trim());
 }


 function changetoLowerCase(){
     let name = 'HOVAPPA';
     console.log('changed name ',name.toLowerCase());
 }


 function changetoUppeerCase(){
     let name = 'hovappa';
     console.log('changed name ',name.toUpperCase());
 }

 module.exports.trim= trim;
 module.exports.changetoLowerCase=changetoLowerCase;
 module.exports.changetoUppeerCase=changetoUppeerCase;
 