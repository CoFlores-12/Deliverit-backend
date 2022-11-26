const categories = [{
  "_id": {
    "$oid": "636ad8ba6f5c87142282b9c2"
  },
  "name": "Restaurants",
  "color": "#ff9e00",
  "icon": "https://deliverit-cdn.netlify.app/assets/iconos/comida-rapida.png"
},{
  "_id": {
    "$oid": "636ad93f6f5c87142282b9c3"
  },
  "name": "Supermarket",
  "color": "#691b9a",
  "icon": "https://deliverit-cdn.netlify.app/assets/iconos/tienda.png"
},{
  "_id": {
    "$oid": "636ad9596f5c87142282b9c4"
  },
  "name": "Drinks",
  "color": "#1b9a8f",
  "icon": "https://deliverit-cdn.netlify.app/assets/iconos/coctel.png"
},{
  "_id": {
    "$oid": "636ad97b6f5c87142282b9c5"
  },
  "name": "Health",
  "color": "#558b2f",
  "icon": "https://deliverit-cdn.netlify.app/assets/iconos/salud.png"
},{
  "_id": {
    "$oid": "636ad99b6f5c87142282b9c6"
  },
  "name": "Tech",
  "color": "#c50b0b",
  "icon": "https://deliverit-cdn.netlify.app/assets/iconos/gadgets.png"
}];
const stores = [
    { 
      "name": "istmania", 
      "logo": "https://market.istmania.hn/assets/img/istmaniaLogo.png", 
      "banner": "https://market.istmania.hn/assets/img/carousel/SLIDER43.png", 
      "category": {
        "id": {
          "$oid": "636ad9596f5c87142282b9c4"
        },
        "name": "Drinks"
      },
      "location": {
        "lat": 14.0628106,
        "lng": -87.2196977
      },
      "products": [ 
        { 
          "name": "AGUARDIENTE TATASCAN", 
          "img": "https://market.istmania.hn/assets/001001026.png", 
          "price": 89.76, 
          "description": "36° PET 1000 ML" 
        },
        { 
          "name": "BOTRAN 18 AÑOS", 
          "img": "https://market.istmania.hn/assets/016002079.png", 
          "price": 905.76, 
          "description": "2DA BOTELLA AL 50%" 
        },
        { 
          "name": "RON BOTRAN ORO", 
          "img": "https://market.istmania.hn/assets/016002069.png", 
          "price": 154.76, 
          "description": "5- SOLERA 750ML V-A20" 
        },
        { 
          "name": "VINO UNDURRAGA", 
          "img": "https://market.istmania.hn/assets/008001007.png", 
          "price": 112.34, 
          "description": "CHARDONNAY VARIETAL" 
        },
        { 
          "name": "PROMO 2 SIX PACK VICTORIA VIDRIO + JARRA", 
          "img": "https://market.istmania.hn/assets/059001010.png", 
          "price": 264, 
          "description": "" 
        },
        { 
          "name": "CERVEZA PERLA NEGRA MAR DE GLORIA", 
          "img": "https://market.istmania.hn/assets/062001004.png", 
          "price": 50, 
          "description": "355 ML" 
        },
        { 
          "name": "TEQUILA JOSE CUERVO", 
          "img": "https://market.istmania.hn/assets/015013001.png", 
          "price": 551.06, 
          "description": " ESPECIAL ORO 1000 ML" 
        },
        { 
          "name": "JCUERVO ORO", 
          "img": "https://market.istmania.hn/assets/015013039.png", 
          "price": 416.45, 
          "description": "750 ML DIA DE LOS MUERTOS" 
        },
        { 
          "name": "WHISKY JACK DANIELS", 
          "img": "https://market.istmania.hn/assets/007001001.png", 
          "price": 897.98, 
          "description": "750 ML" 
        },
        { 
          "name": "WHISKY OLD PARR SILVER", 
          "img": "https://market.istmania.hn/assets/015007004.png", 
          "price": 978.81, 
          "description": "750 ML" 
        },
        
      ] 
    },
    { 
      "name": "Pizza Hut City Mall", 
      "logo": "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png", 
      "banner": "https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.18169-9/11205500_457521241076789_8210745353898187722_n.png?stp=dst-png_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=05277f&_nc_ohc=NW2BJGm6b58AX-neYUb&_nc_oc=AQkblGyliOmiAdnNlqwvuZUpw3qFWsHOIPFxES9V7MUi3UmctEl9hZMBH4JfGk4Bte4&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfAEywNxz9jGqjFinAZXj5F6hsrXO0QfomHvhe5e7QQhGQ&oe=63A89350", 
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "location": {
        "lat": 14.0628106,
        "lng": -87.2196977
      },
      "products": [ 
        { 
          "name": "MY BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/MyBox.png", 
          "price": 99.00, 
          "description": "1 Pizza rectangular dividida en 6 piezas, 4 palitroques y 1 bebida de tu elección." 
        } ,
        { 
          "name": "2 COMBOS PAN PIZZA PERSONAL", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/COMBPIZPER.png", 
          "price": 199.00, 
          "description": "2 combos de pizza personales, 2 papas wedges, 2 bebida medio por L 199." 
        },         
        { 
          "name": "WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/Wow%20Box.png", 
          "price": 649.00, 
          "description": "1 pizza gigante de un ingrediente, 8 pan de ajo y 18 pechurricas." 
        } ,
        { 
          "name": "TRIPLE WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/TripleWOWBOX.jpg", 
          "price": 699.00, 
          "description": "2 pizzas gigantes, 10 palitroques y 12 pechurrricas." 
        },
        { 
          "name": "DETROIT STYLE PIZZA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PDetroi.png", 
          "price": 269.00, 
          "description": "Detroit-Style Pizza de masa gruesa y ligera en forma rectangular con bordes crujientes con queso dorado y salsa especial premium elaborada con tomates selectos madurados naturalmente. Disponible en dos recetas Pepperoni y Suprema." 
        },
        { 
          "name": "4 ESTACIONES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg", 
          "price": 199.00, 
          "description": "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón." 
        } ,
        { 
          "name": "String", 
          "img": "String", 
          "price": 299.00, 
          "description": "String" 
        } ,
        { 
          "name": "SUPER SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde." 
        } ,
        { 
          "name": "MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits." 
        } ,
        { 
          "name": "SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg", 
          "price": 279.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, champiñones, chile verde y cebolla." 
        } ,
        { 
          "name": "PEPPERONI O JAMÓN LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg", 
          "price": 279.00, 
          "description": "Pepperoni o jamón en abundancia, queso 100% mozzarella." 
        } ,
        { 
          "name": "HUT BONELESS BARBECUE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUTBONBA.png", 
          "price": 179.00, 
          "description": "Crujientes pechugitas de pollo empanizadas, horneadas y bañadas en salsa barbecue de la casa." 
        } ,
        { 
          "name": "PAN DE AJO SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png", 
          "price": 99.00, 
          "description": "Pan de ajo con capa de queso mozzarella." 
        } ,
        { 
          "name": "PALITROQUES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/00910.png", 
          "price": 79.00, 
          "description": "Diez piezas de pan italiano acompañados con salsa bolognesa." 
        } ,
        { 
          "name": "CALZONE MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png", 
          "price": 149.00, 
          "description": "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa." 
        } ,
        { 
          "name": "CALZONE SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png", 
          "price": 149.00, 
          "description": "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa." 
        },
        { 
          "name": "ULTIMATE HERSHEY'S CHOCOLATE CHIP COOKIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/GALLETA.png", 
          "price": 179.00, 
          "description": "Crujiente galleta horneada con chispas de chocolate Hershey´s." 
        } ,
        { 
          "name": "PECAN PIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/PECAN%20PIE.png", 
          "price": 89.00, 
          "description": "Tu pastel favorito de nueces de pecanas bañado con chocolate." 
        }
      ] 
    },
    { 
      "name": "Pizza Hut Residencial Centroamérica", 
      "logo": "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png", 
      "banner": "https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.18169-9/11205500_457521241076789_8210745353898187722_n.png?stp=dst-png_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=05277f&_nc_ohc=NW2BJGm6b58AX-neYUb&_nc_oc=AQkblGyliOmiAdnNlqwvuZUpw3qFWsHOIPFxES9V7MUi3UmctEl9hZMBH4JfGk4Bte4&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfAEywNxz9jGqjFinAZXj5F6hsrXO0QfomHvhe5e7QQhGQ&oe=63A89350", 
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "location": {
        "lat": 14.0911613,
        "lng": -87.2353717
      },
      "products": [ 
        { 
          "name": "MY BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/MyBox.png", 
          "price": 99.00, 
          "description": "1 Pizza rectangular dividida en 6 piezas, 4 palitroques y 1 bebida de tu elección." 
        } ,
        { 
          "name": "2 COMBOS PAN PIZZA PERSONAL", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/COMBPIZPER.png", 
          "price": 199.00, 
          "description": "2 combos de pizza personales, 2 papas wedges, 2 bebida medio por L 199." 
        },         
        { 
          "name": "WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/Wow%20Box.png", 
          "price": 649.00, 
          "description": "1 pizza gigante de un ingrediente, 8 pan de ajo y 18 pechurricas." 
        } ,
        { 
          "name": "TRIPLE WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/TripleWOWBOX.jpg", 
          "price": 699.00, 
          "description": "2 pizzas gigantes, 10 palitroques y 12 pechurrricas." 
        },
        { 
          "name": "DETROIT STYLE PIZZA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PDetroi.png", 
          "price": 269.00, 
          "description": "Detroit-Style Pizza de masa gruesa y ligera en forma rectangular con bordes crujientes con queso dorado y salsa especial premium elaborada con tomates selectos madurados naturalmente. Disponible en dos recetas Pepperoni y Suprema." 
        },
        { 
          "name": "4 ESTACIONES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg", 
          "price": 199.99, 
          "description": "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón." 
        } ,
        { 
          "name": "String", 
          "img": "String", 
          "price": 299.00, 
          "description": "String" 
        } ,
        { 
          "name": "SUPER SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde." 
        } ,
        { 
          "name": "MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits." 
        } ,
        { 
          "name": "SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg", 
          "price": 279.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, champiñones, chile verde y cebolla." 
        } ,
        { 
          "name": "PEPPERONI O JAMÓN LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg", 
          "price": 279.00, 
          "description": "Pepperoni o jamón en abundancia, queso 100% mozzarella." 
        } ,
        { 
          "name": "HUT BONELESS BARBECUE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUTBONBA.png", 
          "price": 179.00, 
          "description": "Crujientes pechugitas de pollo empanizadas, horneadas y bañadas en salsa barbecue de la casa." 
        } ,
        { 
          "name": "PAN DE AJO SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png", 
          "price": 99.00, 
          "description": "Pan de ajo con capa de queso mozzarella." 
        } ,
        { 
          "name": "PALITROQUES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/00910.png", 
          "price": 79.00, 
          "description": "Diez piezas de pan italiano acompañados con salsa bolognesa." 
        } ,
        { 
          "name": "CALZONE MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png", 
          "price": 149.00, 
          "description": "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa." 
        } ,
        { 
          "name": "CALZONE SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png", 
          "price": 149.00, 
          "description": "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa." 
        },
        { 
          "name": "ULTIMATE HERSHEY'S CHOCOLATE CHIP COOKIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/GALLETA.png", 
          "price": 179.00, 
          "description": "Crujiente galleta horneada con chispas de chocolate Hershey´s." 
        } ,
        { 
          "name": "PECAN PIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/PECAN%20PIE.png", 
          "price": 89.00, 
          "description": "Tu pastel favorito de nueces de pecanas bañado con chocolate." 
        }
      ] 
    },
    { 
      "name": "Pizza Hut Col. El Trapiche", 
      "logo": "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png", 
      "banner": "https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.18169-9/11205500_457521241076789_8210745353898187722_n.png?stp=dst-png_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=05277f&_nc_ohc=NW2BJGm6b58AX-neYUb&_nc_oc=AQkblGyliOmiAdnNlqwvuZUpw3qFWsHOIPFxES9V7MUi3UmctEl9hZMBH4JfGk4Bte4&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfAEywNxz9jGqjFinAZXj5F6hsrXO0QfomHvhe5e7QQhGQ&oe=63A89350", 
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "location": {
        "lat": 14.0944733,
        "lng": -87.143126
      },
      "products": [ 
        { 
          "name": "MY BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/MyBox.png", 
          "price": 99.00, 
          "description": "1 Pizza rectangular dividida en 6 piezas, 4 palitroques y 1 bebida de tu elección." 
        } ,
        { 
          "name": "2 COMBOS PAN PIZZA PERSONAL", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/COMBPIZPER.png", 
          "price": 199.00, 
          "description": "2 combos de pizza personales, 2 papas wedges, 2 bebida medio por L 199." 
        },         
        { 
          "name": "WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/Wow%20Box.png", 
          "price": 649.00, 
          "description": "1 pizza gigante de un ingrediente, 8 pan de ajo y 18 pechurricas." 
        } ,
        { 
          "name": "TRIPLE WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/TripleWOWBOX.jpg", 
          "price": 699.00, 
          "description": "2 pizzas gigantes, 10 palitroques y 12 pechurrricas." 
        },
        { 
          "name": "DETROIT STYLE PIZZA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PDetroi.png", 
          "price": 269.00, 
          "description": "Detroit-Style Pizza de masa gruesa y ligera en forma rectangular con bordes crujientes con queso dorado y salsa especial premium elaborada con tomates selectos madurados naturalmente. Disponible en dos recetas Pepperoni y Suprema." 
        },
        { 
          "name": "4 ESTACIONES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg", 
          "price": 199.00, 
          "description": "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón." 
        } ,
        { 
          "name": "String", 
          "img": "String", 
          "price": 299.00, 
          "description": "String" 
        } ,
        { 
          "name": "SUPER SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde." 
        } ,
        { 
          "name": "MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits." 
        } ,
        { 
          "name": "SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg", 
          "price": 279.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, champiñones, chile verde y cebolla." 
        } ,
        { 
          "name": "PEPPERONI O JAMÓN LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg", 
          "price": 279.00, 
          "description": "Pepperoni o jamón en abundancia, queso 100% mozzarella." 
        } ,
        { 
          "name": "HUT BONELESS BARBECUE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUTBONBA.png", 
          "price": 179.00, 
          "description": "Crujientes pechugitas de pollo empanizadas, horneadas y bañadas en salsa barbecue de la casa." 
        } ,
        { 
          "name": "PAN DE AJO SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png", 
          "price": 99.00, 
          "description": "Pan de ajo con capa de queso mozzarella." 
        } ,
        { 
          "name": "PALITROQUES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/00910.png", 
          "price": 79.00, 
          "description": "Diez piezas de pan italiano acompañados con salsa bolognesa." 
        } ,
        { 
          "name": "CALZONE MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png", 
          "price": 149.00, 
          "description": "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa." 
        } ,
        { 
          "name": "CALZONE SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png", 
          "price": 149.00, 
          "description": "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa." 
        },
        { 
          "name": "ULTIMATE HERSHEY'S CHOCOLATE CHIP COOKIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/GALLETA.png", 
          "price": 179.00, 
          "description": "Crujiente galleta horneada con chispas de chocolate Hershey´s." 
        } ,
        { 
          "name": "PECAN PIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/PECAN%20PIE.png", 
          "price": 89.00, 
          "description": "Tu pastel favorito de nueces de pecanas bañado con chocolate." 
        }
      ] 
    },
    { 
      "name": "Pizza Hut Residencial Monte Carlo", 
      "logo": "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png", 
      "banner": "https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.18169-9/11205500_457521241076789_8210745353898187722_n.png?stp=dst-png_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=05277f&_nc_ohc=NW2BJGm6b58AX-neYUb&_nc_oc=AQkblGyliOmiAdnNlqwvuZUpw3qFWsHOIPFxES9V7MUi3UmctEl9hZMBH4JfGk4Bte4&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfAEywNxz9jGqjFinAZXj5F6hsrXO0QfomHvhe5e7QQhGQ&oe=63A89350", 
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "location": {
        "lat": 14.1000701,
        "lng": -87.1810278
      },
      "products": [ 
        { 
          "name": "MY BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/MyBox.png", 
          "price": 99.00, 
          "description": "1 Pizza rectangular dividida en 6 piezas, 4 palitroques y 1 bebida de tu elección." 
        } ,
        { 
          "name": "2 COMBOS PAN PIZZA PERSONAL", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/COMBPIZPER.png", 
          "price": 199.00, 
          "description": "2 combos de pizza personales, 2 papas wedges, 2 bebida medio por L 199." 
        },         
        { 
          "name": "WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/Wow%20Box.png", 
          "price": 649.00, 
          "description": "1 pizza gigante de un ingrediente, 8 pan de ajo y 18 pechurricas." 
        } ,
        { 
          "name": "TRIPLE WOW BOX", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PROMOS/TripleWOWBOX.jpg", 
          "price": 699.00, 
          "description": "2 pizzas gigantes, 10 palitroques y 12 pechurrricas." 
        },
        { 
          "name": "DETROIT STYLE PIZZA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PDetroi.png", 
          "price": 269.00, 
          "description": "Detroit-Style Pizza de masa gruesa y ligera en forma rectangular con bordes crujientes con queso dorado y salsa especial premium elaborada con tomates selectos madurados naturalmente. Disponible en dos recetas Pepperoni y Suprema." 
        },
        { 
          "name": "4 ESTACIONES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg", 
          "price": 199.00, 
          "description": "Cuatro diferentes especialidades en una sola pizza: súper suprema, canadiense, pepperoni y jamón." 
        } ,
        { 
          "name": "String", 
          "img": "String", 
          "price": 299.00, 
          "description": "String" 
        } ,
        { 
          "name": "SUPER SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, salchicha italiana, jamón, champiñones, aceitunas, cebolla y chile verde." 
        } ,
        { 
          "name": "MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg", 
          "price": 299.00, 
          "description": "Elaborada con pepperoni, jamón, carne de res y cerdo, salchicha italiana y bacon bits." 
        } ,
        { 
          "name": "SUPREMA", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg", 
          "price": 279.00, 
          "description": "Elaborada con pepperoni, carne de res y cerdo, champiñones, chile verde y cebolla." 
        } ,
        { 
          "name": "PEPPERONI O JAMÓN LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg", 
          "price": 279.00, 
          "description": "Pepperoni o jamón en abundancia, queso 100% mozzarella." 
        } ,
        { 
          "name": "HUT BONELESS BARBECUE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/HUTBONBA.png", 
          "price": 179.00, 
          "description": "Crujientes pechugitas de pollo empanizadas, horneadas y bañadas en salsa barbecue de la casa." 
        } ,
        { 
          "name": "PAN DE AJO SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/PAN%20DE%20AJO.png", 
          "price": 99.00, 
          "description": "Pan de ajo con capa de queso mozzarella." 
        } ,
        { 
          "name": "PALITROQUES", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/ENTRADAS/00910.png", 
          "price": 79.00, 
          "description": "Diez piezas de pan italiano acompañados con salsa bolognesa." 
        } ,
        { 
          "name": "CALZONE MEAT LOVERS", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%203.png", 
          "price": 149.00, 
          "description": "Combinación de jamón, carne de res y cerdo, queso mozzarella y salsa barbacoa." 
        } ,
        { 
          "name": "CALZONE SUPREMO", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/CALZONES/CALZONE%20SUPREMO.png", 
          "price": 149.00, 
          "description": "Combinación de carne de res y cerdo, pepperoni, champiñones, chile verde, cebolla y salsa barbacoa." 
        },
        { 
          "name": "ULTIMATE HERSHEY'S CHOCOLATE CHIP COOKIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/GALLETA.png", 
          "price": 179.00, 
          "description": "Crujiente galleta horneada con chispas de chocolate Hershey´s." 
        } ,
        { 
          "name": "PECAN PIE", 
          "img": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/POSTRES/PECAN%20PIE.png", 
          "price": 89.00, 
          "description": "Tu pastel favorito de nueces de pecanas bañado con chocolate." 
        }
      ] 
    },
    { 
      "name": "La Colonia Anillo Periférico", 
      "logo": "https://fundahrse.org/wp-content/uploads/2015/12/SUPERMERCADOS-LA-COLONIA-copia-edit.jpg", 
      "banner": "https://proceso.hn/wp-content/uploads/2021/05/Supermercados-La-Colonia-696x420.jpg", 
      "category": {
        "id": {
          "$oid": "636ad93f6f5c87142282b9c3"
        },
        "name": "Supermarket"
      },
      "location": {
        "lat": 14.0442352,
        "lng": -87.240268,
      },
      "products": [ 
        { 
          "name": "Pan Blanco Baguette Breadco", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221457-500-auto?v=637274249601730000&width=500&height=auto&aspect=true", 
          "price": 32.90, 
          "description": "" 
        } ,
        { 
          "name": "Papel Plástico Fans 100 Ft", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/163354-500-auto?v=636882834532500000&width=500&height=auto&aspect=true", 
          "price": 49.90, 
          "description": "" 
        } ,
        { 
          "name": "Jamón Delicia Familiar X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221270-1600-1600?v=637236158100670000&width=1600&height=1600&aspect=true", 
          "price": 38.90, 
          "description": "" 
        } ,
        { 
          "name": "Malteada Sula Chocosula", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/161729-500-auto?v=636797093574400000&width=500&height=auto&aspect=true", 
          "price": 19.90, 
          "description": "Leche Con Chocolate 473 Ml" 
        } ,
        { 
          "name": "Rompopo Leyde", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233498-1600-1600?v=637552215499630000&width=1600&height=1600&aspect=true", 
          "price": 56.90, 
          "description": "Sin Alcohol 946 Ml" 
        } ,
        { 
          "name": "Waffles Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/162377-500-auto?v=636843693046630000&width=500&height=auto&aspect=true", 
          "price": 81.90, 
          "description": " Everyday Homestyle 10 Un" 
        } ,
        { 
          "name": "Pechuguitas Rey", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165049-500-auto?v=1753389656&width=500&height=auto&aspect=true", 
          "price": 91.90, 
          "description": "De Pollo Crispy" 
        } ,
        { 
          "name": "Jugo Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184072-1600-1600?v=637117563469570000&width=1600&height=1600&aspect=true", 
          "price": 108.90, 
          "description": "Jugo Essential Everyday De Manzana 64 Oz" 
        } ,
        { 
          "name": "Refresco Coca Cola", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184540-500-auto?v=1752783737&width=500&height=auto&aspect=true", 
          "price": 37.90, 
          "description": "Original 2 Lt" 
        } ,
        { 
          "name": "Conexión Navideña Transparente 200Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225173-500-auto?v=1752516438&width=500&height=auto&aspect=true", 
          "price": 95.90, 
          "description": "" 
        } ,
        { 
          "name": "Conexión Navideña Led Multi-Colores 100Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225175-500-auto?v=1752516440&width=500&height=auto&aspect=true", 
          "price": 130.90, 
          "description": "" 
        } ,
        { 
          "name": "Album Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240213-500-auto?v=1751296938&width=500&height=auto&aspect=true", 
          "price": 40.00, 
          "description": "" 
        } ,
        { 
          "name": "Sobre Vistas Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240214-500-auto?v=1751296979&width=500&height=auto&aspect=true", 
          "price": 22.00          , 
          "description": "" 
        } ,
        { 
          "name": "Batería Max Energizer Aa2", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233248-500-auto?v=637546310155570000&width=500&height=auto&aspect=true", 
          "price": 57.90, 
          "description": ""
        },
        { 
          "name": "Banano Maduro X Unidad", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165457-500-auto?v=636928656145900000&width=500&height=auto&aspect=true", 
          "price": 3.90, 
          "description": "" 
        } ,
        { 
          "name": "Fresa X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165883-500-auto?v=636934450743600000&width=500&height=auto&aspect=true", 
          "price": 94.90, 
          "description": "" 
        } ,
        { 
          "name": "Churros Yummies Ranchita Queso, Jalapeño Y Gordito", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/190667-500-auto?v=637124490787200000&width=500&height=auto&aspect=true", 
          "price": 59.90, 
          "description": "" 
        } ,
      ] 
    },
    { 
      "name": "La Colonia City Mall", 
      "logo": "https://fundahrse.org/wp-content/uploads/2015/12/SUPERMERCADOS-LA-COLONIA-copia-edit.jpg", 
      "banner": "https://proceso.hn/wp-content/uploads/2021/05/Supermercados-La-Colonia-696x420.jpg", 
      "category": {
        "id": {
          "$oid": "636ad93f6f5c87142282b9c3"
        },
        "name": "Supermarket"
      },
      "location": {
        "lat": 14.0625764,
        "lng": -87.2204972
      },
      "products": [ 
        { 
          "name": "Pan Blanco Baguette Breadco", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221457-500-auto?v=637274249601730000&width=500&height=auto&aspect=true", 
          "price": 32.90, 
          "description": "" 
        } ,
        { 
          "name": "Papel Plástico Fans 100 Ft", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/163354-500-auto?v=636882834532500000&width=500&height=auto&aspect=true", 
          "price": 49.90, 
          "description": "" 
        } ,
        { 
          "name": "Jamón Delicia Familiar X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221270-1600-1600?v=637236158100670000&width=1600&height=1600&aspect=true", 
          "price": 38.90, 
          "description": "" 
        } ,
        { 
          "name": "Malteada Sula Chocosula", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/161729-500-auto?v=636797093574400000&width=500&height=auto&aspect=true", 
          "price": 19.90, 
          "description": "Leche Con Chocolate 473 Ml" 
        } ,
        { 
          "name": "Rompopo Leyde", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233498-1600-1600?v=637552215499630000&width=1600&height=1600&aspect=true", 
          "price": 56.90, 
          "description": "Sin Alcohol 946 Ml" 
        } ,
        { 
          "name": "Waffles Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/162377-500-auto?v=636843693046630000&width=500&height=auto&aspect=true", 
          "price": 81.90, 
          "description": " Everyday Homestyle 10 Un" 
        } ,
        { 
          "name": "Pechuguitas Rey", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165049-500-auto?v=1753389656&width=500&height=auto&aspect=true", 
          "price": 91.90, 
          "description": "De Pollo Crispy" 
        } ,
        { 
          "name": "Jugo Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184072-1600-1600?v=637117563469570000&width=1600&height=1600&aspect=true", 
          "price": 108.90, 
          "description": "Jugo Essential Everyday De Manzana 64 Oz" 
        } ,
        { 
          "name": "Refresco Coca Cola", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184540-500-auto?v=1752783737&width=500&height=auto&aspect=true", 
          "price": 37.90, 
          "description": "Original 2 Lt" 
        } ,
        { 
          "name": "Conexión Navideña Transparente 200Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225173-500-auto?v=1752516438&width=500&height=auto&aspect=true", 
          "price": 95.90, 
          "description": "" 
        } ,
        { 
          "name": "Conexión Navideña Led Multi-Colores 100Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225175-500-auto?v=1752516440&width=500&height=auto&aspect=true", 
          "price": 130.90, 
          "description": "" 
        } ,
        { 
          "name": "Album Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240213-500-auto?v=1751296938&width=500&height=auto&aspect=true", 
          "price": 40.00, 
          "description": "" 
        } ,
        { 
          "name": "Sobre Vistas Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240214-500-auto?v=1751296979&width=500&height=auto&aspect=true", 
          "price": 22.00          , 
          "description": "" 
        } ,
        { 
          "name": "Batería Max Energizer Aa2", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233248-500-auto?v=637546310155570000&width=500&height=auto&aspect=true", 
          "price": 57.90, 
          "description": ""
        },
        { 
          "name": "Banano Maduro X Unidad", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165457-500-auto?v=636928656145900000&width=500&height=auto&aspect=true", 
          "price": 3.90, 
          "description": "" 
        } ,
        { 
          "name": "Fresa X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165883-500-auto?v=636934450743600000&width=500&height=auto&aspect=true", 
          "price": 94.90, 
          "description": "" 
        } ,
        { 
          "name": "Churros Yummies Ranchita Queso, Jalapeño Y Gordito", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/190667-500-auto?v=637124490787200000&width=500&height=auto&aspect=true", 
          "price": 59.90, 
          "description": "" 
        } ,
      ] 
    },
    { 
      "name": "La Colonia Kennedy", 
      "logo": "https://fundahrse.org/wp-content/uploads/2015/12/SUPERMERCADOS-LA-COLONIA-copia-edit.jpg", 
      "banner": "https://proceso.hn/wp-content/uploads/2021/05/Supermercados-La-Colonia-696x420.jpg", 
      "category": {
        "id": {
          "$oid": "636ad93f6f5c87142282b9c3"
        },
        "name": "Supermarket"
      },
      "location": {
        "lat": 14.0680278,
        "lng": -87.1848056,
      },
      "products": [ 
        { 
          "name": "Pan Blanco Baguette Breadco", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221457-500-auto?v=637274249601730000&width=500&height=auto&aspect=true", 
          "price": 32.90, 
          "description": "" 
        } ,
        { 
          "name": "Papel Plástico Fans 100 Ft", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/163354-500-auto?v=636882834532500000&width=500&height=auto&aspect=true", 
          "price": 49.90, 
          "description": "" 
        } ,
        { 
          "name": "Jamón Delicia Familiar X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221270-1600-1600?v=637236158100670000&width=1600&height=1600&aspect=true", 
          "price": 38.90, 
          "description": "" 
        } ,
        { 
          "name": "Malteada Sula Chocosula", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/161729-500-auto?v=636797093574400000&width=500&height=auto&aspect=true", 
          "price": 19.90, 
          "description": "Leche Con Chocolate 473 Ml" 
        } ,
        { 
          "name": "Rompopo Leyde", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233498-1600-1600?v=637552215499630000&width=1600&height=1600&aspect=true", 
          "price": 56.90, 
          "description": "Sin Alcohol 946 Ml" 
        } ,
        { 
          "name": "Waffles Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/162377-500-auto?v=636843693046630000&width=500&height=auto&aspect=true", 
          "price": 81.90, 
          "description": " Everyday Homestyle 10 Un" 
        } ,
        { 
          "name": "Pechuguitas Rey", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165049-500-auto?v=1753389656&width=500&height=auto&aspect=true", 
          "price": 91.90, 
          "description": "De Pollo Crispy" 
        } ,
        { 
          "name": "Jugo Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184072-1600-1600?v=637117563469570000&width=1600&height=1600&aspect=true", 
          "price": 108.90, 
          "description": "Jugo Essential Everyday De Manzana 64 Oz" 
        } ,
        { 
          "name": "Refresco Coca Cola", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184540-500-auto?v=1752783737&width=500&height=auto&aspect=true", 
          "price": 37.90, 
          "description": "Original 2 Lt" 
        } ,
        { 
          "name": "Conexión Navideña Transparente 200Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225173-500-auto?v=1752516438&width=500&height=auto&aspect=true", 
          "price": 95.90, 
          "description": "" 
        } ,
        { 
          "name": "Conexión Navideña Led Multi-Colores 100Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225175-500-auto?v=1752516440&width=500&height=auto&aspect=true", 
          "price": 130.90, 
          "description": "" 
        } ,
        { 
          "name": "Album Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240213-500-auto?v=1751296938&width=500&height=auto&aspect=true", 
          "price": 40.00, 
          "description": "" 
        } ,
        { 
          "name": "Sobre Vistas Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240214-500-auto?v=1751296979&width=500&height=auto&aspect=true", 
          "price": 22.00          , 
          "description": "" 
        } ,
        { 
          "name": "Batería Max Energizer Aa2", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233248-500-auto?v=637546310155570000&width=500&height=auto&aspect=true", 
          "price": 57.90, 
          "description": ""
        },
        { 
          "name": "Banano Maduro X Unidad", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165457-500-auto?v=636928656145900000&width=500&height=auto&aspect=true", 
          "price": 3.90, 
          "description": "" 
        } ,
        { 
          "name": "Fresa X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165883-500-auto?v=636934450743600000&width=500&height=auto&aspect=true", 
          "price": 94.90, 
          "description": "" 
        } ,
        { 
          "name": "Churros Yummies Ranchita Queso, Jalapeño Y Gordito", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/190667-500-auto?v=637124490787200000&width=500&height=auto&aspect=true", 
          "price": 59.90, 
          "description": "" 
        } ,
      ] 
    },
    { 
      "name": "La Colonia Mega Bulevar Suyapa", 
      "logo": "https://fundahrse.org/wp-content/uploads/2015/12/SUPERMERCADOS-LA-COLONIA-copia-edit.jpg", 
      "banner": "https://proceso.hn/wp-content/uploads/2021/05/Supermercados-La-Colonia-696x420.jpg", 
      "category": {
        "id": {
          "$oid": "636ad93f6f5c87142282b9c3"
        },
        "name": "Supermarket"
      },
      "location": {
        "lat": 14.0891959,
        "lng": -87.1972734,
      },
      "products": [ 
        { 
          "name": "Pan Blanco Baguette Breadco", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221457-500-auto?v=637274249601730000&width=500&height=auto&aspect=true", 
          "price": 32.90, 
          "description": "" 
        } ,
        { 
          "name": "Papel Plástico Fans 100 Ft", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/163354-500-auto?v=636882834532500000&width=500&height=auto&aspect=true", 
          "price": 49.90, 
          "description": "" 
        } ,
        { 
          "name": "Jamón Delicia Familiar X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/221270-1600-1600?v=637236158100670000&width=1600&height=1600&aspect=true", 
          "price": 38.90, 
          "description": "" 
        } ,
        { 
          "name": "Malteada Sula Chocosula", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/161729-500-auto?v=636797093574400000&width=500&height=auto&aspect=true", 
          "price": 19.90, 
          "description": "Leche Con Chocolate 473 Ml" 
        } ,
        { 
          "name": "Rompopo Leyde", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233498-1600-1600?v=637552215499630000&width=1600&height=1600&aspect=true", 
          "price": 56.90, 
          "description": "Sin Alcohol 946 Ml" 
        } ,
        { 
          "name": "Waffles Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/162377-500-auto?v=636843693046630000&width=500&height=auto&aspect=true", 
          "price": 81.90, 
          "description": " Everyday Homestyle 10 Un" 
        } ,
        { 
          "name": "Pechuguitas Rey", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165049-500-auto?v=1753389656&width=500&height=auto&aspect=true", 
          "price": 91.90, 
          "description": "De Pollo Crispy" 
        } ,
        { 
          "name": "Jugo Essential", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184072-1600-1600?v=637117563469570000&width=1600&height=1600&aspect=true", 
          "price": 108.90, 
          "description": "Jugo Essential Everyday De Manzana 64 Oz" 
        } ,
        { 
          "name": "Refresco Coca Cola", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/184540-500-auto?v=1752783737&width=500&height=auto&aspect=true", 
          "price": 37.90, 
          "description": "Original 2 Lt" 
        } ,
        { 
          "name": "Conexión Navideña Transparente 200Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225173-500-auto?v=1752516438&width=500&height=auto&aspect=true", 
          "price": 95.90, 
          "description": "" 
        } ,
        { 
          "name": "Conexión Navideña Led Multi-Colores 100Luces", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/225175-500-auto?v=1752516440&width=500&height=auto&aspect=true", 
          "price": 130.90, 
          "description": "" 
        } ,
        { 
          "name": "Album Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240213-500-auto?v=1751296938&width=500&height=auto&aspect=true", 
          "price": 40.00, 
          "description": "" 
        } ,
        { 
          "name": "Sobre Vistas Panini Qatar 2022", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/240214-500-auto?v=1751296979&width=500&height=auto&aspect=true", 
          "price": 22.00          , 
          "description": "" 
        } ,
        { 
          "name": "Batería Max Energizer Aa2", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/233248-500-auto?v=637546310155570000&width=500&height=auto&aspect=true", 
          "price": 57.90, 
          "description": ""
        },
        { 
          "name": "Banano Maduro X Unidad", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165457-500-auto?v=636928656145900000&width=500&height=auto&aspect=true", 
          "price": 3.90, 
          "description": "" 
        } ,
        { 
          "name": "Fresa X Lb", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/165883-500-auto?v=636934450743600000&width=500&height=auto&aspect=true", 
          "price": 94.90, 
          "description": "" 
        } ,
        { 
          "name": "Churros Yummies Ranchita Queso, Jalapeño Y Gordito", 
          "img": "https://lacolonia.vtexassets.com/arquivos/ids/190667-500-auto?v=637124490787200000&width=500&height=auto&aspect=true", 
          "price": 59.90, 
          "description": "" 
        } ,
      ] 
    },
    {
      "name":"Burguer King Boulevard Suyapa",
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "logo":"https://www.burgerkinghonduras.hn/assets/images/logo-lc.png",
      "banner":"https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/202882716_4156369874453903_3054580136129457848_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH_B5lD_A4enppwqD1wndLlsLdL4al_WlKwt0vhqX9aUnbOX1kU0aYBajBZBPOQ3jd86X9mbLejImC3dHB-1g-9&_nc_ohc=5ZkVZbyVWc4AX_CmFcj&_nc_ht=scontent.ftgu1-2.fna&oh=00_AfCu2Jyphm3uFstKor-iuZob5tnkad_pQMM9R6dZ7VqGOQ&oe=63A875F7",
      "products":[{
          "name":"2x1 King de Pollo Tocino y Queso",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/armado_1_673c610b.png",
          "price":185,
          "description":"Sándwich de pollo, ligeramente empanizado, con delicioso queso americano y tocino, cubierto con una combinación de lechuga y cremosa mayonesa en un pan largo de semillas de sésamo. Acompañado de papas pequeñas y dos refrescos. "
      },
      {
          "name":"Combo para Dos: Bacon King Jr+Whopper Jr",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/armado_88df1105.png", 
          "price":179,
          "description":"Porque compartir siempre será una buena opción te traemos un combo para dos que incluye un 1 Bacon King Jr.+ Whopper Jr+ 2 papas fritas pequeñas+2 refrescos de tu elección."
      },
      {
          "name":"Southwest Bacon Whopper Sencilla",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/SouthWeast_5829a8b.jpg",
          "price":211,
          "description":"Te presentamos la nueva hamburguesa Southwest bacon , una increíble combinación de guacamole, tortillas chips sazonadas, una deliciosa salsa picantita, bacon , queso y nuestra carne 100% de res asada a la parrilla. Lo puedes disfrutar con deliciosas papas y refresco de tu elección."
      },
      {
          "name":"Southwest Bacon Whopper Doble",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/SouthWeast_doble_0c51529.jpg",
          "price":251,
          "description":"Te presentamos la nueva hamburguesa Southwest bacon , una increíble combinación de guacamole, tortillas chips sazonadas, una deliciosa salsa picantita, bacon , queso y nuestra carne 100% de res asada a la parrilla. Lo puedes disfrutar con deliciosas papas y refresco de tu elección."
      },
      {
          "name":"Whopper Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_WHOPPERVNP_e79d4c4.jpg",
          "price":181,
          "description":"Nuestro Whopper tiene un 1/4 de libra de sabrosa carne de res asada a la parrilla cubierta con jugosos tomates, lechuga fresca,cremosa mayonesa,salsa de tomate,pepinillos crujientes y cebollas blancas rebanadas, en un pan suave de semillas de sésamo, acompañado de papas medianas o aros de cebolla y refresco medianos."
      },
      {
          "name":"Whopper Texana Combo",
          img:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_WHOPPER_TEXANAVNP_7a10dc57.jpg",
          "price":211,
          "description":"Nuestro Whopper Texana es un ¼ lb de sabrosa carne de res asada a la parrilla cubierta con queso americano, crujiente tocino, jugosos tomates, lechuga fresca, cremosa mayonesa, salsa barbacoa, crujientes pepinillos y cebollas rebanada en un pan suave de semillas de sésamo. Acompañado con papas medianas o aros de cebolla y tu bebida favorita."
      },
      {
          "name":"King de Pollo Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_KING_DE_POLLOVNP_e705838.jpg",
          "price":165,
          "description":"Sandwich de pollo, ligeramente empanizado y cubierto con una combinación de lechuga y cremosa mayonesa en un pan largo de semillas de sésamo. Acompañado de papas medianas o aros de cebolla y refresco en mediano. "
      },
      {
          "name":"Crispy Chicken Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_CRISPY_CHICKENVNP_0a23c1b.jpg",
          "price":187,
          "description":"Este increíble sándwich esta hecho con filete 100% de pollo crujiente, sazonado y empanizado. Cubierto con queso americano y lechuga fresca, tomate y mayonesa cremosa en un pan de papa. Acompañado de papas medianas o aros de cebollas y tu bebida favorita."
      },
      {
          "name":"Bacon King Doble",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_BACON_KING_DOBLEVNP_1c1cbc0.jpg",
          "price":221,
          "description":"Dos tortas de carne 100% de res asadas a la parrilla cubiertas con 4 lascas de tocino, queso americano derretido, salsa de tomate y cremosa mayonesa en un pan tostado de semillas de sésamo. Acompañado de papas medianas o aros de cebolla y tu bebida favorita."
      },
      {
          "name":"Megaking Plus",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/MEGAKING_PLUSVNP_2d30934.jpg",
          "price":505,
          "description":"Si tu apetito es Feroz, el Megaking Plus es tu mejor opción. Disfruta de 2 deliciosos Whopper y 2 King de Pollo todos acompañados con 4 papas medianas o aros de cebolla y un refresco 2 Lts. "
      },
      ],
      "location":{
          "lat":14.0823294,
          "lng":-87.167167
      }
    },
    {
      "name":"Burguer King Boulevard Morazan",
      "category": {
        "id": {
          "$oid": "636ad8ba6f5c87142282b9c2"
        },
        "name": "Restaurants"
      },
      "logo":"https://www.burgerkinghonduras.hn/assets/images/logo-lc.png",
      "banner":"https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/202882716_4156369874453903_3054580136129457848_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH_B5lD_A4enppwqD1wndLlsLdL4al_WlKwt0vhqX9aUnbOX1kU0aYBajBZBPOQ3jd86X9mbLejImC3dHB-1g-9&_nc_ohc=5ZkVZbyVWc4AX_CmFcj&_nc_ht=scontent.ftgu1-2.fna&oh=00_AfCu2Jyphm3uFstKor-iuZob5tnkad_pQMM9R6dZ7VqGOQ&oe=63A875F7",
      "products":[{
          "name":"2x1 King de Pollo Tocino y Queso",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/armado_1_673c610b.png",
          "price":185,
          "description":"Sándwich de pollo, ligeramente empanizado, con delicioso queso americano y tocino, cubierto con una combinación de lechuga y cremosa mayonesa en un pan largo de semillas de sésamo. Acompañado de papas pequeñas y dos refrescos. "
      },
      {
          "name":"Combo para Dos: Bacon King Jr+Whopper Jr",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/armado_88df1105.png", 
          "price":179,
          "description":"Porque compartir siempre será una buena opción te traemos un combo para dos que incluye un 1 Bacon King Jr.+ Whopper Jr+ 2 papas fritas pequeñas+2 refrescos de tu elección."
      },
      {
          "name":"Southwest Bacon Whopper Sencilla",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/SouthWeast_5829a8b.jpg",
          "price":211,
          "description":"Te presentamos la nueva hamburguesa Southwest bacon , una increíble combinación de guacamole, tortillas chips sazonadas, una deliciosa salsa picantita, bacon , queso y nuestra carne 100% de res asada a la parrilla. Lo puedes disfrutar con deliciosas papas y refresco de tu elección."
      },
      {
          "name":"Southwest Bacon Whopper Doble",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/SouthWeast_doble_0c51529.jpg",
          "price":251,
          "description":"Te presentamos la nueva hamburguesa Southwest bacon , una increíble combinación de guacamole, tortillas chips sazonadas, una deliciosa salsa picantita, bacon , queso y nuestra carne 100% de res asada a la parrilla. Lo puedes disfrutar con deliciosas papas y refresco de tu elección."
      },
      {
          "name":"Whopper Combo",
          img:"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_WHOPPERVNP_e79d4c4.jpg",
          "price":181,
          "description":"Nuestro Whopper tiene un 1/4 de libra de sabrosa carne de res asada a la parrilla cubierta con jugosos tomates, lechuga fresca,cremosa mayonesa,salsa de tomate,pepinillos crujientes y cebollas blancas rebanadas, en un pan suave de semillas de sésamo, acompañado de papas medianas o aros de cebolla y refresco medianos."
      },
      {
          "name":"Whopper Texana Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_WHOPPER_TEXANAVNP_7a10dc57.jpg",
          "price":211,
          "description":"Nuestro Whopper Texana es un ¼ lb de sabrosa carne de res asada a la parrilla cubierta con queso americano, crujiente tocino, jugosos tomates, lechuga fresca, cremosa mayonesa, salsa barbacoa, crujientes pepinillos y cebollas rebanada en un pan suave de semillas de sésamo. Acompañado con papas medianas o aros de cebolla y tu bebida favorita."
      },
      {
          "name":"King de Pollo Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_KING_DE_POLLOVNP_e705838.jpg",
          "price":165,
          "description":"Sandwich de pollo, ligeramente empanizado y cubierto con una combinación de lechuga y cremosa mayonesa en un pan largo de semillas de sésamo. Acompañado de papas medianas o aros de cebolla y refresco en mediano. "
      },
      {
          "name":"Crispy Chicken Combo",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_CRISPY_CHICKENVNP_0a23c1b.jpg",
          "price":187,
          "description":"Este increíble sándwich esta hecho con filete 100% de pollo crujiente, sazonado y empanizado. Cubierto con queso americano y lechuga fresca, tomate y mayonesa cremosa en un pan de papa. Acompañado de papas medianas o aros de cebollas y tu bebida favorita."
      },
      {
          "name":"Bacon King Doble",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/COMBO_BACON_KING_DOBLEVNP_1c1cbc0.jpg",
          "price":221,
          "description":"Dos tortas de carne 100% de res asadas a la parrilla cubiertas con 4 lascas de tocino, queso americano derretido, salsa de tomate y cremosa mayonesa en un pan tostado de semillas de sésamo. Acompañado de papas medianas o aros de cebolla y tu bebida favorita."
      },
      {
          "name":"Megaking Plus",
          "img":"https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/MEGAKING_PLUSVNP_2d30934.jpg",
          "price":505,
          "description":"Si tu apetito es Feroz, el Megaking Plus es tu mejor opción. Disfruta de 2 deliciosos Whopper y 2 King de Pollo todos acompañados con 4 papas medianas o aros de cebolla y un refresco 2 Lts. "
      },
      ],
      "location":{
          "lat":14.1001548,
          "lng":-87.1803196
      }
    },
    {
          name:"McDonald's  Boulevard Suyapa",
          "category": {
            "id": {
              "$oid": "636ad8ba6f5c87142282b9c2"
            },
            "name": "Restaurants"
          },
          logo:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/280837814_5629548543739241_6560458789944398713_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGqnDEVI74RpgpXaiAHLbk92n1750kFZQfafXvnSQVlB0S_qVNVQPtrRhhzzS4j8ftDNz6kkF4V0bt8YRqTQUpx&_nc_ohc=-fVKe-atFmsAX-AfFP4&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfDjEx-rVCSG_ZMXh9UDrms4cUVP3XCT2X5RGUWM0ZfWxA&oe=63856244",
          banner:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/313114404_6126043527423071_4534255433783207902_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFqUeyXTGzW1Erxvlrrxqjvkx83cK7RY8-THzdwrtFjz1MXJCT960vwaZciJIdE0w88dKHWAlLmynqlDd8Sd42m&_nc_ohc=ntBAkwuG-gIAX_7XFOa&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfDI7oDbI9bsM0XPnk_h4qHxj5Or12mv6TJlGO0LyMDRZA&oe=6386E029",
          products:[{
              name:"Big Tasty Res",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641161964_big%20tasty%20res.jpg",
              price:185,
              description:"Delicioso hamburguesa en un pan con ajonjolí, con una torta 100% de res, cebolla, lechuga, dos rodajas de tomate, tres rodajas de queso emmental, acompañado de su especial aderezo Tasty."
          },
          {
              name:"Big Mac™",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg", 
              price:179,
              description:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
          },
          {
              name:"Cuarto de Libra",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
              price:211,
              description:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
          },
          {
              name:"Cuarto de Libra Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814469_6.%20Cuarto%20de%20Libra.jpg",
              price:251,
              description:"Hamburguesa de 2 tortas de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
          },
          {
              name:"McNífica™ de Res",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814538_8.McNifica%20de%20res.jpg",
              price:181,
              description:"McNífica de Res es una fresca hamburguesa, con lechuga rallada, una rodaja de tomante, una torta de 1/4 de libra de res deliciosamente jugosa, sazonada con una pizca de sal y pimienta con una rebanada de queso cheddar amarillo, mayonesa, kétchup, cebolla, en un pan de hamburguesa con semillas de sésamo suave y esponjoso."
          },
          {
              name:"McNífica™ de Res Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814580_9.McNifica%20res%20doble.jpg",
              price:211,
              description:"McNífica de Res es una fresca hamburguesa, con lechuga rallada, una rodaja de tomante, dos tortas de 1/4 de libra de res deliciosamente jugosa, sazonada con una pizca de sal y pimienta con una rebanada de queso cheddar amarillo, mayonesa, kétchup, cebolla, en un pan de hamburguesa con semillas de sésamo suave y esponjoso."
          },
          {
              name:"Hamburguesa Ranch",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641321089_19.Ranch.png",
              price:165,
              description:"Hamburguesa con pan regular, torta de carne 100% de res, queso cheddar amarillo, tomate, lechuga, cebolla, mostaza y un delicioso Aderezo Ranch."
          },
          {
              name:"Hamburguesa Ranch Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641321134_20.%20Ranch%20doble.jpg",
              price:187,
              description:"Hamburguesa con pan regular, torta de carne 100% de res, queso cheddar amarillo, tomate, lechuga, cebolla, mostaza y un delicioso Aderezo Ranch."
          },
          {
              name:"McWrap™ Tres Quesos Gourmet",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640815839_2.Mcwrap%203%20quesos.jpg",
              price:114,
              description:"Tortilla de harina, tomate, lechuga, queso cheddar amarillo, queso cheddar blanco, tocino, guacamol y aderezo Tres Quesos Pimienta."
          },
          {
              name:"McWrap™ Pico Guacamol Gourmet",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640816284_7.%20mcwrap%20pico%20guacamol.jpg",
              price:124,
              description:"Tortilla de harina, queso cheddar blanco, lechuga, pico de gallo, aderezo ranch, guacamol, puedes elegir entre las 3 diferentes opciones de proteínas: carne 100% de res, pechuga de pollo crispy o pechuga de pollo grilled."
          },
          ],
          location:{
              lat:14.0823356,
              lng:-87.1674764
          }
    },
    {
          name:"McDonald's  Boulevard Morazan",
          "category": {
            "id": {
              "$oid": "636ad8ba6f5c87142282b9c2"
            },
            "name": "Restaurants"
          },
          logo:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/280837814_5629548543739241_6560458789944398713_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGqnDEVI74RpgpXaiAHLbk92n1750kFZQfafXvnSQVlB0S_qVNVQPtrRhhzzS4j8ftDNz6kkF4V0bt8YRqTQUpx&_nc_ohc=-fVKe-atFmsAX-AfFP4&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfDjEx-rVCSG_ZMXh9UDrms4cUVP3XCT2X5RGUWM0ZfWxA&oe=63856244",
          banner:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/313114404_6126043527423071_4534255433783207902_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFqUeyXTGzW1Erxvlrrxqjvkx83cK7RY8-THzdwrtFjz1MXJCT960vwaZciJIdE0w88dKHWAlLmynqlDd8Sd42m&_nc_ohc=ntBAkwuG-gIAX_7XFOa&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfDI7oDbI9bsM0XPnk_h4qHxj5Or12mv6TJlGO0LyMDRZA&oe=6386E029",
          products:[{
              name:"Big Tasty Res",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641161964_big%20tasty%20res.jpg",
              price:185,
              description:"Delicioso hamburguesa en un pan con ajonjolí, con una torta 100% de res, cebolla, lechuga, dos rodajas de tomate, tres rodajas de queso emmental, acompañado de su especial aderezo Tasty."
          },
          {
              name:"Big Mac™",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814235_4.Big%20mac.jpg", 
              price:179,
              description:"La perfección: dos deliciosas tortas de carne 100% de res y salsa Big Mac, entre un pan de semillas de sésamo. Se completa con pepinillos, lechuga rallada, cebolla finamente picada y queso americano para una hamburguesa con un sabor sin igual."
          },
          {
              name:"Cuarto de Libra",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814417_6.%20Cuarto%20de%20Libra.jpg",
              price:211,
              description:"Hamburguesa de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
          },
          {
              name:"Cuarto de Libra Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814469_6.%20Cuarto%20de%20Libra.jpg",
              price:251,
              description:"Hamburguesa de 2 tortas de 1/4 de libra de carne 100% de res deliciosamente jugosa. Se sazona con una pizca de sal y pimienta, acompañada de cebolla, kétchup, mostaza, dos rebanadas de queso cheddar amarillo en un pan de semillas de sésamo."
          },
          {
              name:"McNífica™ de Res",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814538_8.McNifica%20de%20res.jpg",
              price:181,
              description:"McNífica de Res es una fresca hamburguesa, con lechuga rallada, una rodaja de tomante, una torta de 1/4 de libra de res deliciosamente jugosa, sazonada con una pizca de sal y pimienta con una rebanada de queso cheddar amarillo, mayonesa, kétchup, cebolla, en un pan de hamburguesa con semillas de sésamo suave y esponjoso."
          },
          {
              name:"McNífica™ de Res Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640814580_9.McNifica%20res%20doble.jpg",
              price:211,
              description:"McNífica de Res es una fresca hamburguesa, con lechuga rallada, una rodaja de tomante, dos tortas de 1/4 de libra de res deliciosamente jugosa, sazonada con una pizca de sal y pimienta con una rebanada de queso cheddar amarillo, mayonesa, kétchup, cebolla, en un pan de hamburguesa con semillas de sésamo suave y esponjoso."
          },
          {
              name:"Hamburguesa Ranch",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641321089_19.Ranch.png",
              price:165,
              description:"Hamburguesa con pan regular, torta de carne 100% de res, queso cheddar amarillo, tomate, lechuga, cebolla, mostaza y un delicioso Aderezo Ranch."
          },
          {
              name:"Hamburguesa Ranch Doble",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1641321134_20.%20Ranch%20doble.jpg",
              price:187,
              description:"Hamburguesa con pan regular, torta de carne 100% de res, queso cheddar amarillo, tomate, lechuga, cebolla, mostaza y un delicioso Aderezo Ranch."
          },
          {
              name:"McWrap™ Tres Quesos Gourmet",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640815839_2.Mcwrap%203%20quesos.jpg",
              price:114,
              description:"Tortilla de harina, tomate, lechuga, queso cheddar amarillo, queso cheddar blanco, tocino, guacamol y aderezo Tres Quesos Pimienta."
          },
          {
              name:"McWrap™ Pico Guacamol Gourmet",
              img:"https://mcdonalds.com.hn/imagen/menu-products/1640816284_7.%20mcwrap%20pico%20guacamol.jpg",
              price:124,
              description:"Tortilla de harina, queso cheddar blanco, lechuga, pico de gallo, aderezo ranch, guacamol, puedes elegir entre las 3 diferentes opciones de proteínas: carne 100% de res, pechuga de pollo crispy o pechuga de pollo grilled."
          },
          ],
          location:{
              lat:14.0996071,
              lng:-87.1908479
          }
    },
    {
      name:"Diunsa los Proceres",
      "category": {
        "id": {
          "$oid": "636ad99b6f5c87142282b9c6"
        },
        "name": "Tech"
      },
      logo:"https://diunsa.vtexassets.com/assets/vtex.file-manager-graphql/images/4558c0e0-867a-40e9-ac27-596dcf10bd68___e7e2b7bd62cbc3dbeac34a72de2fb4b9.svg",
      banner:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/285732277_10158926091377742_6952660428003820841_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGGLHiMtOR_ngKrmdZcB-A9twNWJnC7Fx-3A1YmcLsXH-JyBw0mpGf7onEoHDkpAjm4fa6_LsqFnU9UwTgWx6F_&_nc_ohc=9MRxDGFKgXsAX_lz35v&tn=MpzVA-TR-ZkcFvrn&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfBlqz5wASjrXwRPVeZ-q68T55axM-R1f0c8hGilSdjw1A&oe=638520B5",
      products:[{
          name:"CAMISA ADIDAS JAPON LCL 22-23",
          img:"https://diunsa.vtexassets.com/arquivos/ids/220916-1600-1266?v=638023978807200000&width=1600&height=1266&aspect=true",
          price:2190,
          description:"Creado para la autoexpresión en el escenario más grande del fútbol. El diseño inspirado en la grulla de origami en esta camiseta de adidas ayuda a que se destaque entre la multitud. Detrás de esos gráficos defectuosos, AEROREADY que absorbe la humedad y las inserciones de malla lo mantienen cómodo sin importar cómo se desarrolle su día."
      },
      {
          name:"JUEGO DE MESA PIXXO JUNIOR",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222416-1600-1266?v=638047533611430000&width=1600&height=1266&aspect=true",
          price:550,
          description:"-Reproduce el diseño respetando el orden de las fichas y de los colores. -Un kit para aprender los colores. -Incluye 15 modelos, 1 cuadrículo de juego, 50 fichas con 6 colores diferentes. -Folleto ilustrado de colores. -A partir de los 2 años."
      },
      {
          name:"SET DE BOLIGRAFOS GEL 30PCS 3C4G",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222362-1600-1266?v=638047493754100000&width=1600&height=1266&aspect=true",
          price:245,
          description:"Este juego en caja incluye: 30 bolígrafos de gel más más de 100 pegatinas de color, estilos de lápiz incluidos, 8 metálicos, 6 pastel, 7 de neón, 2 de arco iris, 7 de brillo."
      },
      {
          name:"TOALLA PARA BAÑO CELINE CELEST",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222533-1600-1266?v=638049901354530000&width=1600&height=1266&aspect=true",
          price:199,
          description:"Toalla para baño celine. - Colores surtidos. - Precio Unitario"
      },
      {
          name:"Foamy Moldeable Color Amarillo",
          img:"https://diunsa.vtexassets.com/arquivos/ids/191280-1600-1266?v=637292973247000000&width=1600&height=1266&aspect=true",
          price:21,
          description:"*Pasta de foamy suave y ligera, fácil de moldear **No se agrieta ni mancha las manos de los niños **Disponible en 14 diferentes colores brillantes y mezclables entre sí ( Se venden por separado) **Secado rápido y permanente, ideal para uso escolar y ma"
      },
      {
          name:"KIT DE MAGIA MY MAGIC SHOW BUKI",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222375-1600-1266?v=638047499224500000&width=1600&height=1266&aspect=true",
          price:645,
          description:"Cuerda; Caja negra; Caja transparente (caja fuerte); Bufanda; Caja con cajón secreto; Fósforo; 1 naipe; 6 tarjetas con números; 2 bolas de espuma; 1 cubo de espuma; Slider con daga; Hoja ilustrada; 10 tarjetas con imágenes."
      },
      {
          name:"RECORTADOR DE BELLOS COMPACTO CONAIR 9PCS",
          img:"https://diunsa.vtexassets.com/arquivos/ids/218420-1600-1266?v=638010955845570000&width=1600&height=1266&aspect=true",
          price:483,
          description:"Kit De Aseo Personal 9 Piezas incluye todo lo que necesitas para recortar fácilmente el vello no deseado de zonas difíciles del rostro y el cuerpo para que siempre estés impecable. Con un práctico diseño sin cable, este sistema de cuidado personal de alta precisión es la herramienta ideal para perfeccionar tu ritual de cuidado personal."
      }],
      location:{
          lat:14.1024075,
          lng:-87.186465
      }
    },
    {
      name:"Diunsa Miraflores",
      "category": {
        "id": {
          "$oid": "636ad99b6f5c87142282b9c6"
        },
        "name": "Tech"
      },
      logo:"https://diunsa.vtexassets.com/assets/vtex.file-manager-graphql/images/4558c0e0-867a-40e9-ac27-596dcf10bd68___e7e2b7bd62cbc3dbeac34a72de2fb4b9.svg",
      banner:"https://scontent.ftgu1-1.fna.fbcdn.net/v/t39.30808-6/285732277_10158926091377742_6952660428003820841_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGGLHiMtOR_ngKrmdZcB-A9twNWJnC7Fx-3A1YmcLsXH-JyBw0mpGf7onEoHDkpAjm4fa6_LsqFnU9UwTgWx6F_&_nc_ohc=9MRxDGFKgXsAX_lz35v&tn=MpzVA-TR-ZkcFvrn&_nc_ht=scontent.ftgu1-1.fna&oh=00_AfBlqz5wASjrXwRPVeZ-q68T55axM-R1f0c8hGilSdjw1A&oe=638520B5",
      products:[{
          name:"CAMISA ADIDAS JAPON LCL 22-23",
          img:"https://diunsa.vtexassets.com/arquivos/ids/220916-1600-1266?v=638023978807200000&width=1600&height=1266&aspect=true",
          price:2190,
          description:"Creado para la autoexpresión en el escenario más grande del fútbol. El diseño inspirado en la grulla de origami en esta camiseta de adidas ayuda a que se destaque entre la multitud. Detrás de esos gráficos defectuosos, AEROREADY que absorbe la humedad y las inserciones de malla lo mantienen cómodo sin importar cómo se desarrolle su día."
      },
      {
          name:"JUEGO DE MESA PIXXO JUNIOR",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222416-1600-1266?v=638047533611430000&width=1600&height=1266&aspect=true",
          price:550,
          description:"-Reproduce el diseño respetando el orden de las fichas y de los colores. -Un kit para aprender los colores. -Incluye 15 modelos, 1 cuadrículo de juego, 50 fichas con 6 colores diferentes. -Folleto ilustrado de colores. -A partir de los 2 años."
      },
      {
          name:"SET DE BOLIGRAFOS GEL 30PCS 3C4G",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222362-1600-1266?v=638047493754100000&width=1600&height=1266&aspect=true",
          price:245,
          description:"Este juego en caja incluye: 30 bolígrafos de gel más más de 100 pegatinas de color, estilos de lápiz incluidos, 8 metálicos, 6 pastel, 7 de neón, 2 de arco iris, 7 de brillo."
      },
      {
          name:"TOALLA PARA BAÑO CELINE CELEST",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222533-1600-1266?v=638049901354530000&width=1600&height=1266&aspect=true",
          price:199,
          description:"Toalla para baño celine. - Colores surtidos. - Precio Unitario"
      },
      {
          name:"Foamy Moldeable Color Amarillo",
          img:"https://diunsa.vtexassets.com/arquivos/ids/191280-1600-1266?v=637292973247000000&width=1600&height=1266&aspect=true",
          price:21,
          description:"*Pasta de foamy suave y ligera, fácil de moldear **No se agrieta ni mancha las manos de los niños **Disponible en 14 diferentes colores brillantes y mezclables entre sí ( Se venden por separado) **Secado rápido y permanente, ideal para uso escolar y ma"
      },
      {
          name:"KIT DE MAGIA MY MAGIC SHOW BUKI",
          img:"https://diunsa.vtexassets.com/arquivos/ids/222375-1600-1266?v=638047499224500000&width=1600&height=1266&aspect=true",
          price:645,
          description:"Cuerda; Caja negra; Caja transparente (caja fuerte); Bufanda; Caja con cajón secreto; Fósforo; 1 naipe; 6 tarjetas con números; 2 bolas de espuma; 1 cubo de espuma; Slider con daga; Hoja ilustrada; 10 tarjetas con imágenes."
      },
      {
          name:"RECORTADOR DE BELLOS COMPACTO CONAIR 9PCS",
          img:"https://diunsa.vtexassets.com/arquivos/ids/218420-1600-1266?v=638010955845570000&width=1600&height=1266&aspect=true",
          price:483,
          description:"Kit De Aseo Personal 9 Piezas incluye todo lo que necesitas para recortar fácilmente el vello no deseado de zonas difíciles del rostro y el cuerpo para que siempre estés impecable. Con un práctico diseño sin cable, este sistema de cuidado personal de alta precisión es la herramienta ideal para perfeccionar tu ritual de cuidado personal."
      }],
      location:{
          lat:14.0785817,
          lng:-87.1857641
      } 
    },
    {
      "name": "Farmacia Kielsa",
      "logo": "https://seeklogo.com/images/F/farmacias-kielsa-logo-092248ACF5-seeklogo.com.gif",
      "banner": "https://lh5.googleusercontent.com/p/AF1QipNeN5hnubdbdDY1EP9apLvE81iGgOXM2mrtZLaT=w408-h544-k-no",
      "location": {
        "lat": 14.0669771,
        "lng": -87.2269942
      },
      "category": {
        "id": {
          "$oid": "636ad97b6f5c87142282b9c5"
        },
        "name": "Health"
      },
      "products": [
        { 
          "name": "FARINTER ALCOHOL CLINICO 120ML", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/2412000795.png", 
          "price": 37.00, 
          "description": "" 
        },
        { 
          "name": "VITOTAL VIT C PED 500MG TAB/MAST X30", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1210007614.jpg", 
          "price": 176.20, 
          "description": "" 
        },
        { 
          "name": "ASEPXIA CAMOUFLAGE CREMA 28GRS", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/2210001848.png", 
          "price": 259.50, 
          "description": "string" 
        },
        { 
          "name": "COLGATE CREMA DENTAL LUMINOUS WHITE 125ML", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/2512002581.jpeg", 
          "price": 189.25, 
          "description": "" 
        },
        { 
          "name": "SWF AZITROMICINA 500MG TAB X3", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1110007284.jpg", 
          "price": 381.04, 
          "description": "" 
        },
        { 
          "name": "FUNGIMAX FORTE 150MG CAP X1", 
          "img": "https://kielsaimgrepositorio.s3.us-east-2.amazonaws.com/kimg/1110008110.jpg", 
          "price": 187.09, 
          "description": "" 
        },
      ],
      "__v": 0
    }
  
];

const database = require('./modules/database');
const categoriesSchema = require('./models/categories')
const storesSchema    = require('./models/stores')
const queries    = require('./modules/queries')

categories.forEach(async (category) => {
  
  const data = {
    _id: category._id['$oid'],
    name: category.name,
    color: category.color,
    icon: category.icon
  }

  const res = await queries.Create(categoriesSchema, data)
});

stores.forEach(store => {
  const data = {
    name: store.name,
    logo: store.logo,
    banner: store.banner,
    location: {
        lat: store.location.lat,
        lng: store.location.lng
      },
    category: {
        id: store.category.id["$oid"],
        name: store.category.name
    },
    products: []
  }

  store.products.forEach(element => {
    const data2 = {
      name: element.name,
      img: element.img,
      price: Number(element.price/25).toFixed(2),
      description: element.description,
    }
    
    data.products.push(data2)
  });

  queries.Create(storesSchema, data)
});