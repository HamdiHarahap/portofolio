/* eslint-disable react/prop-types */
import Navbar from '../fragments/Navbar'

const MainLayout = (props) => {
	const { children } = props
	return (
		<div className="min-h-screen">
			<Navbar />
			{children}
			<section className="px-44 py-12 max-[520px]:px-4">
				<hr />
				<div className="flex flex-col w-full items-center pt-12">
					<h2 className="text-lg font-semibold">
						Created By Hamdi Harahap 🚀 &copy; 2025
					</h2>
				</div>
			</section>
		</div>
	)
}

export default MainLayout
