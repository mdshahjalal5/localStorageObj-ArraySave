const getElement = id =>{
    const element = document.getElementById(id);
    return element;
}

// Add Object to local storage 
const addObjToLocalStorage = () =>{
    const productsObj = getElement('product-obj').value;
    const quantityObj = getElement('quantity-obj').value; 
    // console.log(productsObj, quantityObj);

    const savedObj = localStorage.getItem('finalProducts');
    let finalProducts = {};
    if(savedObj){
        finalProducts = JSON.parse(savedObj);
    }
    finalProducts[productsObj] = quantityObj;
    // console.log(finalProducts);
    localStorage.setItem('finalProducts',JSON.stringify(finalProducts));
    displayObject();
}

const removeObjStorage = () =>{
    localStorage.removeItem('finalProducts');
    displayObject();
}

const displayObject = () =>{
    const finalProducts = JSON.parse(localStorage.getItem('finalProducts'));
    const ObjectContainer = getElement('obj-container');
    ObjectContainer.innerHTML =     ``;
    for(const product in finalProducts){
        const li = document.createElement('li');
        li.innerText = `${product} : ${finalProducts[product]}  ` ;
        ObjectContainer.appendChild(li);
    }
}
displayObject();
// add Array  to local storage 

const addArrayToLocalStorage = () =>{
    const productArray = getElement('product-array').value;
    const quantityArray = getElement('quantity-array').value;
    const savedArray = localStorage.getItem('finalArray');

    if(!savedArray){
       const todoList = [
           {
               name:productArray,
               isComplete:false,
               quantity: quantityArray
           }
       ];
       console.warn(todoList);
       localStorage.setItem('finalArray',JSON.stringify(todoList));
    }
    else{
        const todoList = [
            ...JSON.parse(savedArray),
            {
                name:productArray,
                isComplete:false,
                quantity:quantityArray,
            }
        ];
        console.log(todoList);
        localStorage.setItem('finalArray',JSON.stringify(todoList))
    }
    displayArray();
};

const removeArrayStorage = () =>{
    localStorage.removeItem('finalArray');
    displayArray();
}

function displayArray (){
    const finalArray = JSON.parse(localStorage.getItem('finalArray'));
    console.log(finalArray);
    const arrayContainer = getElement('array-container');
    arrayContainer.innerHTML = '';
    finalArray.forEach(singleProduct => {
        for(const property in singleProduct){
            console.log(property);
            console.log(singleProduct[property]);
            const li = document.createElement('li');
            li.innerText =`${property} : ${singleProduct[property]}`
            arrayContainer.appendChild(li);
        }
    });
};

displayArray();