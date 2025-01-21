const express = require('express');
const router = express.Router();
const appData = require('../DatabasePost')

// INDEX - Get all posts
router.get('/', (req, res) => {
    res.send('Lista di tutti i posts');
});

// SHOW - Get single post by ID
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Dettagli del post ${postId}`);
});

// CREATE - Create a new post
router.post('/', (req, res) => {
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    // Qui andrebbe la logica per creare un nuovo post
    res.send('Nuovo post creato');
});

// UPDATE - Update post by ID (PUT per aggiornamento completo)
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} aggiornato completamente`);
});

// UPDATE - Partial update post by ID (PATCH per aggiornamento parziale)
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} aggiornato parzialmente`);
});

// DELETE - Delete post by ID
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    if(isNaN(postId)){
        return res.sendStatus(400)
    }
    const postsSearch = appData.find(elm => elm.id === Number(postId))

    if(!postsSearch){
        return res.sendStatus(404)
    }
    res.send(`Post ${postId} eliminato`);
});


module.exports = router