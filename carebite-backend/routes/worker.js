const prisma = require("../config/prisma");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get("/announcements/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {

        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }
            }
        );
        if (!user) {
            res.status(400).json("No worker found");
        }


        const announcements = await prisma.announcements.findMany(
            {
                where:
                {
                    hospital_id: user.hospital_id,
                    // date_added: new Date()
                }
            }
        );
        if (announcements.length == 0) {
            res.status(200).json("No announcements yet");
        }
        else {

            res.status(200).json(announcements);
        }
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});



router.get("/salary/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.paycheck.findFirst({

            where:
            {
                pay_id: id
            }
        });

        if (!user) {
            res.status(400).json("No worker Salary found");
        }
        else {

            res.status(200).json(user);
        }

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/salary/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }

            }
        );

        if (!user) {
            res.status(400).json("No worker found");
        }
        await prisma.paycheck.update({
            where: {
                pay_id_hospital_id: {      // Correct composite key
                    pay_id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
            ,
            data:
            {
                pay_id: user.id,
                hospital_id: user.hospital_id,
                bonus: data.bonus,
                receive_status: data.receive_status,
                sent_status: data.sent_status
            }
        });

        res.status(200).json(user);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});




router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.users.findFirst({

            where:
            {
                id: id
            }
        });

        if (!user) {
            res.status(400).json("No worker found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "Worker credentials sent",
                user: wrokerRem
            }
        );



    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});



router.get("/attendance/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.attendance.findMany({

            where:
            {
                attendance_id: id
            }
        });

        if (user.length == 0) {
            res.status(400).json("No worker attendance found");
        }

        res.status(200).json(user);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post('/delete/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }

            }
        );

        if (!user) {
            res.status(400).json("No worker found");
        }
        await prisma.users.delete({
            where: {
                id_hospital_id: {      // Correct composite key
                    id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
        });
        res.status(200).json("Worker deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'Worker not found or already deleted' });
    }
});





module.exports = router;