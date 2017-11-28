const express = require("express");
const cors = require("cors");
const app = express();
const staff = require("./data/staff");

app.use(cors());



app.get("/", (req, res) => {
    res.json(staff);
});



app.get("/:id", (req, res) => {
    for (var i = 0; i < staff.data.length; i++) {
        if (staff.data[i].id == req.params.id) {
            return res.json(staff.data[i]);
        }
    }
    if(!staff.data[i]) {
        res.status = 404;
        res.json({error: {message: "No record found!"}
        });
    }
    // res.json(haveItem);
});


app.listen(process.env.PORT || 3000, () => {
    console.log("TS-3 Version-2 on localhost:3000");
});
