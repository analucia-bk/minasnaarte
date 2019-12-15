const express = require("express")
const router = express.Router()
const controller = require("../controller/artistasController")

/**
 * @api {get} /artistas Retorna todas as artistas cadastradas
 * @apiName GetArtistas
 * @apiGroup artistas
 * 
 * 
 * 
 * @apiSuccess {Object[]} Retorna todas as artistas cadastradas
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       nome: "Teste"
         categoria: "Teste" ,
         email: "teste@teste",
         telefone: "12345-6789"
         cidade: "Sâo Paulo"
         uf: "SP"
 *      
 *     }
*   @apiError (500) serverError
 *
 *  @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */ 

router.get("/artistas", controller.getAll)

/**
 * @api {post} /artistas Cadastro de Artistas
 * @apiName PutArtistas
 * @apiGroup Artistas
 * @apiParam (Request Body) {String} nome                      Nome
 * @apiParam (Request Body) {String} categoria                 Teatro, Rua ou Show
 * @apiParam (Request Body) {String} email                     email da artista
 * @apiParam (Request Body) {Number} telefone                  telefone da artista 
 * @apiParam (Request Body) {String} cidade                    cidade onde atua
 * @apiParam (Request Body) {String} uf                        Estado onde atua
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *   {
 *       status: true,
 *       mensagem: "Artista Incluída com Sucesso"
 *   }
 * @apiError (500) serverError
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
router.post("/", controller.post)

/** 
* @api {put} /artista Atualização do cadastro 
 * @apiName PutArtista
 * @apiGroup Artistas
 * 
 * @apiGroup Artistas
 * @apiParam (Request Body) {String} nome                      Nome
 * @apiParam (Request Body) {String} categoria                 Teatro, Rua ou Show
 * @apiParam (Request Body) {String} email                     email da artista
 * @apiParam (Request Body) {Number} telefone                  telefone da artista 
 * @apiParam (Request Body) {String} cidade                    cidade onde atua
 * @apiParam (Request Body) {String} uf                        Estado onde atua
 * 
 * @apiSuccess {Object[]} Mensagem de sucesso na atualização.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Cadastro Atualizado!" }
 *
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Artista nâo localizada!"
 *     }
 * 
 */
 
router.put("/:nome", controller.updateArtista)

/**
 * @api {delete} /estabelecimentos/:cnpj Exclusão de cadastro
 * @apiName DeleteArtista
 * @apiGroup Artistas
 * 
 * @apiParam {Number} id                                   
 *
 * @apiSuccess {Object[]} Retorna Mensagem de sucesso na exclusâo do cadastro
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { message: 'Artista não localizada' }
 * 
 * @apiError (404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Não localizamos o Estabelecimento para exclusão!"
 *     }
 * 
 */

router.delete("/:_id", controller.deleteArtista)

module.exports = router