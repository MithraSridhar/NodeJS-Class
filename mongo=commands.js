// show dbs => show all database 
// use dbname => switch to db 
// db=> show current db
//show collections => show collections


//collection insert
db.products.insertMany([
    {
      id: "1",
      name: " iPhone 15 (128 GB)",
      poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
      price: "₹77,900 ",
      rating: 4.5,
      summary:
        "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
    },
    {
      id: "2",
      name: "iPhone 15 Pro (128 GB) ",
      poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
      price: "₹1,34,900 ",
      rating: 5.0,
      summary:
        " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    },
    {
      id: "3",
      name: "Samsung Galaxy S23 5G (256GB Storage) ",
      poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
      price: "₹65,320",
      rating: 4.7,
      summary:
        "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
    },
    {
      id: "4",
      name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
      poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
      price: "₹1,00,000",
      rating: 5.0,
      summary:
        "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
    },
    {
      id: "5",
      name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
      poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
      price: "₹20,999 ",
      rating: 4.8,
      summary:
        "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
    },
    {
      id: "6",
      name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
      poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
      price: "₹75,900 ",
      rating: 4.9,
      summary:
        "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
    },
    {
      id: "7",
      name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
      poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
      price: "₹22,999",
      rating: 4.5,
      summary:
        "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
    },
    {
      id: "8",
      name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
      poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
      price: "₹27,141",
      rating: 4.3,
      summary:
        "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
    },
    {
      id: "9",
      name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
      poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
      price: "₹84,990",
      rating: 5.0,
      summary:
        "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
    },
    {
      id: "10",
      name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
      poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
      price: "₹1,10,790",
      rating: 4.9,
      summary:
        " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD",
    },
  ]
  )

//collection read
db.products.find().pretty().limit(5)

//fine one
db.products.findOne({name:" iPhone 15 (128 GB)"})

//find with condition
db.products.find({rating: {"$gte": 4.7}}).pretty()

//projections => include or exclude fields

//inclusion 1
db.products.find({},{name:1 , price:1}).pretty() // first brace for condition

//exclusion 0
db.products.find({},{name:0 , price:0}).pretty() 

//inclusion and exclusion - Not possible ❌ 
db.products.find({},{name:1 , price:0}).pretty() 
db.products.find({},{name:0 , price:1}).pretty() 

//Exclude '_id'
db.products.find({},{_id:0, name:1 , price:1}).pretty() 

//limit
db.collection.find({
  product_price: {
    "$gt": 500
  }
}).limit(5)

//remove
db.collection.remove({ 
  "$expr": {
      "$in": ["product_price"]
  }
})

//distinct
db.products.distinct("rating")

//filter duplicate and remove
let prices = db.collection.aggregate([
  {
    "$group": {
      "_id": "$product_price",
      "count": {
        "$sum": 1
      }
    }
  },
  {
    "$match": {
      "_id": {
        "$ne": null
      },
      "count": {
        "$gt": 1
      }
    }
  },
  {
    "$project": {
      "product_price": "$_id",
      "_id": 0
    }
  }
])

prices.forEach(price => {
  db.collection.remove( { product_price: { "$eq": price } } )
});


//sorting 
//asc=1
db.products.find({}).sort({rating:1}).pretty()

//desc=-1 //top 5
db.products.find({}).sort({rating:-1}).pretty().limit(5)
//sorting 2 fields // last 5
db.products.find({}).sort({name:1,rating:-1}).skip(5).pretty()

//aggregation

db.orders.insertMany(
  [
    {_id:0,productName:"Steel Beam", status:"new",quantity:10},
    {_id:1,productName:"Steel Beam", status:"Urgent",quantity:20},
    {_id:2,productName:"Steel Beam", status:"Urgent",quantity:30},
    {_id:3,productName:"Iron Rod", status:"new",quantity:15},
    {_id:4,productName:"Iron Rod", status:"Urgent",quantity:50},
    {_id:5,productName:"Iron Rod", status:"Urgent",quantity:10}
  ]
)

db.orders.find().pretty()

//match urgent products
//SQL
//select * from orders where status ="Urgent";


//group based on product name and sum its quantity
//SQL

//filter status ="Urgent"
db.orders.aggregate(
  [
    //stage 1
    {
      $match:{status :"Urgent"}
    }
  ]
)  

//select sum(quantity) from orders where status ="Urgent" group by productName;
db.orders.aggregate(
  [
    //stage 1
    {
      $match:{status :"Urgent"}
    },

    //stage2
    {
      $group:{_id:"$productName",totalQuantity:{$sum:"$quantity"}}
    }
  ]
)

//lookups  => join

db.order.insertMany(
  [
    {"_id":1,"item":"almonds", "price":12,"quantity":2},
    {"_id":2,"item":"pecans", "price":20,"quantity":1},
  ]
)

db.inventory.insertMany( [
  { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
  { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
  { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
  { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
  { "_id" : 5, "sku": null, "description": "Incomplete" },
  { "_id" : 6 }
] )

//joining order and inventory using item and sku fields

db.order.aggregate(
  [
    {
      $lookup:{
        from:"inventory", 
        localField:"item",
        foreignField:"sku",
        as:"combined_data",
      }
    }
  ]
).pretty()

//update all products with category as electronics
//updates all documents
db.products.updateMany({},{$set:{category:"electronics"}})

//update only first occurrence alone
db.products.updateOne({category:"electronics"},{$set:{category:"mobile"}})

//delete all products where rating >4.9
db.products.find({rating:{$gt:4.9}}).pretty()

db.products.deleteMany({rating:{$gt:4.9}})

db.products.find({rating:{$gte:4.9}}).pretty()

db.products.deleteOne({rating:{$gte:4.9}})






//basic cursor methods - map, toArray, pretty, forEach, limit, count, sort

//pointer
var myCursor=db.orders.find({_id:5}).pretty()

//next() - to create next set of data

var myCursor=db.orders.find({_id:{$gt:3}}).pretty()
while(myCursor.hasNext()){
  print(tojson(myCursor.next()))
}

//foreach
var myCursor=db.orders.find({_id:5}).pretty()
myCursor.forEach(printjson)
//print doc in json format

var myCursor=db.orders.find().pretty()
myCursor.forEach(function(product){
  print(`productName ${product.productName} Qunatity ${product.quantity}`)
})

//urgent prod

var myCursor=db.orders.find({status:"Urgent"}).pretty()
myCursor.forEach(function(urgentOrder){
  print(`Order ID: ${urgentOrder._id}, Product Name: ${urgentOrder.productName}, status: ${urgentOrder.status}`)
})

//count
db.orders.find().count()
db.orders.countDocuments()
db.orders.estimatedDocumentCount()

//toArray() => used to convert documents to array
var allOrders = db.orders.find().toArray()
allOrders.forEach(function(order){
  print(`Order ID : ${order._id}, Product Name: ${order.productName}`)
})

//map()
var listProductName = db.orders.find().map(function(data){
  return data.productName
})


var listProductName = db.orders.find().map(function(data){
  return data.quantity*100
})

//mapreduce function together

//defining map function => always emits(returns) key and value pair
var mapFunc = function(){
  emit(this.productName,this.quantity)
}

//defining reduce function
var reduceFunc = function(key,values){
  return Array.sum(values)
}

//combining map and reduce
var result=db.orders.mapReduce(
  mapFunc,
  reduceFunc,
  {out:"totalQuantity"} //specifying the collection
)
db.totalQuantity.find().forEach(printjson)



