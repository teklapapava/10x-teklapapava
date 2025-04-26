const nodes = ['core', 'grid', 'relay'];

const inlabels = nodes.map((name, idx) => `${idx + 1}. ${name.toUpperCase()}`)

console.log(`NodeList: ${inlabels}`);