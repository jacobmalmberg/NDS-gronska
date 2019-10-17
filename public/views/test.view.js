
let formData = new FormData()
formData.append('name', 'john')

let hej = formData.get('name')
console.log(hej);
for(let [name, value] of formData) {
  alert(`${name} = ${value}`); // key1=value1, then key2=value2
}
