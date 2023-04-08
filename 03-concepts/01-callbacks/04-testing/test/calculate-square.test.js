const calcuateSquare = require('../calculate-square.js')
// ES module
//import calcuateSquare from '../calculate-square.js';
const expect = require('chai').expect;

// group tests in a test suite
describe('calculateSquare', function() {
    it('Should return 4 if pass 2', function(done) {
        calcuateSquare(2, function(error, result) {
            console.log('callback being called')
            expect(result).to.equal(4);
            done();
        });
    });

    it('Should return a type error', function(done) {
        calcuateSquare('string', function(error, result) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected');
            done();
        });
    });
});
