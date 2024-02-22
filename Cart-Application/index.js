import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://realtime-database-235ac-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const cartListInDB = ref(database, "Cart-List");











const addtocartBtnEl = document.getElementById("addtocart-button");
const addtocartInputEl = document.getElementById("addtocart-input");
const cartlistEl = document.getElementById("cartlist");


addtocartBtnEl.addEventListener("click", function() {
    let inputValue = addtocartInputEl.value;

    clearInputFieldEl();

    push(cartListInDB, inputValue);    
})

onValue(cartListInDB, function(snapshot) {

    if(snapshot.exists()) {

        let cartItemsArray = Object.entries(snapshot.val());

        clearCartListEl();

        for(let i = 0; i < cartItemsArray.length; i++) {

            let currentItem = cartItemsArray[i];

            appendToCartListEl(currentItem);
        }
    }
    else {
        cartlistEl.innerHTML = " No items added pal ...!"
    }

})

function clearInputFieldEl() {
    addtocartInputEl.value = "";
}

function appendToCartListEl(cartItem) {

    let itemID = cartItem[0];

    let itemValue = cartItem[1];

    let newEl = document.createElement("li");

    newEl.textContent = itemValue;

    cartlistEl.append(newEl);

    newEl.addEventListener("dblclick", () => {

        let itemLocationInDB = ref(database, `Cart-List/${itemID}`);

        remove(itemLocationInDB);
    })
}

function clearCartListEl() {
    cartlistEl.innerHTML = "";
}