const path = require('path');
const router = require('express').Router();

const db = require(path.join(__dirname, '..', 'db', 'db.json'))


router.get('/notes', (req, res) => res.json(db));

router.post('/notes', (req, res) => {
    const id = db.length;
    const add = { 
        "id": id,
        "title": req.body.title,
        "text": req.body.text,
    }
    db.push(add);
    res.json(db);
})

router.delete('/notes/:id', (req, res) => {
    db.splice(req.params.id, 1)
    res.status(200).json(db);
})


module.exports = router;