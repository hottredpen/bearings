// 目前是伪造的数据获取与存储

var FakeParseTree = function(tree) {
    this.tree = tree;
};
FakeParseTree.prototype.get = function(prop) {
    console.assert(prop === 'tree','get prop not eq `tree` '); // 断言
    return this.tree;
};
FakeParseTree.prototype.set = function() {}
FakeParseTree.prototype.save = function() {}
module.exports = exports = FakeParseTree;
