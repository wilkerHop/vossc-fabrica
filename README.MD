# VOSSC
Projeto da aplicação VOSSC para o Challenge da T-Systems.

## Gráficos
Os gráficos estão sendo alimentados por jsons na pasta pública DATA.

### Linha
Os gráficos de linha são alimentados por um json como esse:
```json
[1, 2, 4, 8, 16, 32, 64, 89]
```
Onde cada termo do array é uma ocorrência no gráfico.

### Pizza
Os gráficos de pizza são alimentados por um json como esse:
```json
[{
    "name": "Microsoft Internet Explorer",
    "y": 56.33
}, {
    "name": "Chrome",
    "y": 24.03
}]
```
Onde "y" é a porcentagem do dado.

### Stock
Os gráficos de stock tem um esquema de json mais complexo.
Por exemplo:
```json
[
 [1505088000000, 160.50, 162.05, 159.89, 161.50],
 [1505174400000, 162.61, 163.96, 158.77, 160.86],
 [1505260800000, 159.87, 159.96, 157.91, 159.65],
 [1505347200000, 158.99, 159.40, 158.09, 158.28],
 [1505433600000, 158.47, 160.97, 158.00, 159.88]
]
```
O exemplo mostra um array de dias formando uma semana de dados, onde o primeiro dado do dia é a identificação do dia, que no caso são de 2017-09-11 à 2017-09-15, o segundo é a quantidade que havia no início, o terceiro é a quantidade máxima que foi armazenada no dia, o quarto é a quantidade mínima que foi armazenada no dia e o quinto é a quantidade final do dia.
Use esse app para definir o identificador para o próximo dia: [nextTermApp](http://thinkphp.github.io/nextTerm/) 