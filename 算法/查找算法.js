// 交换两个数组的元素
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
}

// 测试用随机数组
function generateRandomArr(length) {
  var arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * length));
  }
  return arr;
}

// 测试用有序数组
function generateOrderlyArr(num) {
  return generateRandomArr(num).sort((a, b) => a - b);
}

// 检验结果是否正确
function test(arr, data = 100, fun, str) {
  var start = new Date().getTime();
  console.time(str);
  var result = fun(arr, data);
  console.timeEnd(str);
  console.log(
    str +
      " : " +
      (new Date().getTime() - start) +
      "ms" +
      " " +
      (result !== -1 ? `在${result}位置找到该内容${data}` : `没有找到该内容`)
  );
  console.log(str + "结果 : " + result);
}

// 测试原生
// 反柯里化
var uncurrying = function (fn) {
  return function () {
    var args = [].slice.call(arguments, 1);
    return fn.apply(arguments[0], args);
  };
};

/**
 * 顺序查找
 * 第一个元素开始对列表元素逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到
 * */

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === data) return i;
  }
  return -1;
}

/**
 * 二分查找法
 * 必须是已经排序好的而数组
 * */

function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = (upperBound + lowerBound) >> 1;
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 计算元素出现的个数
function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for (let i = position - 1; i > 0; --i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
    for (let i = position + 1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}

console.log("10000000个元素");
var testArr1 = generateRandomArr(10000000);
var myTest1 = test.bind({}, testArr1, 9999);

var indexOf = uncurrying(Array.prototype.indexOf);

console.log("查找无序数组");
myTest1(indexOf, "原生查找");
myTest1(seqSearch, "顺序查找");

console.log("查找有序数组");
var testArr2 = generateOrderlyArr(10000000);
var myTest2 = test.bind({}, testArr2, 9999);
myTest2(binSearch, "二分查找");
myTest2(indexOf, "原生查找");
myTest2(seqSearch, "顺序查找");

console.log(`总共找到9999共${count(testArr2, 9999)}次`);
