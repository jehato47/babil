const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('./ethereum/build/DisasterEventTracker.json');

const provider = new HDWalletProvider(
    'demand ramp crunch cabbage twin angle survey rabbit enhance ankle damage duty',
    // remember to change this to your own phrase!
    // 'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
    'https://sepolia.infura.io/v3/4f45c61685dc4773a877d9b85385d48a'
    // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
        .deploy({ data: compiledContract.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    // console.log('Contract ABI:', JSON.stringify(result.options.interface));
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();