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
</html>
```

#### 2. Permite pré tratamento dos dados obtidos do WS ou adaptação para formulários personalizados.

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
                        cep: function (data) {
                            var separaCep = data.split('-');
                            
                            $('#cep1').val(separaCep[0]);
                            $('#cep2').val(separaCep[2]);
                        }
                    }
                });
            });
        </script>
    </body>
    <label for="cnpj">Cnpj:</label>
    <input type="text" id="cnpj"/>
    
    <label for="razao">Nome:</label>
    <input type="text" id="nome"/>
        
    <label for="razao">CEP:</label>
    <input type="text" id="cep1"/>-<input type="text" id="cep2"/>
    
    <label for="logradouro">Logradouro:</label>
    <input type="text" id="logradouro"/>
    
    <label for="numero">Numero:</label>
    <input type="text" id="numero" />
</html>
```

#### 3. Eventos de callback

```javascript
$('#cnpj').receitaws({
    fields: {
        nome: '#nome',
        logradouro: '#logradouro',
        numero: '#numero',
        cep: function (data) {
            var separaCep = data.split('-');
            
            $('#cep1').val(separaCep[0]);
            $('#cep2').val(separaCep[2]);
        }
    },
    
    afterRequest: function () {
        console.log('Iniciando a busca.');
    },
    success: function (data) {
        console.log('CNPJ encontrado.');
        
        //Dados obtidos
        console.log(data);
    },
    fail: function (message) {
        console.log('Falha na requisição, detalhes: ' + message);
    },
    notfound: function (message) {
        console.log('CNPJ não encontrado ou inválido.');
    }
});
```