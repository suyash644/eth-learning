const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
const {interface, bytecode }=require('../compile');
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
let inbox;
beforeEach(async ()=>{
	accounts = await web3.eth.getAccounts();
	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data : bytecode, arguments:['Hi There!']})
	.send({from: accounts[0],gas: '1000000'});

	});


describe('Inbox',()=>{
	it('deploys a contract',()=>{
		assert.ok(inbox.options.address);
	});

	it('It is default message',async ()=>{
	const message = await inbox.methods.message().call();
	assert.equal(message,'Hi There!');
	});

	it('can change message',async ()=>{
	
	await inbox.methods.setMessage('bye').send({from: accounts[0]});
	const message = await inbox.methods.message().call();
	assert.equal(message,'bye');
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