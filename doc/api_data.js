define({ "api": [
  {
    "type": "delete",
    "url": "/estabelecimentos/:cnpj",
    "title": "Exclusão de cadastro",
    "name": "DeleteArtista",
    "group": "Artistas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>Mensagem de sucesso na exclusâo do cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ message: 'Artista não localizada' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Não localizamos o Estabelecimento para exclusão!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/artistasRoute.js",
    "groupTitle": "Artistas"
  },
  {
    "type": "put",
    "url": "/artista",
    "title": "Atualização do cadastro",
    "name": "PutArtista",
    "group": "Artistas",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Teatro, Rua ou Show</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email da artista</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>telefone da artista</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>cidade onde atua</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>Estado onde atua</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Mensagem",
            "description": "<p>de sucesso na atualização.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " HTTP/1.1 200 OK\n{ mensagem: \"Cadastro Atualizado!\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Artista nâo localizada!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/artistasRoute.js",
    "groupTitle": "Artistas"
  },
  {
    "type": "post",
    "url": "/artistas",
    "title": "Cadastro de Artistas",
    "name": "PutArtistas",
    "group": "Artistas",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Teatro, Rua ou Show</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email da artista</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "telefone",
            "description": "<p>telefone da artista</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>cidade onde atua</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": "<p>Estado onde atua</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n    status: true,\n    mensagem: \"Artista Incluída com Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/artistasRoute.js",
    "groupTitle": "Artistas"
  },
  {
    "type": "get",
    "url": "/artistas",
    "title": "Retorna todas as artistas cadastradas",
    "name": "GetArtistas",
    "group": "artistas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todas as artistas cadastradas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  nome: \"Teste\"\n     categoria: \"Teste\" ,\n     email: \"teste@teste\",\n     telefone: \"12345-6789\"\n     cidade: \"Sâo Paulo\"\n     uf: \"SP\"\n \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "serverError",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/artistasRoute.js",
    "groupTitle": "artistas"
  }
] });
