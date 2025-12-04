import { useState } from 'react'
import { close, logo, menu } from '../assets/index'

import { navigationLinks } from '../util/constants'
import { styles } from '../util/style'

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)
	const [active, setActive] = useState('home')

	const toggleHandler = () => {
		setToggleNav(prev => !prev)
	}
	return (
		<div className={`w-full py-6 ${styles.flexBetween}`}>
			{/* LOGO */}
			<img
				src={logo}
				alt='Logo Not found!'
				className='w-[60px] h-[55px] cursor-pointer'
			/>
			{/* NAVIGATION LINKS */}
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navigationLinks.map((nav, index) => {
					return (
						<li
							onClick={() => {
								setActive(nav.id)
							}}
							className={`
								 ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
								 ${active === nav.id ? 'text-white' : 'text-lightWhite'}
								 font-montserrat font-normal cursor-pointer text-[16px] hover:text-white transition-all duration-500`}
							key={nav.id}
						>
							{nav.title}
						</li>
					)
				})}
			</ul>
			{/* NAVIGATION SVG */}
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					onClick={toggleHandler}
					src={toggleNav ? close : menu}
					alt='menu icon not found'
					className='w-[30px] h-[30px] object-contain'
				/>
				<div
					className={`${
						!toggleNav ? 'hidden' : 'flex'
					} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient	`}
				>
					<ul className='list-none flex  justify-center items-center flex-1'>
						{navigationLinks.map((nav, index) => {
							return (
								<li
									onClick={() => {
										setActive(nav.id)
									}}
									className={`
								 ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
								 ${active === nav.id ? 'text-white' : 'text-lightWhite'}
								 font-montserrat font-normal cursor-pointer text-[16px] hover:text-white transition-all duration-500`}
									key={nav.id}
								>
									{nav.title}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
