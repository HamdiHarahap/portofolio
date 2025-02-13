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
				<div className="flex flex-col w-full items-center py-6">
					<h2 className="text-lg font-semibold">Reach me out</h2>

					<span className="mt-8">&copy; Hamdi Harahap 2025</span>
				</div>
			</section>
		</div>
	)
}

export default MainLayout
