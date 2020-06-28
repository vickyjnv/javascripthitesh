// var h = document.createElement("h1")
// var myValue = document.createTextNode("hello world")
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)



// var val = 5;
// while (val > 0) {
//     console.log(val);
//     val--;
// }
var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);





function addItem() {


}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++)

        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
}