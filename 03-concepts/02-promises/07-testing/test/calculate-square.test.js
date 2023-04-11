const calculateSquare = require('../src/calculate-square');
//import calculateSquare from '../src/calculate-square';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

// test suite
describe('calculateSquare', function() {
    this.timeout(3000); // set the timeout for all tests in the suite
    it('should resolve with number 4 if passed number 2', function() {
        this.timeout(3000); // change the default 2000ms timeout for promises
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
        // return signals asynchronous testing as opposed to done() when not async
    });

    // We check the promise becomes fulfilled
    it('should become fulfilled when passed number 2', function() {
        this.timeout(3000) // each test needs their timeout changed from default
        return expect(calculateSquare(2)).to.be.fulfilled;
    });

    // When the promise should be rejected
    it('should become rejected when passed string', function() {
        return expect(calculateSquare('my-string')).to.be.rejected;
    });

    // When we don't use the return statement
    it('should resolve with number 25 if passed number 5', function(done) {
       expect(calculateSquare(5)).to.eventually.be.equal(25).notify(done);
    });
});

// test suite with multiple assertions per function
describe('calculateSquareMult', function() {
    this.timeout(3000); // set the timeout for all tests in the suite
    it('should resolve with number 4 if passed number 2', function() {
        return calculateSquare(2).then(result => {
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
            expect(result).to.be.lessThan(5);
        });
    });
});

// test suite with multiple assertions per function
describe('calculateSquareReject', function() {
    this.timeout(3000); // set the timeout for all tests in the suite
    it('should return a rejected promise when passed a string', function() {
        return calculateSquare('string').catch(reason => {
            expect(reason).to.not.equal(null);
            expect(reason.message).to.be.equal('Argument Incorrect Type');
        });
    });
});
