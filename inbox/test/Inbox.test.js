const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

class Car{

	park(){
		return 'starts';
	}

	drive(){
		return 'virtual driver';
	  }
	}
let car;
beforeEach(()=>{
	car =new Car;
});
	describe('Car',()=>{         
		it('suyash',()=>{
			
			assert.equal(car.park(),'starts');
		});

		it('can drive',()=>{
			
			assert.equal(car.drive(),'virtual driver');
		});
	});