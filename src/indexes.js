const { MongoClient} =  require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "userData"

async function getdata(){
 let result = await client.connect()
 let db =  result.db(database)
 let collection  = db.collection("userData")
 let response = await collection.find({}).toArray()
 console.log(responseclear)
}

getdata();