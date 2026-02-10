import express from 'express';

const app = express();
const PORT = 3000;
const appointments = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }))

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

    res.send(appointments)
})


app.get('/admin', (req, res) => {
    res.send(appointments);
});

app.post('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/submission.html`);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});