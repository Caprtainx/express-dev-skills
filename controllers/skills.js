const skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill
};

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill'});
}

function show(req, res) {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    title: 'Skill Details'
  });
}
  
function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll(),
      title: 'All Skills'
     });
  }
