const sektors = [
    { name: 'X', load: 20},
    { name: 'Y', load: 50},
    { name: 'Z', load: 40}
]

const critical = sektors.reduce((max, sektors) => {
    return sektors.load > max.load ? sektors : max;
});

console.log(` Critical sector: ${critical.name} with load ${critical.load}`);