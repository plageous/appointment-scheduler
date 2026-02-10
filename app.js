import express from 'express';

const app = express();
const PORT = 3000;
const appointments = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/appointment-scheduler', (req, res) => {
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timestamp: new Date()
    };
    appointments.push(appointment);

    res.send(appointments);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});