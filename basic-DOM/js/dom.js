//   Get by tag practice************************************************************
  
  // console.log( " this is external js file")


// const tags = document.getElementsByTagName('li')
// console.log(tags)
// for( let words of tags){
// console.log( words.innerText)
// }

// Get by ID practice********************************************************





// const ids = document.getElementById( 'section-1') 
// // console.log(ids)
// document.getElementById( 'first').innerText = 'Tasin Evan'
// const itemValueee = document.getElementById('first').innerText 
// console.log(itemValueee)


// get element by className ******************************************************



// const itemValue = document.getElementsByClassName('best-places')
// for( let item of itemValue){
  // console.log(item.innerText)

  // const litems = document.getElementsByTagName('li')

  // for( let product of litems ){
 
  // if (product.innerText.trim() === 'item - 4'){
  //   product.innerText = 'Tasin Evan'
    // console.log(product.innerText)

//   }
// }

// }

// get elemement by query selector ( ID) *************************************

// const items = document.querySelectorAll( '#section-1 li' )
// // console.log(items)
// for( let item of items){
//   console.log( item.innerText)
// }

      // (Class)
// const product = document.querySelectorAll( '.best-places li')

// for ( let item of product ){
// if(item.innerText.trim() === 'item - 6' )
// console.log( item.innerText)
// }


//  dynamic style ***********************************************************

/*
const allItems = document.querySelectorAll('#first-ul li ')
for( let item of allItems ){
item.style.color = 'red'
item.style.backgroundColor = 'yellow'

const attri = item.getAttribute('class')
// console.log( attri)
  item.classList.remove('girl' )
 console.log( item.classList)
}
*/
  // innerHTML********************************************************************
// const htmls = document.getElementsByClassName('best-places')[0].innerHTML = 
// '<h1> life is beautiful</h1>'
// console.log( htmls)

// innerText***********************************************************************
// const htmls = document.getElementsByClassName('best-places')[0].innerText = 'Evan will succeed in his great life'
// console.log( htmls)


//  styling with js ----------------------------------------------------------
/*
const area = document.querySelectorAll('#section-1 li')
for( let item of area){ 

 item.style.border =' 2px solid blue'
 item.style.backgroundColor = 'lightgray' 
}

const parts = document.getElementsByClassName('best-places');
for (let part of parts) {
    part.classList.add('textCenter');
}
*/

// node ********************************************************************
/*
const section = document.getElementsByClassName('best-places')
for( let part of section){
  const child = part.children[3].children[0].nextElementSibling.children[2].previousElementSibling.innerText
  console.log( child)
}

*/

// Adding child************************************************************** 
//  const newItem = document.querySelectorAll('.best-food ')[0]
//  const newlist  = document.createElement('li')
//  newlist.innerText = 'biriyani'
// newItem.appendChild(newlist)
// console.log(newItem)


// ADDING HTML ELEMENT*********************************************************


 