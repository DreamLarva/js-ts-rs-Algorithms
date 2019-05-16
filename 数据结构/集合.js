"use strict";
/**
 * 集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。
 * 集合的两个最重要特性是：首先，集合中的成员是无序的；
 * 其次，集合中不允许相同成员存在。
 * 集合在计算机科学中扮演了非常重要的角色，然而在很多编程语言中，并不把集合当成一种数据类型。
 * 当你想要创建一个数据结构，用来保存一些独一无二的元素时，比如一段文本中用到的单词，集合就变得非常有用。*/
/**
 * 建立集合的基础类型是数组*/
class MySet {
    constructor() {
        this.dataStore = [];
    }
    size() {
        return this.dataStore.length;
    }
    ;
    add(data) {
        if (this.dataStore.indexOf(data) === -1) {
            this.dataStore.push(data);
            return true;
        }
        else {
            return false;
        }
    }
    ;
    addArr(arr) {
        arr.forEach(v => this.add(v));
    }
    ;
    show() {
        return this.dataStore;
    }
    ;
    contains(data) {
        return this.dataStore.indexOf(data) !== -1;
    }
    ;
    // 求两者的并集
    union(set) {
        const tempSet = new MySet();
        this.dataStore.forEach(v => tempSet.add(v));
        for (let i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
    ;
    // 求两者的交集
    intersect(set) {
        const tempSet = new Set();
        this.dataStore.forEach(v => {
            !set.contains(v) && tempSet.add(v);
        });
        return tempSet;
    }
    ;
    // 判断当前集合是不是传入集合的子集
    subset(set) {
        if (this.size() > set.size()) {
            return false;
        }
        else {
            return this.dataStore.every(v => set.contains(v));
        }
    }
    ;
    // 求两个集合的差集(当前集合有,但是传入的集合没有)
    difference(set) {
        const tempSet = new MySet();
        this.dataStore.forEach(v => {
            !set.contains(v) && tempSet.add(v);
        });
        return tempSet;
    }
    ;
}
const S1 = new MySet();
S1.addArr([1, 2, 3, 4, 5, 6, 6]);
const S2 = new MySet();
S2.addArr([1, 4, 5, 6, 7, 8, 9, 10]);
const S3 = new MySet();
S3.addArr([4, 5, 6]);
console.log("union", S1.union(S2));
console.log("intersect", S1.intersect(S2));
console.log("is subset", S3.subset(S2));
console.log("difference", S1.difference(S2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6ZuG5ZCILmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv6ZuG5ZCILnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7d0RBS3dEO0FBQ3hEO2lCQUNpQjtBQUdqQixNQUFNLEtBQUs7SUFBWDtRQUNJLGNBQVMsR0FBUSxFQUFFLENBQUM7SUFrRXhCLENBQUM7SUFoRUcsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRixHQUFHLENBQUMsSUFBTztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLE1BQU0sQ0FBQyxHQUFRO1FBQ1gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUk7UUFDQSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFFRixRQUFRLENBQUMsSUFBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTO0lBQ1QsS0FBSyxDQUFDLEdBQWE7UUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FB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TyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmbhuWQiO+8iHNldO+8ieaYr+S4gOenjeWMheWQq+S4jeWQjOWFg+e0oOeahOaVsOaNrue7k+aehOOAgumbhuWQiOS4reeahOWFg+e0oOensOS4uuaIkOWRmOOAglxyXG4gKiDpm4blkIjnmoTkuKTkuKrmnIDph43opoHnibnmgKfmmK/vvJrpppblhYjvvIzpm4blkIjkuK3nmoTmiJDlkZjmmK/ml6Dluo/nmoTvvJtcclxuICog5YW25qyh77yM6ZuG5ZCI5Lit5LiN5YWB6K6455u45ZCM5oiQ5ZGY5a2Y5Zyo44CCXHJcbiAqIOmbhuWQiOWcqOiuoeeul+acuuenkeWtpuS4reaJrua8lOS6humdnuW4uOmHjeimgeeahOinkuiJsu+8jOeEtuiAjOWcqOW+iOWkmue8lueoi+ivreiogOS4re+8jOW5tuS4jeaKiumbhuWQiOW9k+aIkOS4gOenjeaVsOaNruexu+Wei+OAglxyXG4gKiDlvZPkvaDmg7PopoHliJvlu7rkuIDkuKrmlbDmja7nu5PmnoTvvIznlKjmnaXkv53lrZjkuIDkupvni6zkuIDml6DkuoznmoTlhYPntKDml7bvvIzmr5TlpoLkuIDmrrXmlofmnKzkuK3nlKjliLDnmoTljZXor43vvIzpm4blkIjlsLHlj5jlvpfpnZ7luLjmnInnlKjjgIIqL1xyXG4vKipcclxuICog5bu656uL6ZuG5ZCI55qE5Z+656GA57G75Z6L5piv5pWw57uEKi9cclxuXHJcblxyXG5jbGFzcyBNeVNldDxUPiB7XHJcbiAgICBkYXRhU3RvcmU6IFRbXSA9IFtdO1xyXG5cclxuICAgIHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgYWRkKGRhdGE6IFQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU3RvcmUuaW5kZXhPZihkYXRhKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU3RvcmUucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYWRkQXJyKGFycjogVFtdKSB7XHJcbiAgICAgICAgYXJyLmZvckVhY2godiA9PiB0aGlzLmFkZCh2KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWlucyhkYXRhOiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0b3JlLmluZGV4T2YoZGF0YSkgIT09IC0xO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDmsYLkuKTogIXnmoTlubbpm4ZcclxuICAgIHVuaW9uKHNldDogTXlTZXQ8VD4pIHtcclxuICAgICAgICBjb25zdCB0ZW1wU2V0ID0gbmV3IE15U2V0KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhU3RvcmUuZm9yRWFjaCh2ID0+IHRlbXBTZXQuYWRkKHYpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5kYXRhU3RvcmUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKCF0ZW1wU2V0LmNvbnRhaW5zKHNldC5kYXRhU3RvcmVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU2V0LmRhdGFTdG9yZS5wdXNoKHNldC5kYXRhU3RvcmVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wU2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDmsYLkuKTogIXnmoTkuqTpm4ZcclxuICAgIGludGVyc2VjdChzZXQ6IE15U2V0PFQ+KSB7XHJcbiAgICAgICAgY29uc3QgdGVtcFNldCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGFTdG9yZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAhc2V0LmNvbnRhaW5zKHYpICYmIHRlbXBTZXQuYWRkKHYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGVtcFNldDtcclxuICAgIH07XHJcblxyXG4gICAgLy8g5Yik5pat5b2T5YmN6ZuG5ZCI5piv5LiN5piv5Lyg5YWl6ZuG5ZCI55qE5a2Q6ZuGXHJcbiAgICBzdWJzZXQoc2V0OiBNeVNldDxUPikge1xyXG4gICAgICAgIGlmICh0aGlzLnNpemUoKSA+IHNldC5zaXplKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFTdG9yZS5ldmVyeSh2ID0+IHNldC5jb250YWlucyh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDmsYLkuKTkuKrpm4blkIjnmoTlt67pm4Yo5b2T5YmN6ZuG5ZCI5pyJLOS9huaYr+S8oOWFpeeahOmbhuWQiOayoeaciSlcclxuICAgIGRpZmZlcmVuY2Uoc2V0OiBNeVNldDxUPikge1xyXG4gICAgICAgIGNvbnN0IHRlbXBTZXQgPSBuZXcgTXlTZXQoKTtcclxuICAgICAgICB0aGlzLmRhdGFTdG9yZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAhc2V0LmNvbnRhaW5zKHYpICYmIHRlbXBTZXQuYWRkKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0ZW1wU2V0O1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmNvbnN0IFMxID0gbmV3IE15U2V0KCk7XHJcblMxLmFkZEFycihbMSwgMiwgMywgNCwgNSwgNiwgNl0pO1xyXG5jb25zdCBTMiA9IG5ldyBNeVNldCgpO1xyXG5TMi5hZGRBcnIoWzEsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSk7XHJcbmNvbnN0IFMzID0gbmV3IE15U2V0KCk7XHJcblMzLmFkZEFycihbNCwgNSwgNl0pO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwidW5pb25cIiwgUzEudW5pb24oUzIpKTtcclxuY29uc29sZS5sb2coXCJpbnRlcnNlY3RcIiwgUzEuaW50ZXJzZWN0KFMyKSk7XHJcbmNvbnNvbGUubG9nKFwiaXMgc3Vic2V0XCIsIFMzLnN1YnNldChTMikpO1xyXG5jb25zb2xlLmxvZyhcImRpZmZlcmVuY2VcIiwgUzEuZGlmZmVyZW5jZShTMikpO1xyXG4iXX0=