function myFunction(text) {
    switch(text) {
        case (!text.contains('l')):
            return false;
          break;
        case (!text.contains('p') && ):
          return 0;
          break;
          case !text.contains('d') && ):
          return "";
          break;
        default:
          return "The correct value."
      }
  }

  function isFlag(text){
    var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
    if(text.contains('-') && RegExp.test(expreg)){
      return true;
    }
  }


  function analize(flag){
    if(isFlag(flag)){

    }
  }