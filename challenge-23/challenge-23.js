(function() {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-), multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE" que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

   var $input = document.querySelector('[data-js="inputOutput"]')
   var egualSign = document.querySelector('[data-js="equalSign"]')
   var resetSign = document.querySelector('[data-js="clearSign"]')
   var inputArrOfNumbersAndOperators = [];
   var objOperators


   $input.addEventListener('keyup', function() {
     $input.value = '0';
   })

    resetSign.addEventListener( 'click', function() {
      $input.value = '0'
    })

    egualSign.addEventListener('click', function(){
      $input.value = calculateInput($input.value)
    })

    // ButtonNumbers and your events

    function ContructButtonsNumbersObj() {
      for(var i = 0; i < 10; i++) {
        this['numb' + i + 'Button'] = document.querySelector('[data-js="number' + i + '"]')
      }
    }

    var objButtonsNumbers = new ContructButtonsNumbersObj();

    function eventForNumbers() {
      for(let i in objButtonsNumbers){
        objButtonsNumbers[i].addEventListener('click', function() {
          if($input.value === '0')
            $input.value = '';
          $input.value += objButtonsNumbers[i].value;
        })
      }
    }
    eventForNumbers()

    // ButtonOperators and operators events

    var objButtonsOperations = {
      divButton: document.querySelector('[data-js="divSign"]'),
      multButton: document.querySelector('[data-js="multSign"]'),
      subButton: document.querySelector('[data-js="subSign"]'),
      sumButton: document.querySelector('[data-js="sumSign"]'),
    }


    function createEventForOperators() {
      for(let i in objButtonsOperations) {
        objButtonsOperations[i].addEventListener('click',function(){
          if(isLastOfSringOperator($input.value))
            $input.value =  removeLastOperator($input.value)
          $input.value += objButtonsOperations[i].value
        })
      }
    }
    createEventForOperators()

    // Functions to prepare the array of numbers

    function isLastOfSringOperator(testString){
      return /(\/|\*|-|\+)$/.test(testString)
    }
    function removeLastOperator(stringToRemove) {
      return stringToRemove.replace(/\D$/, '')
    }

    function inputStringToArray(string) {
      var arr = []
      string.replace(/(\d+)([\/*\-+])(?:(\d+)$)?/g, function(match, one, two, tree) {
        console.log(tree)
        if(!!tree){
          arr.push(one,two,tree)
        } else {
          arr.push(one,two)
        }
    })
    console.log(arr)
    if(!Number(arr[arr.length - 1]) && arr[arr.length + 1] !== '0'){
      arr.pop()}

      return arr;
    }

    function calculateInput(string) {
      var arr = inputStringToArray(string);
      console.log(arr)
      return arr.reduce(function(acumulad, item, index, arr) {
        if(item === '+')
            return acumulad + Number(arr[index + 1])
          if(item === '-')
            return acumulad - Number(arr[index + 1])
          if(item === '/')
            return acumulad / Number(arr[index + 1])
          if(item === '*')
            return acumulad * Number(arr[index + 1])
          return acumulad
      }, Number(arr[0]))
    }



})();
