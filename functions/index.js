const functions = require('firebase-functions');
const Mailgun = require('mailgun-js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendEmail = functions.https.onRequest((req, res) => {
	const mailgun = new Mailgun({apiKey: functions.config().mailgun.key, domain: functions.config().mailgun.domain});
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
			res.status(500);
			res.json("got an error: ", err);
		} else {
			res.status(200).json(body);
		}
	});
	
});