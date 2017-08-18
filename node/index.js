const express = require('express');
const app = express();
const Mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
 // var winston = require('winston');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {
	const mailgun = new Mailgun({apiKey: process.env.key, domain: process.env.domain});
	const data = {
		from: req.body.email,
		to: "danutzcodrescu@gmail.com",  
		subject: 'Mesaj nou de pe site',
		html: `<p>Salut Manu,</p>
		<p>Un nou mesaj a fost trimis folosind siteul:</p>
		<ul>
			<li>Nume: ${req.body.fname} ${req.body.lname}</li>
			<li>Email: ${req.body.email}</li>
			<li>Mesaj: ${req.body.mess}</li>
		</ul>
		`
	}

	mailgun.messages().send(data, function (err, body) {
		if (err) {
			console.log(err)
			res.status(500).json("got an error: ", err, body);
		} else {
			res.status(200).json(body);
		}
	});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})