importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js')

const firebaseConfig = {
	apiKey: 'AIzaSyD8lkqfromHNDYcBNZB_9QAa9a52n9hjfw',
	authDomain: 'tutorial-push-web-db352.firebaseapp.com',
	projectId: 'tutorial-push-web-db352',
	storageBucket: 'tutorial-push-web-db352.firebasestorage.app',
	messagingSenderId: '801223525940',
	appId: '1:801223525940:web:9f8e9bc3d12e8503802c61',
	measurementId: 'G-K5QH1STH2N'
}

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging(app)

messaging.onBackgroundMessage((payload) => {
	console.log('Recibiste mensaje mientras estabas ausente ', payload)
	const notificationTitle = payload.notification.title
	const notificationOptions = {
		body: payload.notification.body,
		icon: '/vite.svg'
	}

	return self.registration.showNotification(notificationTitle, notificationOptions)
})
