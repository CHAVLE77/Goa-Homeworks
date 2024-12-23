function customGetElementById(id) {
    const allElements = document.getElementsByTagName('*');
    
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].id === id) {
            return allElements[i]; 
        }
    }
    
    return null; 
}


const myElement = customGetElementById('example-id');
console.log(myElement);
