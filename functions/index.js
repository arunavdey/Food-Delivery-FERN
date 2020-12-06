const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HvJvWI2dC9ztPW9cubD2HCrLyw3b9gJ6fPG6Y7tYfD4yQ7SdBoY2fKIbURElbHeZmZgQKfqFd0ikCfq0bwe0Wcl00UeBCr08H"
);

//API

//- App config
const app = express();

//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//- API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/smn", (request, response) =>
    response.status(200).send("hello world 2")
);

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//- Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/food-del-d46f4/us-central1/api
