'use strict';

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;
		if (message.content === null || message.content === undefined) return;
		const content = message.content.toLowerCase().split(/\s+/);
		if (message.mentions.has(message.client.user) && content[1]) {
			await message.channel.send({
				content: 'Hello',
			});
		}
	},
};