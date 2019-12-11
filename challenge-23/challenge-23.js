(function() {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    var $input = document.querySelector('[data-js="inputOutput"]')
    $input.addEventListener('keyup', function() {
      $input.value = '0';
    })
    var objButtonsOperations = {
      divButton: document.querySelector('[data-js="divSign"]'),
      multButton: document.querySelector('[data-js="multSign"]'),
      subButton: document.querySelector('[data-js="subSign"]'),
      sumButton: document.querySelector('[data-js="sumSign"]'),
    }
    // var objButtonsNumbers = {
    //   numb0Button: document.querySelector('[data-js="number0"]'),
    //   numb1Button: document.querySelector('[data-js="number1"]'),
    //   numb2Button: document.querySelector('[data-js="number2"]'),
    //   numb3Button: document.querySelector('[data-js="number3"]'),
    //   numb4Button: document.querySelector('[data-js="number4"]'),
    //   numb5Button: document.querySelector('[data-js="number5"]'),
    //   numb6Button: document.querySelector('[data-js="number6"]'),
    //   numb7Button: document.querySelector('[data-js="number7"]'),
    //   numb8Button: document.querySelector('[data-js="number8"]'),
    //   numb9Button: document.querySelector('[data-js="number9"]'),
    // }
    function ContructButtonsNumbersObj() {
      for(var i = 0; i < 10; i++) {
        this['numb' + i + 'Button'] = document.querySelector('[data-js="number' + i + '"]')
      }
    }

    var objButtonsNumbers = new ContructButtonsNumbersObj();




    for(let i in objButtonsNumbers){
      objButtonsNumbers[i].addEventListener('click', function() {
        if($input.value === '0')
          $input.value = '';

        $input.value += objButtonsNumbers[i].value;
      })
    }





})();
