const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, 'contracts', 'DisasterEventTracker.sol');
const source = fs.readFileSync(contractPath, 'utf8');
console.log(1);
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
console.log(buildPath);
console.log(output);

for (let contract in output) {
    console.log(contract);
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}