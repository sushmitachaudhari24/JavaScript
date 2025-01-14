//  IIFE------ Immediately Invoked Function Expression
//named IIFE
(function printn(){
  console.log("Hello IIFE Creater");
})();

//unnamed IIFE
(function(){console.log("UNNamed IIFE");
})();

//Unnamed IIFE with Parameter
let n="RAM";
(function(n){console.log(" Hello un named IIFE with "+n);
})(n)