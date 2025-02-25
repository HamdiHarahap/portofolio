import MainLayout from '../components/layouts/MainLayout'

const Project = () => {
	const projects = [
		{
			name: 'Bookshelf App',
			desc: 'A simple bookshelf app to manage your book collection with local storage.',
			tech: [
				'/assets/logos/html.svg',
				'/assets/logos/css.svg',
				'/assets/logos/javascript.svg',
			],
			image: '/assets/images/bookshelf.png',
			url: 'https://github.com/HamdiHarahap/bookshelf-apps',
		},
		{
			name: 'Hamdi Writes',
			desc: 'A personal blogging platform built with Laravel and Tailwind CSS.',
			tech: ['/assets/logos/laravel.svg', '/assets/logos/tailwind.svg'],
			image: '/assets/images/blog.png',
			url: 'https://github.com/HamdiHarahap/my-blog',
		},
		{
			name: 'Harapan Kita',
			desc: 'A community-driven platform to share and support social initiatives.',
			tech: ['/assets/logos/laravel.svg', '/assets/logos/tailwind.svg'],
			image: '/assets/images/harapan.png',
			url: 'https://github.com/HamdiHarahap/harapan-kita',
		},
		{
			name: 'Khodam Check',
			desc: 'A mystical application to check your spiritual companion.',
			tech: [
				'/assets/logos/html.svg',
				'/assets/logos/css.svg',
				'/assets/logos/javascript.svg',
			],
			image: '/assets/images/khodam.png',
			url: 'https://github.com/HamdiHarahap/cek-khodam',
		},
		{
			name: 'Note App React',
			desc: 'A simple note-taking app built using React and CSS.',
			tech: ['/assets/logos/react.svg', '/assets/logos/css.svg'],
			image: '/assets/images/note.png',
			url: 'https://github.com/HamdiHarahap/note-app-react',
		},
		{
			name: 'Sewa Cepat',
			desc: 'An online rental platform for various services, built with Laravel.',
			tech: ['/assets/logos/laravel.svg', '/assets/logos/tailwind.svg'],
			image: '/assets/images/sewa.png',
			url: 'https://github.com/HamdiHarahap/sewa-cepat',
		},
		{
			name: 'Note App Express',
			desc: 'A backend-powered note-taking app using Express.js and Tailwind.',
			tech: ['/assets/logos/node.svg', '/assets/logos/tailwind.svg'],
			image: '/assets/images/notes.png',
			url: 'https://github.com/HamdiHarahap/notes-app',
		},
		{
			name: 'Fruit Slots',
			desc: 'A fun slot machine game using HTML, CSS, and JavaScript.',
			tech: [
				'/assets/logos/html.svg',
				'/assets/logos/css.svg',
				'/assets/logos/javascript.svg',
			],
			image: '/assets/images/slots.png',
			url: 'https://github.com/HamdiHarahap/slots',
		},
		{
			name: 'QR Generator',
			desc: 'A web-based QR code generator built with vanilla JavaScript.',
			tech: [
				'/assets/logos/html.svg',
				'/assets/logos/css.svg',
				'/assets/logos/javascript.svg',
			],
			image: '/assets/images/qrgen.png',
			url: 'https://github.com/HamdiHarahap/qr-generator',
		},
		{
			name: 'Sistem Perpustakaan',
			desc: 'A web-based library management system for managing books, members, and borrowing transactions efficiently.',
			tech: [
				'/assets/logos/laravel.svg',
				'/assets/logos/tailwind.svg',
				'/assets/logos/javascript.svg',
			],
			image: '/assets/images/perpus.png',
			url: 'https://github.com/HamdiHarahap/sistem-perpustakaan.git',
		},
	]

	return (
		<MainLayout>
			<section className="py-32 px-48 flex flex-col items-center gap-16 max-[520px]:px-4">
				<h1 className="font-bold text-3xl">
					My <span className="text-primary">Projects</span>
				</h1>
				<div className="grid grid-cols-3 gap-6 text-black max-[520px]:grid-cols-1">
					{projects.map((project, index) => (
						<div
							key={index}
							className="relative rounded-md flex flex-col border p-3 gap-3 bg-sky-50"
						>
							<h2 className="font-bold text-lg">{project.name}</h2>
							<p>{project.desc}</p>
							<div className="flex gap-3">
								{Array.isArray(project.tech) &&
									project.tech.map((item, i) => (
										<img key={i} src={item} alt="" className="w-5" />
									))}
							</div>

							<img src={project.image} alt="" className="rounded-md" />
							<a
								href={project.url}
								className="flex items-center gap-2 ml-auto hover:underline hover:text-blue-500 mt-2"
							>
								<img src="/assets/icons/github.svg" alt="" className="w-6" />{' '}
								View code...
							</a>
						</div>
					))}
				</div>
			</section>
		</MainLayout>
	)
}

export default Project
