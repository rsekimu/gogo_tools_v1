require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const app = express();

const { connectDB } = require("./config/db.js");
const { verifyToken } = require("./config/auth.js");
const { generateDocId, generateEmpId } = require("./functions.js");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;

// Login and Generate the JWT Token
app.post("/login", async (req, res) => {
  let { email, empID } = req.body;
  let admin_users = [];
  let admin_roles = ["hr", "abm"];
  try {
    const db = await connectDB("gogo_data");
    const employees = await db
      .collection("employees")
      .find({ role: { $in: admin_roles } })
      .toArray();
    admin_users = await employees;
    let user = admin_users.find((u) => u.email == email && u.emp_id == empID);
    if (!user) {
      let errObj = {
        kind: "Login And Generate token",
        name: "Invalid Logins",
        msg: "No user match the Logins",
        sltn: "Check the login Detals",
      };
      return res.status(401).json(errObj);
    }
    let payload = {
      empID: user.emp_id,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return res.status(200).json({ msg: "Succefully Loggenin", token });
  } catch (err) {
    let errObj = {
      kind: "Login And Generate token ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
// Register an Employee
app.post("/register_emp", verifyToken, async (req, res) => {
  let dbname = "gogo_data";
  let cname = "employees";
  let employee = req.body;
  try {
    const db = await connectDB(dbname);
    const ids = await db
      .collection("settings")
      .find({ settings_name: "ids" })
      .toArray();
    const { emp_doc_ids, emp_ids } = await ids[0];
    const new_doc_id = generateDocId(emp_doc_ids, "emp");
    const new_emp_id = generateEmpId(emp_ids, "EMP");

    employee = { ...employee, emp_doc_id: new_doc_id, emp_id: new_emp_id };
    const rslt = await db.collection("employees").insertOne(employee);
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "Register Emp",
      name: err.name,
      msg: err.message,
    };
    console.log("While Registering: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.delete("/delete_emp/:emp_doc_id/:emp_id", verifyToken, async (req, res) => {
  let dbname = "gogo_data";
  let cname = "employees";
  let { emp_doc_id, emp_id } = req.params;
  try {
    const db = await connectDB(dbname);
    const rslt = await db
      .collection(cname)
      .deleteOne({ emp_doc_id: emp_doc_id });
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "Delete Emp",
      name: err.name,
      msg: err.message,
    };
    console.log("While Registering: ", errObj);
    return res.status(500).json(errObj);
  }
});

//GENERAL ROUTES
app.get("/get_docs/:dbname/:cname", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;

  try {
    const db = await connectDB(dbname);
    const data = await db.collection(cname).find().toArray();
    return res.status(200).json(data);
  } catch (err) {
    let errObj = {
      kind: "General get Route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.post("/create_doc/:dbname/:cname", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;
  let body = req.body;
  try {
    const db = await connectDB(dbname);
    const rlst = await db.collection(cname).insertOne(body);
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "General Post Route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.post("/create_docs/:dbname/:cname", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;
  let body = req.body;
  try {
    const db = await connectDB(dbname);
    const rlst = await db.collection(cname).insertMany(body);
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "General Post-2 Route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.patch("/edit_doc/:dbname/:cname/:id", verifyToken, async (req, res) => {
  let { dbname, cname, id } = req.params;

  try {
    const db = await connectDB(dbname);
    const rslt = await db
      .collection(cname)
      .updateOne({ _id: new ObjectId(id) });
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "General Patch Route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.delete("/delete_doc/:dbname/:cname/:id", verifyToken, async (req, res) => {
  let { dbname, cname, id } = req.params;

  try {
    const db = await connectDB(dbname);
    const rslt = await db
      .collection(cname)
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "General Delete Route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});

// FORMS MANAGEMENT
// General from Management
app.post("/create_form/:dbname/:cname", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;
  // let { dbname, cname } = ["gogo_data", "forms"];
  let form = req.body;
  try {
    const db = await connectDB(dbname);
    const ids = await db
      .collection("settings")
      .find({ settings_name: "ids" })
      .toArray();
    const { form_doc_ids } = await ids[0];
    const new_doc_id = generateDocId(form_doc_ids, "form");

    form = { ...form, form_doc_id: new_doc_id };
    const rslt = await db.collection(cname).insertOne(form);
    return res.status(200).json(rslt);
  } catch (err) {
    let errObj = {
      kind: "Creating a form",
      name: err.name,
      msg: err.message,
    };
    console.log("While Creating a form: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.get("/get_form/:dbname/:cnames", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;
  // let { dbname, cname } = ["gogo_data", "forms"];

  try {
    const db = await connectDB(dbname);
    const forms = await db.collection(cname).find().toArray();
    return res.status(200).json(forms);
  } catch (err) {
    let errObj = {
      kind: "Getting All froms",
      name: err.name,
      msg: err.message,
    };
    console.log("While Getting all forms: ", errObj);
    return res.status(500).json(errObj);
  }
});
app.patch(
  "/update_form/:dbname/:cname/:doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, doc_id } = req.params;
    // let { dbname, cname } = ["gogo_data", "forms"];
    let form_updates = req.body;
    try {
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne({ form_doc_id: doc_id }, { $set: form_updates });
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Updating a form",
        name: err.name,
        msg: err.message,
      };
      console.log("While Updating a form: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
app.delete(
  "/delete_form/:dbname/:cname/:doc_id",
  verifyToken,
  async (req, res) => {
    // let { dbname, cname } = req.params;
    let { dbname, cname } = ["gogo_data", "forms"];
    let { doc_id } = req.params;
    try {
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .deleteOne({ form_doc_id: doc_id });
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Deleteing a form",
        name: err.name,
        msg: err.message,
      };
      console.log("While Deleting a form: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Electrical forms

// STATION STOCK MANAGEMENT
//Battery Management
// Get battery count like working batteries etc
app.get(
  "/battery_count/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;

    try {
      const db = await connectDB(dbname);
      const batteryObj = await db
        .collection(cname)
        .find(
          { station_doc_id: stn_doc_id },
          {
            projection: {
              "station_inventory.batteries.invetory_id": 1,
              "station_inventory.batteries.inventory_name": 1,
              "station_inventory.batteries.total_batteries": 1,
              "station_inventory.batteries.working_batteries": 1,
              "station_inventory.batteries.faulty_batteries": 1,
            },
          },
        )
        .toArray();
      return res.status(200).json(batteryObj[0]);
    } catch (err) {
      let errObj = {
        kind: "Getting Battery Count",
        name: err.name,
        msg: err.message,
      };
      console.log("While Getting all forms: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update Battery Stock
app.patch(
  "/update_battery_stock/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;
    let update = req.body;
    try {
      const db = await connectDB(dbname);
      update.update_id = generateDocId([], "stock_bat");

      const rslt = await db.collection(cname).updateOne(
        { station_doc_id: stn_doc_id },
        {
          $set: {
            "station_inventory.batteries.total_batteries":
              update.update.batteries,
            "station_inventory.batteries.working_batteries":
              update.update.batteries - update.update.faulty,
            "station_inventory.batteries.faulty_batteries":
              update.update.faulty,
          },
          $push: {
            "station_inventory.batteries.battery_stock_updates": update,
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Pushing Battery Stock Update",
        name: err.name,
        msg: err.message,
      };
      console.log("Pushing Battery Stock Update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);

// Gett array for the battery STock Updates
app.get(
  "/get_battery_stock_updates/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;
    try {
      const db = await connectDB(dbname);

      const batteryInventory = await db
        .collection(cname)
        .find(
          { station_doc_id: stn_doc_id },
          { projection: { "station_inventory.batteries": 1 } },
        )
        .toArray();
      return res.status(200).json(batteryInventory);
    } catch (err) {
      let errObj = {
        kind: "Getting Station Battery Inventory",
        name: err.name,
        msg: err.message,
      };
      console.log("While Getting Station Battery Inventory: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Delete a battery STock Update in Battery inventory
app.delete(
  "/delete_battery_stock_updates/:dbname/:cname/:stn_doc_id/:update_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id, update_id } = req.params;
    try {
      const db = await connectDB(dbname);
      const rslt = await db.collection(cname).updateOne(
        { station_doc_id: stn_doc_id },
        {
          $pull: {
            "station_inventory.batteries.battery_stock_updates": {
              update_id,
            },
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Updating a battery stock update",
        name: err.name,
        msg: err.message,
      };
      console.log("While Updating a battery stock update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update a battery STock Update in Battery inventory
app.patch(
  "/update_battery_stock_updates/:dbname/:cname/:stn_doc_id/:update_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id, update_id } = req.params;
    let updates = req.body;
    try {
      const db = await connectDB(dbname);
      const rslt = await db.collection(cname).updateOne(
        {
          station_doc_id: stn_doc_id,
          "station_inventory.batteries.battery_stock_updates.update_id":
            update_id,
        },
        {
          $set: {
            "station_inventory.batteries.battery_stock_updates.$.update":
              updates,
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Deleting a battery stock update",
        name: err.name,
        msg: err.message,
      };
      console.log("While Deleting a battery stock update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);

//Charger Management
// Get Charger count like working batteries etc
app.get(
  "/charger_count/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;

    try {
      const db = await connectDB(dbname);
      const chargerObj = await db
        .collection(cname)
        .find(
          { station_doc_id: stn_doc_id },
          {
            projection: {
              "station_inventory.chargers.invetory_id": 1,
              "station_inventory.charges.inventory_name": 1,
              "station_inventory.chargers.total_chargers": 1,
              "station_inventory.chargers.working_chargers": 1,
              "station_inventory.chargers.faulty_chargers": 1,
            },
          },
        )
        .toArray();
      return res.status(200).json(chargerObj[0]);
    } catch (err) {
      let errObj = {
        kind: "Getting Charger Count",
        name: err.name,
        msg: err.message,
      };
      console.log("While Chgarger all forms: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update Charger Stock
app.patch(
  "/update_charger_stock/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;
    let update = req.body;
    try {
      const db = await connectDB(dbname);
      update.update_id = generateDocId([], "stock_char");

      const rslt = await db.collection(cname).updateOne(
        { station_doc_id: stn_doc_id },
        {
          $set: {
            "station_inventory.chargers.total_chargers": update.update.chargers,
            "station_inventory.chargers.working_chargers":
              update.update.chargers - update.update.faulty,
            "station_inventory.chargers.faulty_chargers": update.update.faulty,
          },
          $push: {
            "station_inventory.chargers.charger_stock_updates": update,
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Pushing Charger Stock Update",
        name: err.name,
        msg: err.message,
      };
      console.log("Pushing Charger Stock Update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);

// Gett array for the Charger STock Updates
app.get(
  "/get_charger_stock_updates/:dbname/:cname/:stn_doc_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id } = req.params;
    try {
      const db = await connectDB(dbname);

      const chargerInventory = await db
        .collection(cname)
        .find(
          { station_doc_id: stn_doc_id },
          { projection: { "station_inventory.chargers": 1 } },
        )
        .toArray();
      return res.status(200).json(chargerInventory);
    } catch (err) {
      let errObj = {
        kind: "Getting Station Charger Inventory",
        name: err.name,
        msg: err.message,
      };
      console.log("While Getting Station Charger Inventory: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Delete a Charger STock Update in Charger inventory
app.delete(
  "/delete_charger_stock_updates/:dbname/:cname/:stn_doc_id/:update_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id, update_id } = req.params;
    try {
      const db = await connectDB(dbname);
      const rslt = await db.collection(cname).updateOne(
        { station_doc_id: stn_doc_id },
        {
          $pull: {
            "station_inventory.chargers.charger_stock_updates": {
              update_id,
            },
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Deleting a charger stock update",
        name: err.name,
        msg: err.message,
      };
      console.log("While Updating a charger stock update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update a Charger STock Update in Charger inventory
app.patch(
  "/update_charger_stock_updates/:dbname/:cname/:stn_doc_id/:update_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, stn_doc_id, update_id } = req.params;
    let updates = req.body;
    try {
      const db = await connectDB(dbname);
      const rslt = await db.collection(cname).updateOne(
        {
          station_doc_id: stn_doc_id,
          "station_inventory.chargers.charger_stock_updates.update_id":
            update_id,
        },
        {
          $set: {
            "station_inventory.chargers.charger_stock_updates.$.update":
              updates,
          },
        },
      );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: "Deleting a charger stock update",
        name: err.name,
        msg: err.message,
      };
      console.log("While Deleting a charger stock update: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);

// FORMS MANAGEMENT
//All Forms
//Get all forms
app.get(
  "/get_electrical_forms/:dbname/:cname",
  verifyToken,
  async (req, res) => {
    let { dbname, cname } = req.params;

    try {
      const db = await connectDB(dbname);
      const forms = await db.collection(cname).find().limit(10).toArray();
      return res.status(200).json(forms);
    } catch (err) {
      let errObj = {
        kind: "Getting Eletrical Froms ",
        name: err.name,
        msg: err.message,
      };
      console.log("While Getting Eletrical Froms: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Get  specific forms document
app.get(
  "/get_forms/:dbname/:cname/:form_name",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name } = req.params;

    try {
      const db = await connectDB(dbname);
      const forms = await db
        .collection(cname)
        .find({ form_name })
        .limit(10)
        .toArray();
      return res.status(200).json(forms);
    } catch (err) {
      let errObj = {
        kind: "Getting Eletrical Froms ",
        name: err.name,
        msg: err.message,
      };
      console.log("While Getting Eletrical Froms: ", errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Create a form
app.post(
  "/create_form/:dbname/:cname/:form_name",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name } = req.params;
    let form = req.body;

    try {
      form.form_doc_id = generateDocId([], `${form_name.slice(0, 5)}`);
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne({ form_name }, { $push: { forms: form } });
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Creating a ${form_name} form `,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Update A form status
app.patch(
  "/update_form_status/:dbname/:cname/:form_name/:form_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name, form_id } = req.params;
    let { status } = req.body;

    try {
      // form.form_doc_id = generateDocId([], `${form_name.slice(0, 5)}`);
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne(
          { form_name, "forms.form_doc_id": form_id },
          { $set: { "forms.$.form_status": status } },
        );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Creating a ${form_name} form `,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update a form
app.patch(
  "/update_form/:dbname/:cname/:form_name/:form_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name, form_id } = req.params;
    let updates = req.body;

    try {
      // form.form_doc_id = generateDocId([], `${form_name.slice(0, 5)}`);
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne(
          { form_name: form_name, "forms.form_doc_id": form_id },
          { $set: { "forms.$": updates } },
        );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Creating a ${form_name} form `,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update a form
// Delete a form
app.delete(
  "/delete_form/:dbname/:cname/:form_name/:form_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name, form_id } = req.params;
    let updates = req.body;

    try {
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne(
          { form_name: form_name },
          { $pull: { forms: { form_doc_id: form_id } } },
        );
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Deleting a ${form_name} form `,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
//display Form
app.get(
  "/get_form/:dbname/:cname/:form_name/:form_id",
  verifyToken,
  async (req, res) => {
    let { dbname, cname, form_name, form_id } = req.params;

    try {
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .find(
          { form_name: form_name, "forms.form_doc_id": form_id },
          { projection: { "forms.$": 1 } },
        )
        .toArray();
      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Deleting a ${form_name} form `,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Update a form
//Eletrical Forms
//Get all elctrical forms

// SETTINGS MANAGEMENT

// SHIFTS MANAGEMENT
//Create a shift
app.get(
  "/crete_shift/:dbname/:cname/:emp_doc_id",

  async (req, res) => {
    let { dbname, cname, emp_doc_id } = req.params;
    let shift = ""; //req.body;
    shift = {
      shift_id: "shift_001",
      shift_date: "2026-07-20",
      shift_day: "mon",
      shift_territory: "Kampala Central",
      shift_station: "Namungoona",
      shift_category: "morning",
      shift_start_time: "6:00am",
      shift_end_time: "2:00pm",
      shift_type: "8hr",
      shift_clock_in_time: "6:05am",
      shift_clock_out_time: "2:13pm",
      shift_clock_in_location: ["lats", "lons", "Namungoona", "Hoima Road"],
      shift_clock_out_location: ["lats", "lons", "Namungoona", "Kawala"],
      shift_isCurrent: true,
      shift_isReconciled: false,
      onDayoff: false,
      shift_covered: false,
      onOvertime: false,
      shift_worked_hrs: 8,
      shift_overtime_hrs: 0,
      on_leave: false,
      cover: false,
      suport: [],
    };

    try {
      shift.shift_id = generateDocId([], "shift");
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne({ emp_doc_id }, { $push: { shifts: shift } });

      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Creating a shift for ${form_name}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
// delete a shift
app.get(
  "/delete_shift/:dbname/:cname/:emp_doc_id/:shift_id",
  async (req, res) => {
    let { dbname, cname, emp_doc_id, shift_id } = req.params;
    let shift = ""; //req.body;
    try {
      // shift.shift_id = generateDocId([], "shift");
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne({ emp_doc_id }, { $pull: { shifts: { shift_id } } });

      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Deleting a shift for ${emp_doc_id}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Deleting a shift for ${emp_doc_id}`, errObj);
      return res.status(500).json(errObj);
    }
  },
);
// Edit a shift
app.get(
  "/edit_shift/:dbname/:cname/:emp_doc_id/:shift_id",
  async (req, res) => {
    let { dbname, cname, emp_doc_id, shift_id } = req.params;
    let shift = ""; //req.body;
    let updates = { shift_station: "Namungoona", shift_category: "morning" };
    try {
      // shift.shift_id = generateDocId([], "shift");
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne(
          { emp_doc_id, "shifts.shift_id": shift_id },
          { $set: { "shifts.$": updates } },
        );

      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Editing a shift for ${emp_doc_id}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Editing a shift for ${emp_doc_id}`, errObj);
      return res.status(500).json(errObj);
    }
  },
);

//Create shift Cover open for everyone
app.get(
  "/crete_shift_cover/:dbname/:cname",

  async (req, res) => {
    let { dbname, cname } = req.params;
    let shift = ""; //req.body;
    shift = {
      cover_req_id: "cover_001",
      who_reqs_id: "emp_abc001",
      who_reqs_name: "John Doe",
      suggested_emp_id: "",
      suggested_emp_name: "",
      shift_id: "shift_001",
      shift_date: "2026-07-20",
      shift_day: "mon",
      shift_territory: "Kampala Central",
      shift_station: "Namungoona",
      shift_category: "morning",
      shift_start_time: "6:00am",
      shift_end_time: "2:00pm",
      shift_type: "8hr",
      cover_isApproved: false,
    };

    try {
      shift.cover_req_id = generateDocId([], "shift");
      const db = await connectDB(dbname);
      const rslt = await db
        .collection(cname)
        .updateOne(
          { doc_name: "shift_covers" },
          { $push: { cover_reqs: shift } },
        );

      return res.status(200).json(rslt);
    } catch (err) {
      let errObj = {
        kind: `Creating a shift for ${form_name}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Creating a ${form_name} form `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Pick Up Shift cover request
app.get(
  "/pick_shift_cover/:dbname/:cname/:cover_req_id",

  async (req, res) => {
    let { dbname, cname, cover_req_id } = req.params;
    let suggested_emp = ""; //req.body;
    suggested_emp = {
      who_picked_id: "emp_abc007",
      who_picked_name: "AGAGAT",
    };

    try {
      // shift.cover_req_id = generateDocId([], "shift");
      const db = await connectDB(dbname);
      //Get the cover
      const cover = await db
        .collection(cname)
        .find(
          {
            doc_name: "shift_covers",
            "cover_reqs.cover_req_id": cover_req_id,
          },
          { projection: { "cover_reqs.$": 1 } },
        )
        .toArray();
      cover[0].cover_reqs[0].suggested_emp_id = suggested_emp.who_picked_id;
      cover[0].cover_reqs[0].suggested_emp_name = suggested_emp.who_picked_name;
      // Add the picked shifts cover to the pedding shift cover reqs
      const coverPickedRslt = await db
        .collection(cname)
        .updateOne(
          { doc_name: "pedding_shift_covers" },
          { $push: { shifts: cover[0].cover_reqs[0] } },
        );
      const setIsPicked = await db.collection(cname).updateOne(
        {
          doc_name: "shift_covers",
          "cover_reqs.cover_req_id": cover_req_id,
        },
        { $set: { "cover_reqs.$.isPicked": true } },
      );

      // let shift = {
      //   shift_id: generateDocId([], "shift"),
      //   shift_date: cover.shift_date,
      //   shift_day: cover.shift_day,
      //   shift_territory: cover.shift_territory,
      //   shift_station: cover.shift_station,
      //   shift_category: cover.shift_category,
      //   shift_start_time: cover.shift_start_time,
      //   shift_end_time: cover.shift_end_time,
      //   shift_type: cover.shift_type,
      //   shift_clock_in_time: "",
      //   shift_clock_out_time: "",
      //   shift_clock_in_location: [],
      //   shift_clock_out_location: [],
      //   shift_isCurrent: true,
      //   shift_isReconciled: false,
      //   onDayoff: false,
      //   shift_covered: false,
      //   onOvertime: false,
      //   shift_worked_hrs: "",
      //   shift_overtime_hrs: 0,
      //   on_leave: false,
      //   cover: true,
      //   suport: [],
      // };

      // const createShiftRslt = await db
      //   .collection("employees")
      //   .updateOne(
      //     { emp_doc_id: suggested_emp.who_picked_id },
      //     { $push: { shifts: shift } },
      //   );

      // //Update isCovered to true in the shifts collection
      // const updateCoverInReqs = await db.collection(cname).updateOne(
      //   { doc_name: "shift_covers", "cover_reqs.cover_req_id": cover_req_id },
      //   {
      //     $set: {
      //       "cover_reqs.$.isCovered": true,
      //     },
      //   },
      // );

      console.log("COVER: ", cover[0].cover_reqs[0]);

      return res.status(200).json(coverPickedRslt);
    } catch (err) {
      let errObj = {
        kind: `Pickicng up a shift cover ${cover_req_id}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Pickicng up a shift cover ${cover_req_id} `, errObj);
      return res.status(500).json(errObj);
    }
  },
);
//Approve shift Cover
app.get(
  "/approve_shift_cover/:dbname/:cname/:cover_req_id",

  async (req, res) => {
    let { dbname, cname, cover_req_id } = req.params;

    try {
      const db = await connectDB(dbname);
      const updateCover = await db.collection(cname).updateOne(
        {
          doc_name: "pedding_shift_covers",
          "shifts.cover_req_id": cover_req_id,
        },
        {
          $set: {
            "shifts.$.isCovered": true,
            "shifts.$.cover_isApproved": true,
          },
        },
      );
      //Get the cover
      const coverData = await db
        .collection(cname)
        .find(
          {
            doc_name: "pedding_shift_covers",
            "shifts.cover_req_id": cover_req_id,
          },
          { projection: { "shifts.$": 1 } },
        )
        .toArray();
      let cover = await coverData[0].shifts[0];

      // create the actual shift for the suggested EMP

      let shift = {
        shift_id: cover.shift_id,
        shift_date: cover.shift_date,
        shift_day: cover.shift_day,
        shift_territory: cover.shift_territory,
        shift_station: cover.shift_station,
        shift_category: cover.shift_category,
        shift_start_time: cover.shift_start_time,
        shift_end_time: cover.shift_end_time,
        shift_type: cover.shift_type,
        shift_clock_in_time: "",
        shift_clock_out_time: "",
        shift_clock_in_location: [],
        shift_clock_out_location: [],
        shift_isCurrent: true,
        shift_isReconciled: false,
        onDayoff: false,
        shift_covered: false,
        onOvertime: false,
        shift_worked_hrs: "",
        shift_overtime_hrs: 0,
        on_leave: false,
        cover: true,
        suport: [],
      };

      const createShiftRslt = await db
        .collection("employees")
        .updateOne(
          { emp_doc_id: cover.suggested_emp_id },
          { $push: { shifts: shift } },
        );

      console.log("COVER: ", cover);

      return res.status(200).json(createShiftRslt);
    } catch (err) {
      let errObj = {
        kind: `Approving a shift cover ${cover_req_id}`,
        name: err.name,
        msg: err.message,
      };
      console.log(`While  Approving a shift cover ${cover_req_id} `, errObj);
      return res.status(500).json(errObj);
    }
  },
);

// TESTING ROUTES
app.get("/get_all/:dbname/:cname", verifyToken, async (req, res) => {
  let { dbname, cname } = req.params;
  let admin_roles = ["hr", "abm"];
  try {
    const db = await connectDB(dbname);
    const employees = await db
      .collection(cname)
      .find(/*{ role: { $in: admin_roles } }*/)
      .limit(2)
      .toArray();
    return res.status(200).json(employees);
    // return res.status(200).json({ msg: "Hello World from Server" });
  } catch (err) {
    let errObj = {
      kind: "main route ",
      name: err.name,
      msg: err.message,
    };
    console.log("Server Erro: ", errObj);
    return res.status(500).json(errObj);
  }
});
console.log("Server Runnning");
let Port = process.env.PORT || 8080;
app.listen(Port, () => {
  console.log(`Server Started and Running on Port: ${Port}`);
});
