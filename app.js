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
            return res.json({data: staff.staffers[i]});
        }
    }
    if(!staff.staffers[i]) {
        res.status(404);
        res.json({error: {message: "No record found!"}
        });
    }
});

app.listen(process.env.PORT || 3000, () => {
});
