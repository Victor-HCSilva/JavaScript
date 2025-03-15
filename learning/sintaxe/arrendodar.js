let num = 12.3499

//sempre arrendo 0.5 para cima
console.log(num.toFixed(1))

//arredonda para cima
console.log(Math.ceil(num))

//arredonda para baixo
console.log(Math.floor(num))

//parecido com o floor
console.log(Math.round(num))

//Exemplo moeda | API de formatação de moeda (padrão do JavaScript)
console.log(new Intl.NumberFormat("pt-BR",
    {
        style:"currency",
        currency:"BRL"
    }
    ).format(num)
);


