const prisma = require("../config/prisma");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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
            res.status(400).json("No donor found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "Donor credentials sent",
                user: wrokerRem
            }
        );



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
            res.status(400).json("No donor found");
        }
        await prisma.users.delete({
            where: {
                id_hospital_id: {      // Correct composite key
                    id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
        });

        await prisma.donors.delete({
            where: {

                id: user.id,
            }
        });


        res.status(200).json("donor deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'donor not found or already deleted' });
    }
});


router.get("/donations/:id", async (req, res) => {
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
            res.status(401).json("No donor found");
        }



        let workid = await prisma.donations.findMany(

            {
                where:
                {
                    donor_id: user.id,
                    receive_status:
                    {
                        not: "Yes"
                    }

                }



            });

        if (workid.length == 0) {
            const newEntry = await prisma.donations.create({
                data:
                {
                    donor_id: user.id,

                }
            })

            res.status(200).json(newEntry);
        }


        else {
            res.status(200).json(workid);
        }

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/donations/:id", async (req, res) => {
    const id = Number(req.params.id);
    const updates = req.body
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
            res.status(401).json("No donor found");
        }

        await prisma.donations.update({
            where:
            {
                donation_id: updates.donation_id,
                donor_id: user.id
            }
            ,
            data:
            {
                donation_id: updates.donation_id,
                donor_id: user.id,
                sent_status: updates.sent_status,
                receive_status: updates.receive_status
            }

        });


        res.status(200).json(updates);
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});



router.get("/workstatus/:id", async (req, res) => {
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
            res.status(401).json("No donor found");
        }



        let workid = await prisma.work_status.findMany(

            {
                where:
                {
                    curr_date: new Date(),

                }



            });



        res.status(200).json(workid);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});


router.get("/menu/:id", async (req, res) => {
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
            res.status(401).json("No donor found");
        }



        let workid = await prisma.menu.findMany();



        res.status(200).json(workid);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.get("/attendance/present/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.users.findFirst({

            where:
            {
                id: id
            }
        });

        if (!user) {
            res.status(400).json("No donor found");
        }

        const count = await prisma.attendance.findMany({

            where:
            {

                curr_date: new Date(),
                status: "Present",

            }
            ,
            include: {
                users: {
                    select: {
                        name: true
                    }
                }
            }

        });




        res.status(200).json(count);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});




module.exports = router;


