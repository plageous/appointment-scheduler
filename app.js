import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended:true }));

const appointments = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-appointment', (req, res) => {
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date ? req.body.date : "none",
        time: req.body.time ? req.body.time : "none",
        timestamp: new Date()
    };
    appointments.push(appointment);

    res.sendFile(`${import.meta.dirname}/views/submission.html`);
})

app.get('/admin', (req, res) => {
    res.send(appointments);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});