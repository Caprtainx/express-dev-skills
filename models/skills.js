const skills = [
    {id: 12345, skill: 'Teamwork', fun: true},
    {id: 13452, skill: 'Problem Solving', fun: true},
    {id: 14523, skill: 'Googling', fun: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}