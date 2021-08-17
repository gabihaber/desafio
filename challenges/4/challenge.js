/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

//const extractSize = htmlTemplate => {
   
    const texto = ` <div style="width: 442px;">
    <span style="height: 911px;"></span>
    <span style="height: 121px;"></span>
  </div>`;
    let teste10 = '';
    const regExp = /height: \d+px; width: \d+px;|width: \d+px; height: \d+%|<div style="width: \d+px;">|width: 0, height: 0/g;
    if (texto == ``) {
        teste10 = 'width: 0, height: 0'
    } else {
        
        const teste = texto.replace(/px/g, '')
        const teste1 = teste.replace(/%/g, '')
        const teste2 = teste1.replace(/;/g, ',')
        const teste3 = teste2.replace(/<span style=/g, '')
        const teste4 = teste3.replace(/\n/g, '')
        const teste5 = teste4.replace(/( )+/g, '')
        const teste6 = teste5.replace(/:/g, ': ')
        const teste7 = teste6.replace(/">"/g, ' ')
        const teste8 = teste7.replace(/,">/g, '')
        const teste9 = teste8.replace(/,width/g, ", width")
        teste10 = teste9.replace(/,height/g, ', height')
    }
    

    if(regExp){
        const regExpNova = /height: \d+, width: \d+|width: \d+, height: \d+|width: \d+, height: \d+|width: 0, height: 0/g;
        const regExpMatch = teste10.match(regExpNova)
        console.log(`{ ${regExpMatch} }`);
        }
    //}   
    
    


   

//module.exports = extractSize;


