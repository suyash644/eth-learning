const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
	 'monkey liberty claw digital answer envelope visual logic accuse inquiry crop brave',
     'https://rinkeby.infura.io/v3/62b86d05dee944efba90c3ddb1768a35'
	    );

  const web3 = new Web3(provider);

  const deploy = async ()=>{
  console.log('ok');
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy a contract', accounts[0]);
   const result  =  await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode})
  .send({gas:'7499990',from: accounts[0]});
  console.log('Contract deployed to',result.options.address);

};

deploy();
