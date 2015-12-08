import express from 'express';

let router = express.Router();

router.get('/testRoute', (req, res) => {
  res.status(200).send('Hello from /testRoute');
});

router.get('/testApi', (req, res) => {
  res.status(200).json({message: 'Hello from /testApi'});
});

export default router;
