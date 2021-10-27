
let yourName = "Jada Neal" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      
let cc = 0      
let sugar = 0   

document.getElementById('credit').textContent = `Created by ${'Jada Neal'}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    gb = gb + 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
} )
document.getElementById('minus-gb').addEventListener('click', function(){
    gb = gb - 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
    if (gb < 0) {
        document.getElementById('qty-gb').textContent = 0
    }  
} )
document.getElementById('add-cc').addEventListener('click',function(){
    cc = cc + 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
} )
document.getElementById('minus-cc').addEventListener('click',function(){
    cc = cc - 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
    if (cc < 0) {
        document.getElementById('qty-cc').textContent = 0
    }
} )
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar = sugar + 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
} )
document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar = sugar - 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = (gb + cc + sugar)
    if (sugar < 0) {
        document.getElementById('qty-sugar').textContent = 0
    }  
    
} )