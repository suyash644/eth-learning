const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

// class Car{

// 	park(){
// 		return 'starts';
// 	}

// 	drive(){
// 		return 'virtual driver';
// 	  }
// 	}
// let car;
let accounts;
beforeEach(async ()=>{
	accounts = web3.eth.getAccounts();

	});
});

describe('Inbox',()=>{
	it('deploys a contract',()=>{
		console.log(accounts);
	});
});
	// describe('Car',()=>{         
	// 	it('suyash',()=>{
			
	// 		assert.equal(car.park(),'starts');
	// 	});

	// 	it('can drive',()=>{
			
	// 		assert.equal(car.drive(),'virtual driver');
	// 	});
	// });