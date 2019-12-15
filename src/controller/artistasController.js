const Artistas = require("../model/artistas")

exports.post = (req, res) => {
    const mulheres = new Artistas(req.body)
    console.log('teste', req.body)
    mulheres.save(function(err){
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
    Artistas.find(function(err, Artistas){
        if (err) res.status(500).send(err);
        res.status(200).send(Artistas)
    })
}

exports.getByNome= (req, res) => {
    const nome= req.params.nome
    Artistas.find({nome}, function(err, Artistas){
        if (err) res.status(500).send(err);
        const nomes = Artistas.map(Artistas => {
            return{
                nome: Artistas.nomeArtista,
                telefone: Artistas.site
            }
        })
        res.status(200).send(nomes)
    })
}



    exports.updateArtista = (req, res) => {
    Artistas.findOneAndUpdate( 
        {nome: req.params.nome},
        { $set: req.body },
        { upsert: false },
        (err, Artistas) => {
            if (err) return res.status(500).send(err);

            if (!Artistas) return res.status(401).send({ mensagem: "Artista não localizada" });
            
            return res.status(200).send({ mensagem: "Cadastro Atualizado!" });
        });    
};


exports.deleteArtista = (req, res, next) => {
    Artistas.findByIdAndDelete({ "_id": req.params._id }, function (err, Artistas) {
        if (err) res.status(500).send(err);

        if (!Artistas) return res.status(404).send({ mensagem: "Artista não localizada" });

        Artistas.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Cadastro removido com sucesso' });
            }
        })
    })
};
