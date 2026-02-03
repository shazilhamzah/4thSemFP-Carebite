const prisma = require("../config/prisma");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get("/announcements/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma.users.findFirst(
            {
                where:
                {
                    id: id
                }
            }
        );
        if (!user) {
            res.status(400).json("No GM saab found");
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

router.post("/announcements/:id", async (req, res) => {
    try {
        const id1 = Number(req.params.id);
        const { title, details } = req.body;
        const user = await prisma.gm_hospital.findFirst({

            where:
            {
                gm_hospital_id: id1
            }
        });

        if (!user) {
            res.status(400).json("No GM hospital found");
        }

        const id = user.gm_hospital_id
        const hospital_id = user.hospital_id


        const announcement = await prisma.announcements.create(

            {
                data:
                {

                    id,
                    hospital_id,
                    date_added: new Date(),
                    title,
                    details

                }


            }
        );

        res.status(200).json(announcement);


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
            res.status(400).json("No GM hospital Salary found");
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
            res.status(400).json("No GM saab found");
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
            res.status(400).json("No GM hospital found");
        }

        const { password: _, ...wrokerRem } = user;

        res.status(200).json(
            {
                message: "GM hospital credentials sent",
                user: wrokerRem
            }
        );



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
            res.status(400).json("No GM hospital found");
        }

        const count = await prisma.attendance.findMany({

            where:
            {
                hospital_id: user.hospital_id,
                curr_date: new Date(),
                status: "Present",
                attendance_id: {
                    not: user.id
                }
            }
            ,
            include: {
                users: {
                    select: { name: true }
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

router.get("/attendance/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.users.findFirst({

            where:
            {
                id: id
            }
        });

        if (!user) {
            res.status(400).json("No GM hospital found");
        }


        const count = await prisma.attendance.findMany({

            where:
            {
                hospital_id: user.hospital_id,
                curr_date: new Date()

            }
            ,
            include: {
                users: {
                    select: { name: true }
                }
            }




        });

        if (count.length == 0) {
            const user1 = await prisma.users.findMany(
                {
                    where:
                    {
                        hospital_id: user.hospital_id,
                        id:
                        {
                            not: user.id
                        }

                    }

                }
            )

            for (const entry of user1) {
                await prisma.attendance.create({

                    data: {
                        attendance_id: entry.id,
                        hospital_id: user.hospital_id,
                        curr_date: new Date(),
                        status: entry.status
                        // Sets current date and time
                    },
                    include: {
                        users: {
                            select: { name: true }
                        }
                    }
                });
            }

            res.status(200).json("Refresh the page")
        }

        else {
            res.status(200).json(count);

        }
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});

router.post("/delete/:id", async (req, res) => {
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
            res.status(400).json("No GM saab found");
        }

        const hospital = user.hospital_id;


        await prisma.users.delete({
            where: {
                id_hospital_id: {
                    id: id,
                    hospital_id: hospital
                }
            }
        });
        res.status(200).json("GM hospital deleted lol");

    } catch (error) {
        console.error(error); // <--- add this
        res.status(400).json({ error: 'GM saab not found or already deleted' });
    }
});


router.get("/workstatus/:id", async (req, res) => {
    const id1 = Number(req.params.id);
    try {


        const user = await prisma.users.findFirst({

            where:
            {
                id: id1
            }


        });

        if (!user) {
            res.status(400).json("No GM saab found");
        }

        const works = await prisma.work_status.findMany(
            {
                where:
                {
                    hospital_id: user.hospital_id

                }

            }
        );
        if (!works) {
            res.status(200).json("No work status initiated");
        }


        res.status(200).json(works);


    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }


});


router.post("/attendance/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const attendancelist = req.body.list;

        const user = prisma.users.findFirst({

            where:
            {
                id: id
            }
        });


        if (!user) {
            res.status(400).json("No GM hospital found");
        }


        for (const entry of attendancelist) {
            await prisma.attendance.update({
                where:
                {
                    curr_date_attendance_id: {
                        curr_date: new Date(),
                        attendance_id: entry.attendance_id

                    }

                },
                data: {
                    attendance_id: entry.attendance_id,
                    hospital_id: user.hospital_id,
                    curr_date: new Date(),
                    status: entry.status
                    // Sets current date and time
                }
            });
        }




        res.status(200).json(attendancelist);

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
            res.status(401).json("No GM saab found");
        }



        let workid = await prisma.menu.findMany(
            {
                where:
                {
                    menu_id: user.hospital_id
                }
            }
        );

        if (workid.length == 0) {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            for (let i = 0; i < 7; i++) {
                await prisma.menu.create(
                    {
                        data:
                        {
                            menu_id: user.hospital_id,
                            day: days[i]
                        }
                    }
                )

            }

            res.status(200).json("Referesh Again");
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


router.post("/menu/:id", async (req, res) => {
    const id = Number(req.params.id);
    const menulist = req.body.list;

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
            res.status(401).json("No GM saab found");
        }



        for (const entry of menulist) {
            await prisma.menu.update(
                {
                    where:
                    {
                        day_menu_id: {
                            menu_id: user.hospital_id,
                            day: entry.day
                        }
                    }
                    ,
                    data:
                    {
                        menu_id: user.hospital_id,
                        day: entry.day,
                        breakfast: entry.breakfast,
                        dinner: entry.dinner

                    }
                });
        }



        res.status(200).json(menulist);

    }

    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }

});



module.exports = router;