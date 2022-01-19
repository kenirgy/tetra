'use strict';
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

const defaultApplications = {
	youtube: '880218394199220334',
	youtubedev: '880218832743055411',
	poker: '755827207812677713',
	betrayal: '773336526917861400',
	fishing: '814288819477020702',
	chess: '832012774040141894',
	chessdev: '832012586023256104',
	lettertile: '879863686565621790',
	wordsnack: '879863976006127627',
	doodlecrew: '878067389634314250',
	awkword: '879863881349087252',
	spellcast: '852509694341283871',
	checkers: '832013003968348200',
	puttparty: '763133495793942528',
	sketchyartist: '879864070101172255',
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays your faviorite game')
		.addSubcommand(subcommand =>
			subcommand.setName('youtube')
				.setDescription('Plays YouTube in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('youtubedev')
				.setDescription('Plays YouTube Dev in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('poker')
				.setDescription('Plays Poker in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('betrayal')
				.setDescription('Plays Betrayal in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('fishing')
				.setDescription('Plays Fishing in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('chess')
				.setDescription('Plays Chess in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('chessdev')
				.setDescription('Plays Chess Dev in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('lettertile')
				.setDescription('Plays Lettertile in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('wordsnack')
				.setDescription('Plays Word Snack in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('doodlecrew')
				.setDescription('Plays Doodle Crew in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('awkword')
				.setDescription('Plays Awkword in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('spellcast')
				.setDescription('Plays Spell Cast in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('checkers')
				.setDescription('Plays Checkers in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('puttparty')
				.setDescription('Plays Putt Party in your discord vc'),
		)
		.addSubcommand(subcommand =>
			subcommand.setName('sketchyartist')
				.setDescription('Plays Sketchyartist in your discord vc'),
		),
	async execute(interaction) {
		const subCommand = interaction.options.getSubcommand();
		const vc = interaction.member.voice.channel;
		const invite = await vc.createInvite({
			max_age: 86400,
			max_uses: 1,
			targetType: 2,
			targetApplication:  defaultApplications[subCommand],
		});
		await interaction.reply({
			content: `Click on the button to join ${subCommand} activity`,
			components: [
				new MessageActionRow().addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel(subCommand)
						.setURL(invite.url),
				),
			],
		});
	},
};