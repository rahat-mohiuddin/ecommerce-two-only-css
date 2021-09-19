// Floating Cart
let cartBtn = document.querySelector('#cartBtn');
let closeBtn = document.querySelector('.close-cart');
let cartDiv = document.querySelector('.floating-cart');
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartDiv.classList.add('cartDiv');
});
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartDiv.classList.remove('cartDiv');
});

//floating my account
let myAccountBtn = document.getElementById('myAccount');
let myAccount = document.getElementById('myAccountBox');
myAccountBtn.onclick = (e) => {
    e.preventDefault();
    myAccount.classList.toggle('active');
}

//===========js for Search Bar=================//
let searchBox = document.querySelector('.search-bar');
let searchInput = searchBox.querySelector('input');
let searchSuggestion = searchBox.querySelector('.search-suggestion ul');

searchInput.addEventListener('keyup', (input) => {
    let userData = input.target.value;
    let emptyArr = [];
    if (userData) {
        emptyArr = searchKeywords.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArr = emptyArr.map((data) => {
            return `<li>${data}</li>`;
        })
        searchSuggestion.parentElement.classList.add('active');
        showSuggestion(emptyArr);

        let suggestedList = searchSuggestion.querySelectorAll('li');
        suggestedList.forEach((list) => {
            list.setAttribute('onMouseOver', 'selectSuggestedOne(this)');
            list.onclick = () => {
                searchSuggestion.parentElement.classList.remove('active');
            }
        });


    } else {
        searchSuggestion.parentElement.classList.remove('active');
    }

});
document.onclick = () => {
    searchSuggestion.parentElement.classList.remove('active');
}

function selectSuggestedOne(input) {
    let selectedText = input.textContent;
    searchInput.value = selectedText;

}

function showSuggestion(data) {
    let dataList;
    if (!data.length) {
        dataList = searchInput.value;
    } else {
        dataList = data.join('');

    }
    searchSuggestion.innerHTML = dataList;
}


//===========js for Checkout Page=================//
//form validation
const Name = document.getElementById('name');
const Name2 = document.getElementById('name2');
const Phone = document.getElementById('phone');
const Email = document.getElementById('email');
const Country = document.getElementById('country');
const City = document.getElementById('city');
const FullAddress = document.getElementById('fullAddress');
//Diffrent Address
const NameD = document.getElementById('nameD');
const Name2D = document.getElementById('name2D');
const PhoneD = document.getElementById('phoneD');
const EmailD = document.getElementById('emailD');
const CountryD = document.getElementById('countryD');
const CityD = document.getElementById('cityD');
const FullAddressD = document.getElementById('fullAddressD');

function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const message = formControl.querySelector('small');
    message.innerText = msg;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        let formControl = input.parentElement;
        let inputLabel = formControl.querySelector('label');
        let inputName = inputLabel.innerText;
        if (input.value.trim() === '') {
            showError(input, `${inputName} is Required`);
        } else {
            showSuccess(input);
        }
    });
}
//for validate select option in form
function validateSelect(inputArray) {
    inputArray.forEach(function(input) {
        let formControl = input.parentElement;
        let inputLabel = formControl.querySelector('label');
        let inputName = inputLabel.innerText;
        if (input.value === 'select') {
            showError(input, `${inputName} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

let orderBtn = document.getElementById('orderButton');
orderBtn.addEventListener('click', function() {
    checkRequired([Name, Name2, Phone, Email, FullAddress, NameD, Name2D, PhoneD, EmailD, FullAddressD]);
    validateSelect([Country, City, CountryD, CityD]);
    // show warning if  terms and conditions are not checked
    let tearmsAndCondiWorning = document.querySelector('.warning-alert');
    let tearmsCheckbox = document.querySelector('#terms');
    if (tearmsCheckbox.checked) {
        tearmsAndCondiWorning.style.visibility = "hidden";
    } else {
        tearmsAndCondiWorning.style.visibility = "initial";
    }
});

let tearmsClose = document.querySelector('.warning-alert .close');
tearmsClose.addEventListener('click', () => {
    tearmsClose.parentElement.style.visibility = "hidden";
});


//diffrent address
function showDiffAdd() {
    let diffrentAddInput = document.querySelector('#ship-to-diff');
    let diffrentAddress = document.querySelector('.diffrent-add-form');
    if (diffrentAddInput.checked) {
        diffrentAddress.classList.add('active');
    } else {
        diffrentAddress.classList.remove('active');
    }
}

//payment option
const CoD = document.getElementById('cod');
const Bkash = document.getElementById('bkash');
const Nagad = document.getElementById('nagad');


function paymentTitle(inputArr) {
    inputArr.forEach(function(PayOption) {
        if (PayOption.checked) {
            let Label = PayOption.parentElement;
            let Title = Label.querySelector('small');
            Title.style.display = 'block';
        } else {
            let Label = PayOption.parentElement;
            let Title = Label.querySelector('small');
            Title.style.display = 'none';
        }
    });
}

const payParent = document.getElementById('paymentOption');
const allPayOption = payParent.querySelectorAll('input');

allPayOption.forEach(input => {
    input.addEventListener('click', () => {
        paymentTitle([CoD, Bkash, Nagad]);
    });

});


// Single Product Details Text Start
const productDetails = document.querySelector(".details_text");
var moreText = document.querySelector(".more_text");
var readMoreBtn = document.querySelector(".read_more");
readMoreBtn.onclick = () => {
    alert('its ok');
}


// Single Product Thumbnail Image
let thumbImage = document.querySelector('.thumb_item').children;

function changeImg(e) {
    document.querySelector('.mainImage').src = e.children[0].src;
    thumbImage.classList.add("active");
}
