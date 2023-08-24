import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "db_user",
    password: "pAssword123",
    database: "ticket_system",
    port: 3306,
    
})


app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("backend connected");
})


app.get("/tickets", (req, res) => {
    const q = "SELECT ID, ticketpriorities.PriorityName, Title, technicians.FirstName, technicians.LastName, CreatedBy, CreatedDate, ticketcategories.CategoryName, ticketstatus.StatusName FROM alltickets JOIN technicians ON technicians.TechID = alltickets.AssignedTo JOIN ticketcategories on ticketcategories.CategoryID = alltickets.Category JOIN ticketpriorities on ticketpriorities.PriorityID = alltickets.Priority JOIN ticketstatus on ticketstatus.StatusID = alltickets.Status ORDER BY ID DESC";
    // db.connect();
    db.query(q, (err, data) => {
        if(err) return console.log(err.message);
        return res.json(data)
    })
})

app.post("/newtickets", (req, res) => {
    const q = "INSERT INTO alltickets (`Title`, `Description`, `CreatedBy`, `AssignedTo`, `CreatedDate`,`DueDate`, `Status`, `Priority`, `Category`) VALUES (?)";
    const values = [

        req.body.Title,
        req.body.Description,
        req.body.CreatedBy,
        req.body.AssignedTo,
        req.body.CreatedDate,
        req.body.DueDate,
        req.body.Status,
        req.body.Priority,
        req.body.Category
    ]

    db.query(q, [values], (err, data) => {
        // if (err) return res.json(err);
        if(err) return console.log(err);
        return res.json("Ticket successfully created.")
    })
});

app.get("/ticketdetails/:id", (req, res) => {
    const ticketId = req.params.id;
    const q = "SELECT ID, Title, Description, CreatedBy, technicians.FirstName, technicians.LastName,  Category, CreatedDate, DueDate, Status, Priority, Category FROM alltickets JOIN technicians ON technicians.TechID = alltickets.AssignedTo WHERE alltickets.ID = ?"; 
    
    db.query(q, [ticketId], (err, data) => {
        // if (err) return res.json(err);
        if(err) return console.log(err);
        return res.json(data)
    })
})

app.put("/ticketsdetails/:id", (req, res) => {
    const ticketId = req.params.id;
    const q = "INSERT INTO `ticket_system`.`alltickets` (`ID`, `Title`, `Description`, `CreatedBy`, `AssignedTo`, `CreatedDate`,`DueDate`, `Status`, `Priority`, `Category`) VALUES () ";

    const values = [
        req.body.title,
        req.body.category
    ]

    db.query(q, [values], (err, data) => {
        // if (err) return res.json(err);
        if(err) return console.log(err);
        return res.json("Ticket successfully created.")
    })

})

app.listen(8800, () => {
    console.log("connection successful");
})