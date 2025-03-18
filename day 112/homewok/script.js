class str {
    constructor(reverse,check,check2) {
        this.reverse = reverse;
        this.check = check;
        this.check2 = check2;
    }
    get reverse() {
        return this.reverse.split('').reverse().join('');
    } 

    get check() {
        let arr = [];
        for (let i of this.check) {
            for (let n of this.check2) {
                if (i === n && !arr.includes(i)) {
                    arr.push(i);
                }
            }
        }
        return arr.length;
    }
}


class math {
    constructor(PI, E, DEFAULT_PRECISION) {
        this.PI = PI;
        this.E = E;
        this.DEFAULT_PRECISION = DEFAULT_PRECISION;
    }
    get E() {
        if(this.E % 10 === 0 && this.E % 5 === 0) {
            return true
        }else{
            return false
        }
    }

    get PI() {
        return this.PI.round()
    }
}

let res = new str('hello','hello','hello');
console.log(res.reverse);
console.log(res.check);
console.log(res.check2);