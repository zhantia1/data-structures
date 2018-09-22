describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });

  it('should use the breadthFirstLog', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  })

  it('should be able to invoke height', function() {
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    expect(binarySearchTree.getHeight()).to.eql(3);
  })

  it('should be able to detect the imbalanceness', function() {
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    expect(binarySearchTree.isBalanced()).to.eql(true);
  })

  it('should be able to rebalance itself', function() {
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    expect(binarySearchTree.getHeight()).to.eql(3);
  })
});
