function myFunction(text) {
    // Funcion: le mando un texto y segun eso me envia errores
    switch(text) {
        case (!text.contains('l')):
            return false;
          break;
        case (!text.contains('p') && text.contains()):
          return 0;
          break;
          case !text.contains('d') && text.contains.analize:
          return "";
          break;
        default:
          return "The correct value."
      }
  }
  // Si le mando el texto tiene que decirme si es bandera

  function isFlag(text){
    var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
    if(text.contains('-') && RegExp.test(expreg)){
      return true;
    }
  }
//Analiza cuales son banderas correctas

  function analize(flag){
    if(isFlag(flag)){

    }
  }