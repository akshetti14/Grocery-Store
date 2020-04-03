const items=[
"Apple",
"Orange",
"Chilly",
"Waffles",
"Pies",
"Breads",
"Eggs",
"Oreo",
"Pringles",
"Dates",
"Cheese",
"Beverages",
"Milk",
"Macrooni",
"Meat",
"Salmon"
]

const createItems =() =>{
const list = document.createElement('ol')

for(let i=0;i<items.length;i++){
  const item=document.createElement('li')

  item.appendChild(document.createTextNode(items[i]))
  list.appendChild(item)

}
return list

}
document.getElementById('list').appendChild(createItems())
