const router = require('express').Router();
const Art = require('../../models/Art');

// Display all art for main page. 
router.get('/', async (req, res) => {
     const artData = await Art.findAll().catch((err) => {
          res.json(err);
     });
     const arts = artData.map((art) => art.get({ plain: true }));
     res.render('collection', { arts });
});

//Display art details
router.get('/:id', async (req, res) => {
     const detData = await Art.findByPk(req.params.id);
     const det = detData.get({ plain: true });
     res.render('collectionDetail', { det });
});


module.exports = router;