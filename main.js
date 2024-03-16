import './style.css'
const products = [
  {
    id: 1,
    name: 'The-blue-split-leaf-resort-shirt',
    price: 10.99,
    image: '/asimg/dress1.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 2,
    name: 'The-zazzle-resort-shirt',
    price: 12.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 3,
    name: 'The-red-indian-clan-shirt ',
    price: 14.49,
    image: '/asimg/dress3.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 4,
    name: 'The-vintage-Huma-shirt',
    price: 20.99,
    image: '/asimg/dress5.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 2
  },
  {
    id: 5,
    name: 'The-blue-split-leaf-resort-shirt ',
    price: 12.99,
    image: './asimg/dress5.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 6,
    name: 'The-zazzle-resort-shirt ',
    price: 10.99,
    image: '/asimg/dress6.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 7,
    name: 'The-red-indian-clan-shirt ',
    price: 16.99,
    image: '/asimg/dress7.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },

  {
    id: 8,
    name: 'The-vintage-Huma-shirt',
    price: 18.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },
  {
    id: 9,
    name: 'The-vintage-Huma-shirt',
    price: 12.99,
    image: '/asimg/dree9.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 2
  },
  {
    id: 10,
    name: 'The-blue-split-leaf-resort-shirt',
    price: 20.99,
    image: '/asimg/dress10.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 11,
    name: 'The-zazzle-resort-shirt',
    price: 16.99,
    image: '/asimg/paprika11.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 12,
    name: 'The-red-indian-clan-shirt ',
    price: 20.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },
  {
    id: 13,
    name: 'The-blue-split-leaf-resort-shirt',
    price: 10.99,
    image: '/asimg/dress1.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 14,
    name: 'The-zazzle-resort-shirt',
    price: 12.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 15,
    name: 'The-red-indian-clan-shirt ',
    price: 14.49,
    image: '/asimg/dress3.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 16,
    name: 'The-vintage-Huma-shirt',
    price: 20.99,
    image: '/asimg/dress5.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 2
  },
  {
    id: 17,
    name: 'The-blue-split-leaf-resort-shirt ',
    price: 12.99,
    image: './asimg/dress5.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 18,
    name: 'The-zazzle-resort-shirt ',
    price: 10.99,
    image: '/asimg/dress6.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 19,
    name: 'The-red-indian-clan-shirt ',
    price: 16.99,
    image: '/asimg/dress7.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },

  {
    id: 20,
    name: 'The-vintage-Huma-shirt',
    price: 18.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },
  {
    id: 21,
    name: 'The-vintage-Huma-shirt',
    price: 12.99,
    image: '/asimg/dree9.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 2
  },
  {
    id: 22,
    name: 'The-blue-split-leaf-resort-shirt',
    price: 20.99,
    image: '/asimg/dress10.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 23,
    name: 'The-zazzle-resort-shirt',
    price: 16.99,
    image: '/asimg/paprika11.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 24,
    name: 'The-red-indian-clan-shirt ',
    price: 20.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  }
]
const lists = ['home', 'aboutus', 'login', 'buynow', 'logout']
const modelos = []
let model = ''
let PRICE = parseInt('')

const fillmodels = (item) => {
  for (const item of products) {
    const productName = item.name.trim()
    if (!modelos.includes(productName)) {
      modelos.push(item.name)
    }
  }
}
fillmodels(products)
const uniquemodels = [...new Set(modelos)]
const filtrar = () => {
  const filtred = products.filter((product) => {
    if (product.name == model) {
      return product
    }
  })

  printproducts(filtred)
}
const filtrarbyall = () => {
  if (selectormodel.selectedIndex == 0) {
    const filteredData = products.filter((product) => {
      if (product.price == PRICE) {
        return product
      }
    })
    if (filteredData.length == 0) {
      alert('No items match the criteria. Please reset filters.')
    }
    printproducts(filteredData)
  } else {
    const selectedModel = model

    const filteredData = products.filter((product) => {
      if (product.name === selectedModel && product.price <= PRICE) {
        return product
      }
    })
    if (filteredData.length == 0) {
      alert('No items match the criteria. Please reset filters.')
    }

    printproducts(filteredData)
  }
}

const header = document.querySelector('header')
const img = document.createElement('img')
img.src = './asimg/logo.png'
img.className = 'logo'
const navhead = document.createElement('nav')
navhead.className = 'home'
const ulhead = document.createElement('ul')
ulhead.className = 'flex-container'

const btnmenu = document.createElement('button')
btnmenu.className = 'menu'

const btnimg = document.createElement('img')
btnimg.src = './asimg/menu.png'
for (const list of lists) {
  const lihead = document.createElement('li')
  lihead.textContent = list
  ulhead.appendChild(lihead)
}
btnmenu.addEventListener('click', () => {
  navhead.classList.toggle('menu_vertical')

  console.log(ulhead)
})
header.appendChild(img)

navhead.appendChild(ulhead)
header.appendChild(navhead)
btnmenu.appendChild(btnimg)
header.appendChild(btnmenu)

const maindiv = document.querySelector('#app')
const aside = document.createElement('div')
aside.className = 'side_filter'
maindiv.appendChild(aside)
//-----putting filter-------//
//putting selector on the leftside
const divfilter = document.createElement('div')
divfilter.className = 'mainfilter'
//creating the selector for price

//filter for star
const selectormodel = document.createElement('select')

const maintitle1 = document.createElement('Option')
maintitle1.textContent = 'elige un modelo'
maintitle1.disabled = true
selectormodel.appendChild(maintitle1)
uniquemodels.forEach((uniquemodel) => {
  const optionmodel = document.createElement('option')
  optionmodel.textContent = uniquemodel
  optionmodel.value = uniquemodel

  selectormodel.selectedIndex = 0
  selectormodel.appendChild(optionmodel)
})
selectormodel.addEventListener('change', (e) => {
  model = e.target.value
  filtrar()
})
//selecting price
const priceinput = document.createElement('input')
priceinput.id = 'input'
priceinput.type = 'number'
priceinput.min = 10
priceinput.max = 20
priceinput.step = 2
priceinput.className = 'inputprice'
priceinput.placeholder = 'enter your max price'
const buttondiv = document.createElement('div')
buttondiv.className = 'buttondiv'
const pricebutton = document.createElement('button')
pricebutton.textContent = 'filtrar'
pricebutton.addEventListener('click', () => {
  PRICE = priceinput.value
  filtrarbyall()
})
const resetbutton = document.createElement('button')
resetbutton.id = 'reset'
resetbutton.textContent = 'resetfilters'
resetbutton.addEventListener('click', () => {
  selectormodel.selectedIndex = 0
  priceinput.value = ''
  printproducts(products)
})
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filtrar()
  }
})
divfilter.appendChild(selectormodel)
aside.appendChild(divfilter)
divfilter.appendChild(priceinput)
buttondiv.appendChild(pricebutton)
aside.appendChild(buttondiv)
aside.appendChild(resetbutton)
//creating products on the rightside
const productscontainer = document.createElement('div')
productscontainer.className = 'productscontiner'
const printproducts = (items) => {
  productscontainer.innerHTML = ''
  for (const product of items) {
    const productdiv = document.createElement('div')
    productdiv.className = 'product'
    const imgdiv = document.createElement('div')
    imgdiv.className = 'productsize'
    const productimage = document.createElement('img')
    productimage.src = product.image
    imgdiv.appendChild(productimage)
    productdiv.appendChild(imgdiv)
    const hoverdiv = document.createElement('div')
    hoverdiv.className = 'love'
    const lovebutton = document.createElement('button')
    const buynowbutton = document.createElement('button')
    const loveimg = document.createElement('img')
    const buynowimg = document.createElement('img')
    const productname = document.createElement('h3')
    productname.textContent = product.name
    const precio = document.createElement('p')
    precio.textContent = `${product.price}€`
    const divstars = document.createElement('div')
    divstars.className = 'points'
    for (let i = 0; i < 5; i++) {
      const divpoint = document.createElement('div')
      divpoint.className = 'stars'
      if (product.stars > i) {
        divpoint.classList.add('fill')
      }
      divstars.appendChild(divpoint)
    }
    loveimg.src = product.imagelove
    buynowimg.src = product.imagecov
    lovebutton.appendChild(loveimg)
    buynowbutton.appendChild(buynowimg)
    hoverdiv.appendChild(lovebutton)
    hoverdiv.appendChild(buynowbutton)
    productdiv.appendChild(productname)
    productdiv.appendChild(hoverdiv)
    productdiv.appendChild(precio)
    productdiv.appendChild(divstars)
    productscontainer.appendChild(productdiv)
  }
}
maindiv.appendChild(productscontainer)
printproducts(products)
