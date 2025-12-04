import { Billing, Contract, Home, Navbar, Statistics } from './component/index'
import { styles } from './util/style'

const App = () => {
	return (
		// Navbar
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}  `}>
				<div className={`${styles.container}`}>
					<Navbar />
				</div>
			</div>
			{/* Home */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={styles.container}>
					<Home />
				</div>
			</div>

			<div className={`pb-primary ${styles.paddingX} ${styles.flexCenter}  `}>
				<div className={`${styles.container}`}>
					<Statistics />
					<Contract />
					<Billing />
				</div>
			</div>
		</div>
	)
}

export default App
