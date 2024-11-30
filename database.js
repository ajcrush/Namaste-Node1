const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://mohitanand89878:KaXQhLGwVJG1I5Xc@namastenode.gvwka.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data = {
    firstname: "dinesh",
    lastname: "kumar",
    city: "Mumbai",
    phoneNumber: "8288428242",
  };
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents=>", insertResult);
  // // Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);
  const result = await collection.find({ firstname: "dinesh" }).count();
  console.log(result);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
