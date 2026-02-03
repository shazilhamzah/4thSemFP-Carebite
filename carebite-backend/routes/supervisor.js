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
            res.status(400).json("No Supervisor found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "Supervisor credentials sent",
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
            res.status(400).json("No Supervisor attendance found");
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
            res.status(400).json("No Supervisor found");
        }
        await prisma.users.delete({
            where: {
                id_hospital_id: {      // Correct composite key
                    id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
        });
        res.status(200).json("Supervisor deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'Supervisor not found or already deleted' });
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
            res.status(400).json("No Supervisor Salary found");
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
            res.status(400).json("No Supervisor found");
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
            res.status(401).json("No Supervisor found");
        }



        let workid = await prisma.work_status.findFirst(

            {
                where:
                {
                    curr_date: new Date(),
                    hospital_id: user.hospital_id
                }



            });



        if (!workid) {

            workid = await prisma.work_status.create(

                {
                    data:
                    {
                        work_id: user.id,
                        hospital_id: user.hospital_id,
                        curr_date: new Date()

                    }


                });






        }

        res.status(200).json(workid);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/workstatus/:id", async (req, res) => {

    try {
        const id = Number(req.params.id);
        const { breakfast_status, dinner_status } = req.body;

        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }
            }
        );

        if (!user) {
            res.status(401).json("No Supervisor found");
        }

        const updates = await prisma.work_status.update({
            where:
            {
                work_id: id,
                hospital_id: user.hospital_id,
                curr_date: new Date()


            }
            ,
            data:
            {
                work_id: user.id,
                hospital_id: user.hospital_id,
                breakfast_status: breakfast_status,
                dinner_status: dinner_status,
                curr_date: new Date()



            }


        });


        res.status(200).json(updates);



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
            res.status(401).json("No Supervisor found");
        }



        let workid = await prisma.utensils.findMany();


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
            res.status(401).json("No Supervisor found");
        }



        for (const entry of requestList) {
            await prisma.utensil_request.create
                ({

                    data:
                    {
                        utensil_request_id: entry.utensil_request_id,
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
            res.status(401).json("No Supervisor found");
        }

        const requested = await prisma.utensil_request.findMany({
            where:
            {
                hospital_id: user.id_hospital_id,
                // status_recieved: {
                //     not: "Yes"
                // }
            }
            ,
            include: {
                utensils: {
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
            res.status(401).json("No Supervisor found");
        }



        for (const entry of updatelist) {

            await prisma.utensil_request.update({
                where:
                {
                    utensil_request_id: entry.utensil_request_id
                }
                ,
                data:
                {
                    utensil_request_id: entry.utensil_request_id,
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