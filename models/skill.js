const skills = [
    {id: 12345, skill: 'Teamwork', fun: true},
    {id: 13452, skill: 'Problem Solving', fun: true},
    {id: 14523, skill: 'Googling', fun: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}