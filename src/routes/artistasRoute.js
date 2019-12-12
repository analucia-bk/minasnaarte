const express = require("express")
const router = express.Router()
const controller = require("../controller/artistasController")

router.post("/", controller.post)
router.get("/", controller.getAll)
router.get("/:nome", controller.getByNome)
router.put("/:artista", controller.updateArtista)
router.delete("/:_id", controller.deleteArtista)

module.exports = router