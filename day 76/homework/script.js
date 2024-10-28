function same(list1,list2) {
    
list1.forEach(element => {
    list2.forEach(element2 => {
        if(element === element2) {
            console.log(element)
        }
    })
});


}
same([1,2,3,4,5],[2,1,6,7,5])