import MainLayout from '../components/layouts/MainLayout'

const About = () => {
	const techs = [
		{ nama: 'HTML', image: '/assets/logos/html.svg' },
		{ nama: 'CSS', image: '/assets/logos/css.svg' },
		{ nama: 'Javascript', image: '/assets/logos/javascript.svg' },
		{ nama: 'Bootstrap', image: '/assets/logos/bootstrap.svg' },
		{ nama: 'PHP', image: '/assets/logos/php.svg' },
		{ nama: 'React', image: '/assets/logos/react.svg' },
		{ nama: 'Tailwind CSS', image: '/assets/logos/tailwind.svg' },
		{ nama: 'Laravel', image: '/assets/logos/laravel.svg' },
		{ nama: 'Node JS', image: '/assets/logos/node.svg' },
		{ nama: 'My SQL', image: '/assets/logos/mysql.svg' },
	]

	return (
		<MainLayout>
			<section className="px-48 py-24 flex justify-between items-center gap-12 max-[520px]:px-4 max-[520px]:flex-col max-[520px]:w-full">
				<div>
					<img
						src="/assets/images/self.png"
						alt=""
						className="w-[45rem] rounded-xl"
					/>
				</div>
				<div className="my-auto flex flex-col gap-2 w-[60rem] max-[520px]:w-full">
					<h1 className="font-bold text-3xl">
						About <br /> <span className="text-primary">Hamdi Harahap</span>
					</h1>
					<p>
						I am a Politeknik Negeri Medan student from Indonesia with a passion
						for design, focusing on UI/UX Design and Frontend Development. I am
						dedicated to crafting intuitive interfaces and engaging user
						experiences while continuously improving my skills using the latest
						tools and technologies.
					</p>
				</div>
			</section>
			<section className="w-full flex flex-col items-center py-12 gap-20">
				<h1 className="text-3xl font-bold text-center">
					My <span className="text-primary">Educational</span>
					<br />
					Journey
				</h1>
				<div className="flex flex-col items-center w-[60rem] max-[520px]:w-full">
					<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center">
						<div className="w-1 h-[20rem] bg-primary mx-auto rounded-t-full min-[520px]:hidden"></div>
						<div className="text-end max-[520px]:text-start max-[520px]:w-[15rem]">
							<h4 className="text-primary font-semibold text-lg">
								2023 - 2027
							</h4>
							<h1 className="font-bold text-3xl rounded-t-md">
								Politeknik Negeri Medan
							</h1>
							<p className="text-gray-400 font-semibold text-xl">
								Software Engineering
							</p>
						</div>
						<div className="w-1 h-[20rem] bg-primary mx-auto rounded-t-full max-[520px]:hidden"></div>
						<div className="max-[520px]:hidden"></div>
					</div>
					<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center">
						<div className="w-1 h-[20rem] bg-primary mx-auto rounded-t-full min-[520px]:hidden"></div>
						<div className="max-[520px]:hidden"></div>
						<div className="w-1 h-[20rem] bg-primary mx-auto max-[520px]:hidden"></div>
						<div className="text-start max-[520px]:w-[15rem]">
							<h4 className="text-primary font-semibold text-lg">
								2020 - 2023
							</h4>
							<h1 className="font-bold text-3xl">MAN 2 Model Medan</h1>
							<p className="text-gray-400 font-semibold text-xl">
								Natural Sciences
							</p>
						</div>
					</div>
					<div className="grid grid-cols-3 w-full max-w-6xl max-[520px]:w-full items-center">
						<div className="w-1 h-[20rem] bg-primary mx-auto rounded-t-full min-[520px]:hidden"></div>
						<div className="text-end max-[520px]:text-start max-[520px]:w-[15rem]">
							<h4 className="text-primary font-semibold text-lg">
								2017 - 2020
							</h4>
							<h1 className="font-bold text-3xl">SMP Muhammadiyah 1 Medan</h1>
							<p className="text-gray-400 font-semibold text-xl">
								General Studies
							</p>
						</div>
						<div className="w-1 h-[20rem] bg-primary mx-auto rounded-b-full max-[520px]:hidden"></div>
						<div className="max-[520px]:hidden"></div>
					</div>
				</div>
			</section>
			<section className="px-48 py-20 flex flex-col items-center gap-12 max-[520px]:px-4">
				<h1 className="font-bold text-3xl">
					<span className="text-primary">Tech Stack</span> That I Use
				</h1>
				<div className="grid grid-cols-6 gap-5 max-[520px]:grid-cols-3">
					{techs.map((item, index) => (
						<div
							key={index}
							className="group border px-3 py-4 cursor-pointer justify-between hover:border-[#AD1DEB] hover:text-primary rounded-md flex flex-col items-center gap-2"
						>
							<img
								src={item.image}
								alt=""
								className="w-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform ease-linear"
							/>
							<p className="group-hover:text-[#AD1DEB] text-center">
								{item.nama}
							</p>
						</div>
					))}
				</div>
			</section>
		</MainLayout>
	)
}

export default About
