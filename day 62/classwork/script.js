for(let i = 0;i<=100;i++) {
    var arr = []
    arr.push(i)
    console.log(arr)
}
let sum = 0

arr.forEach(function(nums) {
    if(arr[nums] % 2 === 0){
        sum+=arr[nums]
    }
    console.log(sum)

})


let arr2 = [1,2,3];
console.log(arr2[3]);

let arr3 = [0,1,2,3,4,5,6];

arr3.push(7);//დავამათეთ 7 ლისტში
arr3.push(2)//დავამატე 2 იანი ლისტში
arr3.pop();//ბოლო ელემენტი მოვაკელით
arr3.pop()//ბოლო ელემენტი მოვაკელით
arr3.shift();//შლისს სიის დასაწყისიდან
arr3.unshift();//ამატების სიის დასაწყისში
arr3.slice(4);//მე 4 ინდექსზე მყოფი ელემენტი ჩამოვაჭერი
arr3.slice(2)//მე 2 ინდექსზე მყოფი ელემენტი ჩამოვაჭერი
arr3.splice(1,0,3);//დავამატე ციფრი 3 ანი 1 ინდექსზე
console.log(arr3)//დავბეჭდე საბოლოოდ სია

//sort() ალაგებს სიას

function manualIndexOf(value,arr){
    if (value===arr){
        arr.indexof(value)
    } else{
        return -1
    }
}

manualIndexOf(3,[1,2,3])


const arr4 = [1,2,3,4,5,6]
arr4.indexOf(2);
arr4.indexof(4)
arr4.indexof(5);//პოულობს მითითებული რიცხვის ინდექს
arr4.lastIndexOf();//პოულობს სიის ბოლო ინდექსზე მყოფ რიცხვს
arr4.sort();//ალაგებს სიას
arr4.reverse();//აბრუნებს სიას პირიქით