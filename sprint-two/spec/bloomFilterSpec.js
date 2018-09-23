describe('bloomFilter', function() {
  var bloomFilter = new BloomFilter(18);

  it('looping through 10,000 strings', function() {
    var string = '';
    var allStrings = [];
    for(var i = 0; i < 10; i++){
      string = i.toString();
      bloomFilter.insert(string);
    }
    var numberOfPasses = 0;
    var numberOfFails = 0;
    for(var i = 0; i < 10000; i++) {
      string = i.toString();
      if(bloomFilter.retrieve(string)) {
        numberOfPasses++;
      } else {
        numberOfFails++;
      }
    }
    console.log(bloomFilter);
    console.log('numberOfPasses:', numberOfPasses, 'numberOfFails:', numberOfFails);
  });


});

// put in 10 actual values; tested 10,000 values;
// 4336 passes (4326 false positives); 5664 fails (definitely not in set)

// (1- e^(-kn/m))^k 
// approximation formula result: 0.53365722453 about 53% chance of false positive.