import { apple, bill, google } from '../assets/index'
import { layout, styles } from '../util/style'

const Billing = () => {
	return (
		<section id='product' className={layout.sectionReverse}>
			<div className={layout.sectionImageReverse}>
				<img
					src={bill}
					alt='bill'
					className='w-[100%] h-[100%] relative z-[5]'
				/>

				<div className='absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
			</div>

			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Hisob-kitob va fakturial <br className='sm:block hidden' /> osongina
					boshqaring
				</h2>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
					iusto veniam fuga ut blanditiis atque itaque recusandae nesciunt unde
					aspernatur!
				</p>

				<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
					<img
						src={google}
						alt='google'
						className='w-[180px] h-[80px] object-contain mr-5 cursor-pointer'
					/>
					<img
						src={apple}
						alt='google'
						className='w-[180px] h-[80px] object-contain mr-5 cursor-pointer'
					/>
				</div>
			</div>
		</section>
	)
}

export default Billing
