contract('CocoCoin', function(accounts) {
    console.log("test start!");
    describe('test1', function() {
        console.log("describe1!");
        it("test1-1", function() {
            console.log("it-1!");
            //ここにテストを記述
        });
        it("test1-2", function() {
            console.log("it-2!");
            //ここにテストを記述
        });
        it("test1-3", function() {
            console.log("it-3!");
            //ここにテストを記述
        });
    });
    describe('test2', function() {
        console.log("describe1!");
        it("test2-1", function() {
            console.log("it2-1!");
            //ここにテストを記述
        });
        it("test2-2", function() {
            console.log("it2-2!");
            //ここにテストを記述
        });
        it("test2-3", function() {
            console.log("it2-3!");
            //ここにテストを記述
        });
    });
});

  /*it("should put 10000 CocoCoin in the first account", function() {
    var meta = CocoCoin.deployed();
console.log(meta.getBalance.call(accounts[0]));
    return meta.getBalance.call(accounts[0]).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    })
  });*/

