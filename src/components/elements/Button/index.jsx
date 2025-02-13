/* eslint-disable react/prop-types */
const Button = (props) => {
	const { className, onClick, children } = props

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
