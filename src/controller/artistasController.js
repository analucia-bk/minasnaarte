const Artistas = require("../model/artistas")

exports.post = (req, res) => {
    const estabelecimento = new Artistas(req.body)

    artistas.save(function(err){
        if (err) res.status(500).send(err)
        else{
            res.status(201).send({
                status:true,
                mensagem: "Artista Incluída com sucesso"
            })
        }
    })
}

exports.getAll = (req, res) => {
    Estabelecimentos.find(function(err, artistas){
        if (err) res.status(500).send(err);
        res.status(200).send(artistas)
    })
}

exports.getByNome= (req, res) => {
    const nome= req.params.nome
    Estabelecimentos.find({nome}, function(err, artistas){
        if (err) res.status(500).send(err);
        const nomes = estabelecimentos.map(artistas => {
            return{
                nome: artistas.nomeArtista,
                telefone: artistas.site
            }
        })
        res.status(200).send(nomes)
    })
}



exports.updateArtista = (req, res) => {
    Artistas.findOneAndUpdate( 
        { nome: req.params.nome},
        { $set: req.body },
        { upsert: false },
        (err, artistas) => {
            if (err) return res.status(500).send(err);

            if (!artistas) return res.status(401).send({ mensagem: "Artista não localizada" });
            
            return res.status(200).send({ mensagem: "Artista Cadastrada" });
        });    
};


exports.deleteArtista = (req, res, next) => {
    Artistas.findOne({ "nome": req.params.nome }, function (err, artistas) {
        if (err) res.status(500).send(err);

        if (!estabelecimento) return res.status(200).send({ mensagem: "Artista não localizada" });

        estabelecimento.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Cadastro realizado com sucesso' });
            }
        })
    })
};
