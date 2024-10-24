import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'
import useTranslate from '@/hooks/use-translate'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const openModal = () => {
		setModalOpen(true)

		setTimeout(() => {
			closeModal()
		}, 5000)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const handleSubmit = event => {
		setLoading(true)
		event.preventDefault()
		const token = '7909293801:AAHt4yZG1Sues1wZTeFpvHOkygxJuGLvpXU'
		const chatId = -1002325942996
		const url = `https://api.telegram.org/bot${token}/sendMessage`

		const name = document.getElementById('name').value
		const phone = document.getElementById('phone').value
		const guestNumber = document.getElementById('guestNumber').value
		const data = document.getElementById('data').value
		const contactDestination = document.getElementById(
			'contact_destination'
		).value
		const visaSupport = document.getElementById('visaSupport').value

		const messageAll = `Massage from: Zamon Tour \nIsmi: ${name}, \nNummber: ${phone} \nGuests: ${guestNumber} \nDate: ${data} \nCauntry: ${contactDestination} \nSupport Visa: ${visaSupport}`

		axios({
			url,
			method: 'Post',
			data: {
				chat_id: chatId,
				text: messageAll,
			},
		})
			.then(res => {
				openModal()
			})
			.catch(error => console.log('Yuborishda xatolik', error))
			.finally(() => {
				document.getElementById('contact_form').reset()
				setLoading(false)
			})
	}

	const t = useTranslate()

	return (
		<div className='mx-auto max-w-6xl rounded-xl shadow-md shadow-cyan-200'>
			<div className=' w-full'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4900361222513!2d69.24007397591293!3d41.3271969089655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4742d09d5df%3A0x6b3fd1b8412e2a6d!2sChilanzar-25%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1698151897983!5m2!1sen!2sus'
					width='100%'
					height='350'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
				></iframe>
			</div>

			<div className='bg-[#eaeaea] p-6 dark:bg-background'>
				{/* Reservation Form */}
				<h2 className='mb-4 text-center text-2xl font-semibold'>
					{t('contact_title1')}
					<span className='text-primary'>{t('contact_title2')}</span>
					{t('contact_title3')}
				</h2>
				<form onSubmit={handleSubmit} id='contact_form'>
					<div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
						{/* Name Input */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_name')}
							</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder={t('contact_name_example')}
								className='w-full rounded border border-gray-300 p-2'
								required
							/>
						</div>

						{/* Phone Number Input */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_phone')}
							</label>
							<input
								type='number'
								name='phone'
								id='phone'
								placeholder={t('contact_phone_example')}
								className='w-full rounded border border-gray-300 p-2'
								required
								min='9'
							/>
						</div>
					</div>

					<div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
						{/* Number of Guests */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_guests')}
							</label>
							<input
								type='number'
								name='guests'
								id='guestNumber'
								placeholder={t('contact_guests_example')}
								className='w-full rounded border border-gray-300 p-2'
								required
							/>
						</div>

						{/* Check-in Date */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_date')}
							</label>
							<input
								type='date'
								id='data'
								name='checkInDate'
								className='w-full rounded border border-gray-300 p-2'
								required
							/>
						</div>
					</div>

					<div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
						{/* Destination Dropdown */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_destination')}
							</label>
							<select
								name='destination'
								id='contact_destination'
								className='w-full rounded border border-gray-300 p-2'
							>
								<option defaultValue>{t('visit_title2')}</option>
								<option value='Istanbul'>{t('visit_title4')}</option>
								<option value='Kuala Lumpur'>{t('contact_country')}</option>
								<option value='Kanada'>{t('weekly_country3')}</option>
								<option value='England'>{t('weekly_country2')}</option>
							</select>
						</div>

						{/* Visa Support Dropdown */}
						<div>
							<label className='mb-2 block text-gray-600'>
								{t('contact_choose')}
							</label>
							<select
								name='visaSupport'
								id='visaSupport'
								className='w-full rounded border border-gray-300 p-2'
							>
								<option defaultValue>{t('contact_country1')}</option>
								<option value='USA'>{t('weekly_country1')}</option>
								<option value='Europe'>{t('weekly_country4')}</option>
								<option value='England'>{t('weekly_country2')}</option>
								<option value='Saudiya Arabistoni'>{t('visa_country4')}</option>
								<option value='India'>{t('visa_country2')}</option>
								<option value='China'>{t('visa_country6')}</option>
								<option value='HongKong'>{t('visa_country7')}</option>
							</select>
						</div>
					</div>

					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant={'castum'}
								size={'castum'}
								type='submit'
								className='mt-3 w-full rounded-md p-2 transition duration-300'
							>
								{loading ? <>{t('contact_btn')}...</> : <>{t('contact_btn')}</>}
							</Button>
						</DialogTrigger>
						{isModalOpen && (
							<DialogContent>
								<DialogHeader>
									<DialogTitle>{t('modal_text')}</DialogTitle>
								</DialogHeader>
							</DialogContent>
						)}
					</Dialog>
				</form>
			</div>
		</div>
	)
}

export default Contact
