/**
 * Javascript中对应的是Object 所以这边也没什么卵用
 * Dictionay 类的基础是 Array 类(其实Object也可以)
 * 对字典中的键排序，而 JavaScript 中是不能对对象的属性进行排序的
 * */
function Dictionary() {
  this.dataStore = [];
}

Dictionary.prototype.add = function (key, value) {
  this.dataStore[key] = value;
  return this;
};
Dictionary.prototype.find = function (key) {
  return this.dataStore[key];
};
Dictionary.prototype.remove = function (key) {
  delete this.dataStore[key];
};
Dictionary.prototype.showAll = function () {
  Object.keys(this.dataStore)
    .sort()
    .forEach((v) => console.log(v + " -> " + this.dataStore[v]));
};
Dictionary.prototype.count = function () {
  var n = 0;
  Object.keys(this.dataStore).forEach((v) => n++);
  return n;
};
Dictionary.prototype.clear = function () {
  this.dataStore = [];
};

var D = new Dictionary();
D.add("1A", "1").add("3B", "2").add("2C", "3").add("1", "abc");
console.log(D.find("1A"));
D.showAll();
console.log(D.count());
