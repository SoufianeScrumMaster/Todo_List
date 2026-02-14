let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

let arrAll = [];
add.addEventListener('click',function(e){
    e.preventDefault();
    if (input.value != "") {
        let div = document.createElement('div');
        div.classList.add('flex')
        let p = document.createElement('p');
        p.innerHTML = input.value;
        let del = document.createElement('button');
        del.classList.add('delete')
        del.innerHTML = "Delete";
        div.appendChild(p);
        div.appendChild(del);
        tasks.appendChild(div);
        arrAll.push(input.value);
        window.localStorage.setItem("element", JSON.stringify(arrAll));
        input.value = ""
    }
})

if (window.localStorage.getItem("element")) {
    arrAll = arrAll.concat(JSON.parse(window.localStorage.getItem("element")))
    arrAll.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('flex')
        let p = document.createElement('p');
        p.innerHTML = item;
        let del = document.createElement('button');
        del.classList.add('delete')
        del.innerHTML = "Delete";
        div.appendChild(p);
        div.appendChild(del);
        tasks.appendChild(div);
        del.addEventListener('click',function(e){
            arrAll.forEach((element, index) => {
                let el = e.currentTarget.parentElement.querySelector('p').innerHTML
                if(el === element){
                    arrAll.splice(index,1)
                    window.localStorage.setItem("element", JSON.stringify(arrAll))
                    e.currentTarget.parentElement.remove();
                }
            })
        })
    })
}
