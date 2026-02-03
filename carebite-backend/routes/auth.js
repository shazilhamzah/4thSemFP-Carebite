const prisma = require("../config/prisma");
const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


function generateRandomUserId() {
  return Math.floor(100000000 + Math.random() * 900000000); // 9 digit uid
}



router.get("/users", async (req, res) => {
  const user = await prisma.users.findMany();
  return res.json(user);

});

router.post("/register", async (req, res) => {
  try {
    const {
      name, username, password, role,
      hospital_id, cnic, nationality, bloodgroup,
      address, contact_no
    } = req.body;

    const existingUser = await prisma.users.findFirst({
      where: {
        username: username
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists for this hospital" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const id = generateRandomUserId();

    const newUser = await prisma.users.create({
      data: {
        id,
        hospital_id,
        name,
        role,
        password: hashedPassword,
        username,
        cnic,
        nationality,
        bloodgroup,
        address,
        contact_no
      }

    });

    if (role !== "Donor" && role !== "General Secretary" && role !== "General Manager Coordinator") {

      await prisma.attendance.create({
        data: {
          attendance_id: id,
          hospital_id,

        }

      });
    }

    if (role != "Donor")
      await prisma.paycheck.create({
        data: {
          pay_id: id,
          hospital_id
        }

      });

    if (role === "Donor") {

      await prisma.donors.create({
        data: {
          id: id,
        }

      });

    }

    else if (role === "General Secretary") {
      await prisma.gs.create({
        data: {
          gs_id: id,
        }

      });

    }

    else if (role === "General Manager Coordinator") {
      await prisma.gm_coord.create({
        data: {
          gm_coord_id: id,
        }

      });

    }



    else if (role === "General Manager Hospital") {
      await prisma.gm_hospital.create({
        data: {
          gm_hospital_id: id,
          hospital_id
        }

      });

    }

    else if (role === "ADM") {
      await prisma.adm.create({
        data: {
          adm_id: id,
          hospital_id
        }

      });

    }
    else if (role === "Supervisor") {
      await prisma.supervisor.create({
        data: {
          supervisor_id: id,
          hospital_id,
        }

      });

    }

    else if (role === "Worker") {
      await prisma.workers.create({
        data: {
          worker_id: id,
          hospital_id,
          role: "Helper"
        }

      });

    }

    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: "User created successfully",
      user: userWithoutPassword,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("I was in here!");
    const { username, password } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        username: username
      }
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Credentials!" });
    }

    const userResponse = user;
    delete userResponse.password;
    res.status(200).json({
      message: "Login Successful",
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error during login" });
  }
});

module.exports = router;

