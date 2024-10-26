function same(list1,list2) {
    
    for(let i = 0; i < list1.length;i++) {

        for(let n = 0; n < list2.length;n++){

            if(list1[i] === list2[n]) {
                console.log(list1[i])
            }
        } 
    }


}
same([1,2,3,4,5],[2,1,6,7,5])