const express = require("express");
const cors = require("cors");
const app = express();
const staff = require("./data/staff");

app.use(cors());

app.get("/", (req, res) => {
    res.json(staff);
});

app.get("/:id", (req, res) => {
    for (var i = 0; i < staff.staffers.length; i++) {
        if (staff.staffers[i].id == req.params.id) {
            return res.json(staff.staffers[i]);
        }
    }
    if(!staff.staffers[i]) {
        res.status(404);
        // const message = res.json({error: {message: "No record found!"} });
        // res.status(404).send(message);
        res.json({error: {message: "No record found!"}
        });
    }
});

app.use(function(req, res, next){
  res.status(404);

  if (!staff.staffers[i]) {
    res.send({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("TS-3 Version-2 on localhost:3000");
});
