import { send, shield, star } from '../assets/index'

export const statistics = [
	{
		id: 1,
		title: 'Foydalanuvchi Faol',
		value: '9300+',
	},
	{
		id: 2,
		title: 'Kompaniya Homiyligida',
		value: '100+',
	},
	{
		id: 3,
		title: 'Tranzaksiya',
		value: '110M+',
	},
]

export const navigationLinks = [
	{
		id: 'home',
		title: 'Bosh sahifa',
	},
	{
		id: 'features',
		title: 'Xizmatlar',
	},
	{
		id: 'product',
		title: 'Mahsulot',
	},
	{
		id: 'clients',
		title: 'Mijozlar',
	},
]

export const features = [
	{
		id: 1,
		icon: star,
		title: 'Mukofotlar',
		content:
			'Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.',
	},

	{
		id: 2,
		icon: shield,
		title: '100% Himoyalangan',
		content:
			"Ma'lumotlaringiz va tranzaktsiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun faol choral.",
	},

	{
		id: 3,
		icon: send,
		title: "Balansni o'tkazish",
		content:
			"Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
	},
]
