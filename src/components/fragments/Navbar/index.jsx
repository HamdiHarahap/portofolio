import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
	const [moonHover, setMoonHover] = useState(false)
	const [sunHover, setSunHover] = useState(false)
	const [darkTheme, setDarkTheme] = useState(true)
	const [showLoadingText, setShowLoadingText] = useState(false)
	const [redirectUrl, setRedirectUrl] = useState(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (showLoadingText && redirectUrl) {
			const timer = setTimeout(() => {
				setShowLoadingText(false)
				navigate(redirectUrl)
			}, 2000)

			return () => clearTimeout(timer)
		}

		if (darkTheme) {
			document.body.classList.remove('bg-white', 'text-black')
			document.body.classList.add('bg-zinc-950', 'text-white')
		} else {
			document.body.classList.remove('bg-zinc-950', 'text-white')
			document.body.classList.add('bg-white', 'text-black')
		}
	}, [showLoadingText, redirectUrl, navigate, darkTheme])

	let moonImage = moonHover
		? '/assets/icons/moon-hover.svg'
		: '/assets/icons/moon.svg'

	let sunImage = sunHover
		? '/assets/icons/sun-hover.svg'
		: '/assets/icons/sun.svg'

	const handleHrefClick = (url) => {
		setShowLoadingText(true)
		setRedirectUrl(url)
	}

	const handleMenu = () => {
		setMenuOpen((prev) => !prev)
	}

	const handleTheme = () => {
		setDarkTheme((prev) => !prev)
	}

	return (
		<>
			<header
				className={`px-48 py-5 fixed w-full max-[520px]:px-4 ${
					darkTheme ? 'bg-zinc-950 text-white' : 'bg-white text-black'
				} bg-opacity-80 z-10`}
			>
				<nav className="flex justify-between flex-row-reverse items-center max-[520px]:flex-col max-[520px]:items-start">
					<div className="flex justify-between items-center max-[520px]:w-full">
						<div className="min-[520px]:hidden">
							{darkTheme ? (
								<img
									src="/assets/icons/menu.svg"
									alt=""
									className="w-6"
									onClick={handleMenu}
								/>
							) : (
								<img
									src="/assets/icons/menu-dark.svg"
									alt=""
									className="w-6"
									onClick={handleMenu}
								/>
							)}
						</div>
						<div>
							{darkTheme ? (
								<img
									onClick={handleTheme}
									onMouseEnter={() => setMoonHover(true)}
									onMouseLeave={() => setMoonHover(false)}
									src={moonImage}
									alt="Moon Icon"
									className="w-9 cursor-pointer border rounded-md p-2 hover:border-[#AD1DEB]"
								/>
							) : (
								<img
									onClick={handleTheme}
									onMouseEnter={() => setSunHover(true)}
									onMouseLeave={() => setSunHover(false)}
									src={sunImage}
									alt="Sun Icon"
									className="w-9 cursor-pointer border rounded-md p-2 hover:border-[#AD1DEB]"
								/>
							)}
						</div>
					</div>
					<ul
						className={`gap-5 font-semibold max-[520px]:flex-col max-[520px]:mt-5 ${
							menuOpen ? 'flex' : 'hidden'
						} min-[520px]:flex`}
					>
						<li>
							<Link
								to="#"
								onClick={() => handleHrefClick('/')}
								className="hover:text-primary cursor-pointer"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="#"
								onClick={() => handleHrefClick('/achievement')}
								className="hover:text-primary cursor-pointer"
							>
								Achievement
							</Link>
						</li>
						<li>
							<Link
								to="#"
								onClick={() => handleHrefClick('/projects')}
								className="hover:text-primary cursor-pointer"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="#"
								onClick={() => handleHrefClick('/about')}
								className="hover:text-primary cursor-pointer"
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<section
				className={`h-screen bg-zinc-800 fixed w-full flex justify-center items-center transition-opacity duration-500 ${
					showLoadingText ? 'opacity-100' : 'opacity-0 pointer-events-none'
				} z-20`}
			>
				<h1 className="text-primary text-5xl font-bold">WAITTT...</h1>
			</section>
		</>
	)
}

export default Navbar
