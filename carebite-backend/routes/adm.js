const prisma = require("../config/prisma");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;

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
            res.status(400).json("No adm found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "ADM credentials sent",
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
            res.status(400).json("No adm attendance found");
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
            res.status(400).json("No adm found");
        }
        await prisma.users.delete({
            where: {
                id_hospital_id: {      // Correct composite key
                    id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
        });
        res.status(200).json("ADM deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'ADM not found or already deleted' });
    }
});

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



router.get("/salaries/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.users.findFirst({

            where:
            {
                id: id

            }
        });

        if (!user) {
            res.status(400).json("No Salary found");
        }

        const payrolls = await prisma.paycheck.findMany({

            where:
            {
                hospital_id: user.hospital_id

            }
        });

        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const lastRunDate = await fs.readFile('./routes/lastRun.txt', 'utf-8');
        console.log(lastRunDate);
        console.log(today);
        console.log(now.getDate());

        if (now.getDate() === 1 && lastRunDate !== today) {
            console.log(today);

            for (const entry of payrolls) {
                await prisma.paycheck.update({

                    where: {
                        pay_id_hospital_id: {      // Correct composite key
                            pay_id: entry.pay_id,      // Correct pay_id
                            hospital_id: user.hospital_id
                        }
                    }
                    ,
                    data:
                    {
                        pay_id: entry.pay_id,
                        hospital_id: user.hospital_id,
                        bonus: "No",
                        receive_status: "No",
                        sent_status: "No"
                    }
                });
            }

            await fs.writeFile('./routes/lastRun.txt', today);

            res.status(200).json("Data succesfully loaded");


        }
        else
            res.status(200).json(payrolls);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/salaries/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body.list;
        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }

            }
        );

        if (!user) {
            res.status(400).json("No adm found");
        }

        for (const entry of data) {

            await prisma.paycheck.update({
                where: {
                    pay_id_hospital_id: {      // Correct composite key
                        pay_id: entry.pay_id,      // Correct pay_id
                        hospital_id: user.hospital_id
                    }
                }
                ,
                data:
                {
                    pay_id: entry.pay_id,
                    hospital_id: user.hospital_id,
                    bonus: entry.bonus,
                    receive_status: entry.receive_status,
                    sent_status: entry.sent_status
                }
            });
        }


        res.status(200).json(data);

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
            res.status(400).json("No ADM hospital Salary found");
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
            res.status(400).json("No ADM saab found");
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




router.get("/genreq/:id", async (req, res) => {
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
            res.status(401).json("No adm found");
        }



        let workid = await prisma.grocery_items.findMany();


        res.status(200).json(workid);



    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/genreq/:id", async (req, res) => {

    const requestList = req.body.list;


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
            res.status(401).json("No adm found");
        }



        for (const entry of requestList) {
            await prisma.grocery_request.create
                ({

                    data:
                    {
                        grocery_request_id: entry.grocery_request_id,
                        hospital_id: user.hospital_id,
                        quantity_requested: entry.quantity_requested,
                        status_sent: entry.status_sent,
                        status_recieved: entry.status_recieved



                    }



                });




        }

        res.status(200).json(requestList);

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.get("/requested/:id", async (req, res) => {

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
            res.status(401).json("No ADM found");
        }

        const requested = await prisma.grocery_request.findMany({
            where:
            {
                hospital_id: user.id_hospital_id,
                status_recieved: {
                    not: "Yes"
                }
            }
            ,
            include: {
                grocery_items: {
                    select: { name: true }
                }
            }

        })

        res.status(200).json(requested);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/requested/:id", async (req, res) => {

    const id = Number(req.params.id);
    const updatelist = req.body.list;
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
            res.status(401).json("No ADM found");
        }



        for (const entry of updatelist) {

            await prisma.grocery_request.update({
                where:
                {
                    grocery_request_id: entry.grocery_request_id
                }
                ,
                data:
                {
                    grocery_request_id: entry.grocery_request_id,
                    hospital_id: user.hospital_id,
                    quantity_requested: entry.quantity_requested,
                    status_sent: entry.status_sent,
                    status_recieved: entry.status_recieved
                }

            });
        }

        res.status(200).json(updatelist);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});


module.exports = router;