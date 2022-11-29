
# Waiterapp - O App do garçom

Este projeto consiste em um aplicativo para auxiliar o controle de pedidos de um estabelecimento, o atendente usando o aplicavo móvel seleciona os produtos e quantidade de uma determinada mesa, esses dados são enviados ao back-end e salvos em um banco de dados e em paralelo é enviado uma notificação para a aplicação WEB que tem um novo pedido. No aplicativo WEB é onde será feito o controle do status do pedido, passando de em esperada para em produção e finalizando com o status concluído.

* Neste repositório estão todas as partes do projeto, api (back-end), front-end e aplicativo móvel.

## Documentação da API

#### Retorna todas as categorias

```http
  GET /categories
```

#### Retorna todos os produtos

```http
  GET /products
```

#### Retorna todos os pedidos

```http
  GET /orders
```

#### Retorna todos os produtos de uma determinada categoria

```http
  GET /categories/:categoryId/products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `categoryId`      | `string` | **Obrigatório**. O ID da categoria que você quer |


#### Cadastra uma nova categoria

```http
  POST /categories
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome da categoria |
| `icon`      | `string` | **Obrigatório**. Ícone da categoria (Emoji) |

#### Cadastra um novo produto

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do produto |
| `description`      | `string` | **Obrigatório**. Descrição do produto |
| `price`      | `number` | **Obrigatório**. Preço do produto (Em centavos) |
| `ingredients`      | `Array<object>` | Igredientes do produto |
| `category`      | `string` | **Obrigatório**. Id da categoria |
| `image`      | `blob` | **Obrigatório**. Imagem do produto |

Objeto ingredients
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do ingrediente |
| `icon`      | `string` | **Obrigatório**. Icone do ingrediente (Emoji) |

#### Cadastra um novo pedido

```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `mesa`      | `string` | **Obrigatório**. Identificação da mesa |
| `products`      | `Array<object>` | **Obrigatório**. Produtos do pedido |

Objeto products
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `product`      | `string` | **Obrigatório**. Id do produto |
| `quantity`      | `string` | **Obrigatório**. Quantidade |

#### Validar credenciais

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `e-mail`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuaŕio |

#### Validar JWT Token

```http
  POST /token
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `token`      | `string` | **Obrigatório**. Token JWT |

#### Alterar status de um pedido

```http
  PATCH /orders/:orderId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `orderId`      | `string` | **Obrigatório**. Id do pedido |
| `status`      | `string` | **Obrigatório**. enum(WAITING, IN_PRODUCTION, DONE) |

#### Deletar um pedido

```http
  DELETE /orders/:orderId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `orderId`      | `string` | **Obrigatório**. Id do pedido |



## Demonstração

Insira um gif ou um link de alguma demonstração


## Screenshots

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047183122661388328/image.png?width=1242&height=632)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047184310416986162/image.png?width=1440&height=355)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047184731256651776/image.png?width=1287&height=632)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047185705018867722/Screenshot_20221129_131443.jpg?width=311&height=632)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047185975463391282/image.png)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047185316706013214/Screenshot_20221129_131548.jpg?width=311&height=632)

![App Screenshot](https://media.discordapp.net/attachments/1044691984260010016/1047185315829391410/Screenshot_20221129_131611.jpg?width=311&height=632)
