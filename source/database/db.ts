const { MongoClient } = require("mongodb");
const uri =
	"mongodb+srv://BinaryCodeTechonolies:Qwerty2019@cluster0.8p9xq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});
