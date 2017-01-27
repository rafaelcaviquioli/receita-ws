# receita-ws
Plugin em jQuery para consulta de dados de pessoa jurídica através do CNPJ utilizando o Web Service da www.receitaws.com.br

![enter image description here](https://raw.githubusercontent.com/rafaelcaviquioli/receita-ws/master/example/example.jpeg)

#### 1. Exemplo de uso utilizando evento keyup no input do CNPJ e mapeando os inputs do cadastro da empresa.

```html
<html>
    <head>
        <script src="jquery.min.js"></script>
        <script src="jquery.receita-ws.js"></script>
    </head>
    <body>
        <script>
            $(document).ready(function () {
                $('#cnpj').receitaws({
                    fields: {
                        nome: '#nome',
                        logradouro: '#logradouro',
                        numero: '#numero',
                        bairro: '#bairro',
                        municipio: '#municipio',
                        uf: '#uf'
                    }
                });
            });
        </script>
    </body>
    <label for="cnpj">Cnpj:</label>
    <input type="text" id="cnpj"/>
    
    <label for="razao">Nome:</label>
    <input type="text" id="nome"/>
    
    <label for="logradouro">Logradouro:</label>
    <input type="text" id="logradouro"/>
    
    <label for="numero">Numero:</label>
    <input type="text" id="numero" />
    
    <label for="bairro">Bairro:</label>
    <input type="text" id="bairro" />
    
    <label for="municipio">Município:</label>
    <input type="text" id="municipio" /><br>
    
    <label for="uf">UF:</label>
    <input type="text" id="uf" />
</html>