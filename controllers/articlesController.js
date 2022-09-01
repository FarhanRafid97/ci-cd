const { Article } = require('../models');

exports.index = async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
};

exports.show = async (req, res) => {
  const id = Number(req.params.id);

  if (typeof id !== 'number') {
    return res.status(400).json({
      message: 'ID must be a number',
    });
  }

  const article = await Article.findByPk(id);

  if (!article) {
    return res.status(404).json({
      message: 'Article not found',
    });
  }

  return res.json(article);
};

exports.store = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({
      message: 'Failed to create new article',
    });
  }

  const article = await Article.create({ title, body });
  return res.status(201).json(article);
};

exports.update = async (req, res) => {
  const id = Number(req.params.id);
  if (typeof id !== 'number') {
    return res.status(400).json({
      message: 'ID must be a number',
    });
  }

  const article = await Article.findByPk(id);

  if (!article) {
    return res.status(404).json({
      message: 'Article not found',
    });
  }

  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({
      message: 'Failed to create new article',
    });
  }

  const updatedArticle = await article.update({ title, body });
  return res.json(updatedArticle);
};

exports.destroy = async (req, res) => {
  const id = Number(req.params.id);
  if (typeof id === 'number') {
    return res.status(400).json({
      message: 'ID must be a number',
    });
  }

  const article = await Article.findByPk(id);

  if (!article) {
    return res.status(404).json({
      message: 'Article not found',
    });
  }

  await article.destroy();
  return res.status(204).send();
};
