const admin = require('../firebase.js')
const sendNotification = async (token, title, body) => {
	const message = {
		notification: {
			title: title,
			body: body
		},
		token: token // Token del dispositivo
	}

	try {
		const response = await admin.messaging().send(message)
		console.log('Notificación enviada con éxito:', response)
	} catch (error) {
		console.error('Error al enviar la notificación:', error)
	}
}

module.exports = {
	sendNotification
}
