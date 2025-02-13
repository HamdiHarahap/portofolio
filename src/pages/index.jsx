import MainLayout from '../components/layouts/MainLayout'
import Button from '../components/elements/Button'

const Home = () => {
	return (
		<MainLayout>
			<section className="flex flex-col md:flex-row justify-between items-center px-48 h-screen max-[520px]:px-4 max-[520px]:py-32">
				<div className="flex flex-col gap-7 my-auto">
					<h1 className="text-5xl font-bold">
						Hi!, <br />
						I&apos;m
						<span className="text-primary"> Hamdi Harahap</span>- Front End
						Developer
					</h1>
					<p className="text-xl w-[65%]">
						I&apos;m a self-taught Front-End Developer, passionate about
						creating stunning user experiences with clean, responsive, and
						interactive designs. 🚀
					</p>
					<Button className="w-fit px-5 py-2 rounded-md font-bold border hover:border-[#AD1DEB] hover:text-primary">
						Learn more about me
					</Button>
				</div>
			</section>
		</MainLayout>
	)
}

export default Home
