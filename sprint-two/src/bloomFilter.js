var hasher1 = function(string, max) {
  var hash = 120837162;
  for (var i = 0; i < string.length; i++) {
    hash += Math.abs(20 * (string.charCodeAt(i) - 2));
  }
  hash = hash & hash;
  return (hash % max);
};

var hasher2 = function(string, max) {
  var hash = 9834757;
  for (var i = 0; i < string.length; i++) {
    hash += Math.abs(20 * (string.charCodeAt(i) - 2));
    hash = hash >> 5;
    hash = Math.abs(hash);
  }
  hash = hash & hash;
  return (hash % max);
};

var hasher3 = function(string, max) {
  var hash = 1;
  for (var i = 0; i < string.length; i++) {
    hash -= Math.abs(3 * (string.charCodeAt(i) - 17));
    hash = hash >> 3;
    hash = Math.abs(hash);
  }
  hash = hash & hash;
  return (hash % max);  
};

var BloomFilter = function(m) {
  this.storage = [];
  this.max = m;
  //hash numbers can be the same
};

BloomFilter.prototype.insert = function (str) {
  var hash1 = hasher1(str, this.max);
  var hash2 = hasher2(str, this.max);
  var hash3 = hasher3(str, this.max);
  this.storage[hash1] = str;
  this.storage[hash2] = str;
  this.storage[hash3] = str;
};

BloomFilter.prototype.retrieve = function (str) {
  var hash1 = hasher1(str, this.max);
  var hash2 = hasher2(str, this.max);
  var hash3 = hasher3(str, this.max);
  var maybeInside = this.storage[hash1] && this.storage[hash2] && this.storage[hash3];
  return maybeInside;
};

