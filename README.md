<div align="center">
    <h1>Project Name</h1>
    <h4><b>Project description</b></h4>

</div>
<hr>

# Rodar com docker (desenvolvimento)

- Builde a aplicação com o comando `docker build -t ProjectName  -f Dockerfile.dev.`
- Rode a aplicação com o comando `docker run -p 3000:3000 ProjectName`

# Rodar com docker (produção)

- Builde a aplicação com o comando `docker build -t ProjectName .`
- Rode a aplicação com o comando `docker run -p 3000:3000 ProjectName`

# Variaveis de ambiente

- `APP_PORT` : Define a porta onde a aplicação será exposta. 

# Documentação

Para saber como utilizar a api, basta acessar o endereço http://localhost:3000/docs após rodar a aplicação.



