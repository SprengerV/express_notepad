const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const dbPath = path.join(__dirname, '..', 'db', 'db.json')
const db = require(dbPath)


router.get('/notes', (req, res) => res.json(db));

router.post('/notes', (req, res) => {
    const id = db.length;
    const add = { 
        "id": id,
        "title": req.body.title,
        "text": req.body.text,
    }
    db.push(add);
    fs.writeFileSync(dbPath, db);
    res.json(db);
})

router.delete('/notes/:id', (req, res) => {
    db.splice(req.params.id, 1)
    res.status(200).json(db);
})


module.exports = router;