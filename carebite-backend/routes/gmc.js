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
            res.status(400).json("No Gmc found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "Gmc credentials sent",
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
            res.status(400).json("No Gmc found");
        }
        await prisma.users.delete({
            where: {
                id_hospital_id: {      // Correct composite key
                    id: user.id,      // Correct pay_id
                    hospital_id: user.hospital_id
                }
            }
        });

        await prisma.gm_coord.delete({
            where: {
                gm_coord_id: user.id,
            }
        });


        res.status(200).json("Gmc deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'Gmc not found or already deleted' });
    }
});

router.get("/requestedgroc/:id", async (req, res) => {

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
            res.status(401).json("No GM Coordinator found");
        }

        const requested = await prisma.grocery_request.findMany({
            where:
            {

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

router.post("/requestedgroc/:id", async (req, res) => {

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
            res.status(401).json("No Gmc found");
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

router.get("/requesteduten/:id", async (req, res) => {

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
            res.status(401).json("No Gmc found");
        }

        const requested = await prisma.utensil_request.findMany({
            where:
            {

                status_recieved: {
                    not: "Yes"
                }
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

router.post("/requesteduten/:id", async (req, res) => {

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
            res.status(401).json("No Gmc found");
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
            res.status(401).json("No GM Coordinator found");
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

router.get("/utensils/:id", async (req, res) => {
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
            res.status(401).json("No GM Coordinator found");
        }



        let workid = await prisma.utensils.findMany();


        res.status(200).json(workid);



    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});
router.get("/groceries/:id", async (req, res) => {
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
            res.status(401).json("No GM Coordinator found");
        }



        let workid = await prisma.grocery_items.findMany();


        res.status(200).json(workid);



    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});


router.post("/addgroceries/:id", async (req, res) => {
    const id = Number(req.params.id);
    const addgrocerieslist = req.body.list;
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



        for (const entry of addgrocerieslist) {
            await prisma.grocery_items.create(
                {
                    data:
                    {
                        name: entry.name
                    }
                });
        }

        res.status(200).json(addgrocerieslist);



    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/addutensils/:id", async (req, res) => {
    const id = Number(req.params.id);
    const addgrocerieslist = req.body.list;
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



        for (const entry of addgrocerieslist) {
            await prisma.utensils.create(
                {
                    data:
                    {
                        name: entry.name
                    }
                });
        }

        res.status(200).json(addgrocerieslist);



    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});


module.exports = router;


