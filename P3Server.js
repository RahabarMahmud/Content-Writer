/**
 * The function for file for saving the stuff on server.
 * The server party was lead by Mainuddin Alam Irteja.
 * Rahabar Mahmud, Toufiq Abir Farhan and Kazi Istiak also took
 * part in the implementations.
 *
 */

const express = require("express"); // start express application
const mongodb = require("mongodb").MongoClient; // load mongodb DBMS
const server = express(); // define top level function
const port = 3896; // server will listen on port 9892
const blog = ["", "", ""]; // data structure to save data in text fields
const bool = ["false", "false", "false"];
let wordBank = "";
let inform = "Sorry. This blog is not currently available.";
let publishedBlog = [inform, inform, inform];
let globalDB;

//Using Mainuddin Alam Irteja's credentials to access his database
let head = "mongodb://";
let user = "ma_irteja";
let password = "angleTRUEfeet82";
let localHost = "127.0.0.1";
let localPort = "27017";
let database = "ma_irteja";
let connectionString =
  head + user + ":" + password + "@" + localHost + ":" + localPort + "/" + user;

server.use(express.json()); // implement JSON recognition
server.use(express.urlencoded({ extended: true })); // implement incoming name:value pairs to be any type

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allow any origin
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // allow any method
  res.header("Access-Control-Allow-Headers", "Content-Type"); // accept only headers with this type
  next(); // middleware callback function required for processing
};

server.use(allowCrossDomain); // implement allowable domain characteristics

/**
 * Posting the first blog to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blog1", function (req, res) {
  console.log("Previous: " + blog[0]);
  console.log("blog: " + req.body.blog1);

  let query = { bNum1: "1" };
  let value = { $set: { blog1: req.body.blog1 } };
  console.log(query);
  console.log(value);
  globalDB.collection("Blogs").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  blog[0] = req.body.blog1;
  // return res.status(200).send(obj);
});

/**
 * Posting the second blog to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blog2", function (req, res) {
  console.log("Previous: " + blog[1]);
  console.log("blog: " + req.body.blog2);

  let query = { bNum2: "2" };
  let value = { $set: { blog2: req.body.blog2 } };
  console.log(query);
  console.log(value);
  globalDB.collection("Blogs").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  blog[1] = req.body.blog2;
  // return res.status(200).send(obj);
});

/**
 * Posting the third blog to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blog3", function (req, res) {
  console.log("Previous: " + blog[2]);
  console.log("blog: " + req.body.blog3);

  let query = { bNum3: "3" };
  let value = { $set: { blog3: req.body.blog3 } };
  console.log(query);
  console.log(value);

  globalDB.collection("Blogs").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  blog[0] = req.body.blog3;
  // return res.status(200).send(obj);
});

/**
 * Posting the first blog state to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blogState1", function (req, res) {
  //console.log("Previous: " + bool[0]);
  console.log("state: " + req.body.state1);
  let check = req.body.state1;
  let query = { sNum1: "1" };
  let value = { $set: { state1: req.body.state1 } };
  console.log(query);
  console.log(value);
  globalDB.collection("States").updateOne(query, value, insertCB);

  // let obj = { blog1: req.body.blog1 };

  //  bool[0] = req.body.state1;
  // re
});

/**
 * Posting the second blog state to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blogState2", function (req, res) {
  console.log("state: " + req.body.state2);

  let query = { sNum2: "2" };
  let value = { $set: { state2: req.body.state2 } };
  console.log(query);
  console.log(value);

  globalDB.collection("States").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  bool[1] = req.body.state2;
  // re
});

/**
 * Posting the third blog state to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/blogState3", function (req, res) {
  console.log("state: " + req.body.state3);

  let query = { sNum3: "3" };
  let value = { $set: { state3: req.body.state3 } };
  console.log(query);
  console.log(value);
  globalDB.collection("States").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  bool[2] = req.body.state3;
  // re
});

/**
server.post("/publishedBlog1", function (req, res) {
  console.log("name:" + req.body.pubBlog1);
  let obj = { pubBlog1: req.body.pubBlog1 };
  publishedBlog[0] = req.body.pubBlog1;

  return res.status(200).send(obj);
});

server.post("/publishedBlog2", function (req, res) {
  console.log("name:" + req.body.pubBlog2);
  let obj = { pubBlog2: req.body.pubBlog2 };
  publishedBlog[1] = req.body.pubBlog2;
  return res.status(200).send(obj);
});

server.post("/publishedBlog3", function (req, res) {
  console.log("name:" + req.body.pubBlog3);
  let obj = { pubBlog3: req.body.pubBlog3 };
  publishedBlog[2] = req.body.pubBlog3;
  return res.status(200).send(obj);
});
 */

/**
 * Posting the word bank to the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.post("/wordBank", function (req, res) {
  console.log("Previous: " + wordBank);
  console.log("wBank: " + req.body.wBank);

  let query = { bName: "bankName" };
  let value = { $set: { wBank: req.body.wBank } };
  console.log(query);
  console.log(value);
  globalDB.collection("WordBank").updateOne(query, value, insertCB);
  // let obj = { blog1: req.body.blog1 };

  wordBank = req.body.wBank;
  // re
});

/**
 * A get request to get the first blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blog1", function (req, res) {
  globalDB.collection("Blogs").findOne({ bNum1: "1" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

/**
 * A get request to get the second blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blog2", function (req, res) {
  globalDB.collection("Blogs").findOne({ bNum2: "2" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

/**
 * A get request to get the third blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blog3", function (req, res) {
  globalDB.collection("Blogs").findOne({ bNum3: "3" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

/**
 * A get request to get the word bank from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/wordBank", function (req, res) {
  globalDB
    .collection("WordBank")
    .findOne({ bName: "bankName" }, function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
});

/**
 * A get request to get the state of the first blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blogState1", function (req, res) {
  globalDB.collection("States").findOne({ sNum1: "1" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

/**
 * A get request to get the state of the second blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blogState2", function (req, res) {
  globalDB.collection("States").findOne({ sNum2: "2" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

/**
 * A get request to get the state of the third blog from the database
 *
 *  Done by Mainuddin Alam Irteja
 */
server.get("/blogState3", function (req, res) {
  globalDB.collection("States").findOne({ sNum3: "3" }, function (err, result) {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});
/** 
server.get("/publishedBlog1", function (req, res) {
  console.log(req.url);
  return res.status(200).send(publishedBlog[0]);
});

server.get("/publishedBlog2", function (req, res) {
  console.log(req.url);
  return res.status(200).send(publishedBlog[1]);
});

server.get("/publishedBlog3", function (req, res) {
  console.log(req.url);
  return res.status(200).send(publishedBlog[2]);
});
*/


//callback function to throw error
function insertCB(err, mods, status) {
  if (err != null) throw err;
}
/** 
server.post("/blog2", function (req, res) {
  console.log("name:" + req.body.name2);
  let obj = { name2: req.body.name2 };
  blog[1] = req.body.name2;
  return res.status(200).send(obj);
});

// execute callback1 function when receiving a post at the /textField3 url
server.post("/blog3", function (req, res) {
  console.log("name:" + req.body.name3);
  let obj = { name3: req.body.name3 };
  blog[2] = req.body.name3;
  return res.status(200).send(obj);
});

server.post("/blogState1", function (req, res) {
  console.log("name:" + req.body.name4);
  let obj = { name4: req.body.name4 };
  bool[0] = req.body.name4;
  console.log(bool[0]);
  return res.status(200).send(obj);
});

server.post("/blogState2", function (req, res) {
  console.log("name:" + req.body.name5);
  let obj = { name5: req.body.name5 };
  bool[1] = req.body.name5;
  console.log(bool[1]);
  return res.status(200).send(obj);
});

server.post("/blogState3", function (req, res) {
  console.log("name:" + req.body.name6);
  let obj = { name6: req.body.name6 };
  bool[2] = req.body.name6;
  console.log(bool[2]);
  return res.status(200).send(obj);
});

server.get("/blog2", function (req, res) {
  console.log(req.url);
  return res.status(200).send(blog[1]);
});

// execute callback3 function when receiving a get at the /textField3 url
server.get("/blog3", function (req, res) {
  console.log(req.url);
  return res.status(200).send(blog[2]);
});

server.get("/blogState1", function (req, res) {
  console.log(req.url);
  return res.status(200).send(bool[0]);
});

server.get("/blogState2", function (req, res) {
  console.log(req.url);
  return res.status(200).send(bool[1]);
});

server.get("/blogState3", function (req, res) {
  console.log(req.url);
  return res.status(200).send(bool[2]);
});

server.get("/publishedBlog1", function (req, res) {
  console.log(req.url);
  return res.status(200).send(publishedBlog[0]);
});


*/

// Create the connection to a mongoDB database instance
//
// Parameter 1: see connectionString above
// Parameter 2: Anonymous callback function that either:
//                (1) throws an error, or
//                (2) continues regular processing
mongodb.connect(connectionString, function (error, client) {
  if (error) {
    throw error;
  }

  // This version of mongodb returns a client object
  // which contains the database object
  globalDB = client.db("ma_irteja");

  // "process" is an already available global variable with information
  // about this particular Node.js application.
  //
  // If the SIGTERM event occurs, use the anonymous function to
  // close the database and server in a controlled way.
  process.on("SIGTERM", function () {
    console.log("Shutting server down.");
    client.close();
    server.close();
  });

  // Start server listening on port 3896
});
var serverside = server.listen(port, function () {
  console.log("Listening on port %d", serverside.address().port);
});
