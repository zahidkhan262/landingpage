let furnitureData = [
    { name: 'Wood Chair', img_path: 'f3.jpg', price: 2200 },
    { name: 'Chair', img_path: 'f1.jpg', price: 2900 },
    { name: 'Sofa', img_path: 'f2.jpg', price: 46000 },
    { name: 'Plastic Chair', img_path: 'f4.jpg', price: 2200 },

]
let electronicData = [
    { name: 'samsung', img_path: 'm1.jpg', price: 12000 },
    { name: 'watch', img_path: 'm3.jpg', price: 2000 },
    { name: 'Headphone', img_path: 'm2.jpg', price: 5000 },
    { name: 'Headphone', img_path: 'm4.jpg', price: 5000 },
];

function showAllData() {
    bindData = ""

    electronicData.forEach((items) => {

        bindData += `

        <div class="col-md-3 col-sm-6">
        <div class="card">
            <div class="card-2">
                <img src="${items.img_path}" alt="">
            </div>
            <div class="card-content d-flex-1">
                <div class="left-info">
                    <h6>${items.name}</h6>
                    <span class="price">Rs. ${items.price}</span>
                </div>
                <div class="star-icons">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="add-buy d-flex-1">
                <button class="bnt btn-primary">Buy Now</button>
                <button class="bnt btn-warning">Add Cart</button>
            </div>
        </div> 
        </div> 


        `
    })
    document.getElementById('electronic').innerHTML = bindData;

    bindData = ""

    furnitureData.forEach((items) => {

        bindData += `

        <div class="col-md-3 col-sm-6">
        <div class="card">
            <div class="card-2">
                <img src="${items.img_path}" alt="">
            </div>
            <div class="card-content d-flex-1">
                <div class="left-info">
                    <h6>${items.name}</h6>
                    <span class="price">Rs ${items.price}</span>
                </div>
                <div class="star-icons">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
            <div class="add-buy d-flex-1">
                <button class="bnt btn-primary">Buy Now</button>
                <button class="bnt btn-warning">Add Cart</button>
            </div>
        </div> 
        </div> 


        `
    })
    document.getElementById('furniture').innerHTML = bindData;
}
showAllData();

