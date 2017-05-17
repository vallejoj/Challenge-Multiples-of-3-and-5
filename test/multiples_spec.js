var multiples = require( './../multiples.js' ); // import the file we are testing
var chai = require( 'chai' );
var should = chai.should();

describe( 'Sum of a Multiple Function', function() {

  it( 'should return the value 23 if given 10 as an argument', function() {
    var sum = multiples.sumOfAMultiple( 10 );
    sum.should.equal( 23 );
  });

  it( 'should return \'2318\' for n=100', function() {
    var sum = multiples.sumOfAMultiple( 100 );
    sum.should.equal( 2318 );
  });

  // when your tests pass, uncomment the next two and
  // change the expected value to your calculated result


  it( 'should return \'233168\' for n=1000 (see multiples-spec.js)', function() {
    var sum = multiples.sumOfAMultiple(1000);

    // Change the argument given to .equal() to the correct number
    sum.should.equal(0);
  });

  it( 'should return \'23331668\' for n=10000 (see multiples-spec.js)', function() {
    var sum = multiples.sumOfAMultiple(10000);

    // Change the argument given to .equal() to the correct number
    sum.should.equal(0);
  });


});
