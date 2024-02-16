var a = document.getElementById('main')

var inpu = document.getElementById("inp")

function create (){
    var p = document.createElement('p')
    p.setAttribute('class','practice')
    p.setAttribute('id','p1')
    console.log(p)
    a.appendChild(p)
    console.log(inpu.value)
    p.innerHTML = inpu.value
     var x = document.createElement("BUTTON")
    // var txt = document.createTextNode('hello')
    x.setAttribute('onclick','delfunction(this)')
    // x.appendChild("button")
    x.innerHTML = "Delete Button"
    p.appendChild(x)
    var e = document.createElement("button")
    e.setAttribute('onclick','edit()')
    e.innerHTML = "Edit Button"
    p.appendChild(e)

    
}

function deletAll(){
   a.innerHTML = ""
   console.log(deletAll)
}

function delfunction (ele){
   var a = ele.parentElement
   a.remove()

}

function edit(index) {
    if (a !== null) {
        // a[index].text = a.trim();
      var xy = alert =  prompt("Edit your todo")
      console.log(xy)
      var a = xy 
    }
    
}