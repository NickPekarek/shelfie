module.exports = {
    getInventory: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_inventory()
        .then(inventory => { res.status(200).send(inventory); })
        .catch( err => {
          console.log(err).res.status(500).send(err);
        });
    },

    getProduct: ( req, res ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_product([req.params.id])
          .then(product => { res.status(200).send(product); })
          .catch( err => {
            console.log(err).res.status(500).send(err);
          });
      },

    create:( req, res ) => {
        const dbInstance = req.app.get('db');
        const {img, name, price} = req.body;

        dbInstance.create_product([img, name, price])
            .then( ()=> res.status(200).send())
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            });    
    },

    delete:(req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.delete_product([req.params.id])
        .then( ()=> res.status(200).send())
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        });   
    },

    update:(req, res) => {
        const dbInstance = req.app.get('db');
        const {img,name, price} = req.body;
        dbInstance.update_product([img, name, price, req.params.id])
        .then( ()=> res.status(200).send())
        .catch( (err) => {
            console.log(err)
            res.status(500).send(err) 
        });  
    }


  };