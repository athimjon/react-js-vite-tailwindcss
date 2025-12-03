import { useState } from 'react'
import { close, logo, menu } from '../assets/index'

import { navigationLinks } from '../util/constants'
import { styles } from '../util/style'

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)

	const toggleHandler = () => {
		setToggleNav(prev => !prev)
	}
	return (
		<div className={`w-full py-6 ${styles.flexBetween}`}>
			{/* LOGO */}
			<img
				src={logo}
				alt='Logo Not found!'
				className='w-[127px] h-[38px] cursor-pointer'
			/>
			{/* NAVIGATION LINKS */}
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navigationLinks.map((nav, index) => {
					return (
						<li
							className={`font-montserrat font-normal cursor-pointer text-white text-[16px] ${
								index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'
							}  hover:text-lightWhite transition-all duration-500`}
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
									className={`font-montserrat font-normal cursor-pointer text-white text-[16px] ${
										index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'
									}  hover:text-lightWhite transition-all duration-500`}
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
