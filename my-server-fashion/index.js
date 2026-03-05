const express = require('express');
const app = express();
const port = 4000;

const morgan = require("morgan");
app.use(morgan("combined"));

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
    console.log(`server-fashion listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Fashion Server is running");
});

const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
const database = client.db("FashionData");
const fashionCollection = database.collection("Fashion");

// 1. Lấy toàn bộ Fashion, sắp xếp theo createdAt giảm dần
app.get("/fashions", cors(), async (req, res) => {
    const result = await fashionCollection
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
    res.send(result);
});

// 2. Lọc danh sách Fashion theo Style
app.get("/fashions/style/:style", cors(), async (req, res) => {
    const result = await fashionCollection
        .find({ style: req.params["style"] })
        .sort({ createdAt: -1 })
        .toArray();
    res.send(result);
});

// 3. Lấy 1 Fashion theo ObjectId
app.get("/fashions/:id", cors(), async (req, res) => {
    const o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0]);
});

// 4. Thêm mới Fashion
app.post("/fashions", cors(), async (req, res) => {
    req.body.createdAt = new Date();
    await fashionCollection.insertOne(req.body);
    res.send(req.body);
});

// 5. Cập nhật Fashion
app.put("/fashions", cors(), async (req, res) => {
    await fashionCollection.updateOne(
        { _id: new ObjectId(req.body._id) },
        {
            $set: {
                fashion_title: req.body.fashion_title,
                fashion_detail: req.body.fashion_detail,
                fashion_image: req.body.fashion_image,
                style: req.body.style
            }
        }
    );
    const o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0]);
});

// 6. Xóa Fashion theo id
app.delete("/fashions/:id", cors(), async (req, res) => {
    const o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    await fashionCollection.deleteOne({ _id: o_id });
    res.send(result[0]);
});