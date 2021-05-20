import Vue from 'vue'
import Vuex from 'vuex'

import _findIndex from 'lodash/findIndex';
import db from './db';

Vue.use(Vuex)
let messages_collection = db.collection('messages')


export const store = new Vuex.Store({
	state: {
		loading: false,
		messages: []
	},
	mutations: {
		async getMessages(state) {
			console.log('getMessages')
			state.loading = true
			try {
				const {
					docs
				} = await messages_collection
					.where('is_deleted', '==', false)
					.orderBy('timestamp', 'desc')
					.get()

				state.messages = docs.map(doc => {
					const {
						id
					} = doc
					const data = doc.data()
					return {
						id,
						...data
					}
				})
				state.loading = false

			} catch (error) {
				state.loading = false
				throw new Error(`Something gone wrong! [${error}]`)
			}
		},
		toggleMarkAsRead(state, message_id) {
			console.log('toggleMarkAsRead')
			const index = _findIndex(state.messages, ['id', message_id]);
			let message = state.messages[index]

			message.is_read = !message.is_read
			state.messages[index] = message

			// update on db
			messages_collection.doc(message_id)
				.update({
					is_read: message.is_read,
				})
				.then(() => {
					console.log('updated')
				})
				.catch((error) => {
					console.error("Error updating document: ", error);
				});

		},
		addMessage(state, message_text) {
			messages_collection.add({
				text: message_text,
				timestamp: new Date(),
				is_deleted: false,
				is_read: false
			})
		},
		deleteMessage(state, message_id) {
			console.log('deleteMessage')
			const index = _findIndex(state.messages, ['id', message_id]);
			state.messages.splice(index, 1)

			// update on db
			messages_collection.doc(message_id)
				.update({
					is_deleted: true,
				})
				.then(() => {
					console.log('deleted')
				})
				.catch((error) => {
					console.error("Error updating document: ", error);
				});

		}
	}
})