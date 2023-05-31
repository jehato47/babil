import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);


    // * Alternative way to request accounts:
    // web3 = new Web3(window.ethereum);
    // window.ethereum.enable(); // get permission to access accounts

} else {
    // Use Infura as fallback
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/4f45c61685dc4773a877d9b85385d48a'
    );
    web3 = new Web3(provider);
}

export default web3;