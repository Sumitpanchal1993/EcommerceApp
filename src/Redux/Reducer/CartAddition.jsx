const defaultState = [
    {
        id: 1,
        image: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png',
        name: 'Product Name',
        color: 'greeen',
        volume: '1l',
        packing: 'RGBY',
        qty: 10,
        price: '500'
    }
] 
function cartAddbtn(state = defaultState, action){
    switch (action.type) {
        case addToCart:
            return(

            )
            break;
    
        default:
            break;
    }
}