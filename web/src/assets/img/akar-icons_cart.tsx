export interface CartIconProps {
	width?: number;
	height?: number;
}

export default function CartIcon(props: CartIconProps) {
	return (
		<svg
			width={props.width || 56}
			height={props.height || 56}
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M44.042 16.542H12.4399C11.7996 16.542 11.1663 16.6762 10.581 16.9359C9.99574 17.1957 9.47137 17.5752 9.04171 18.0499C8.61204 18.5247 8.28663 19.0843 8.08646 19.6925C7.88628 20.3008 7.81578 20.9442 7.87949 21.5814L9.25449 35.3314C9.36758 36.4623 9.89686 37.5109 10.7396 38.2736C11.5823 39.0363 12.6783 39.4586 13.8149 39.4587H35.7003C36.7603 39.4591 37.7876 39.0921 38.6074 38.4202C39.4272 37.7483 39.9888 36.8131 40.1966 35.7737L44.042 16.542Z"
				stroke="black"
				stroke-width="3"
				stroke-linejoin="round"
			/>
			<path
				d="M44.042 16.5417L45.8982 9.10979C46.0224 8.61423 46.3086 8.17435 46.7113 7.86004C47.1141 7.54573 47.6103 7.37501 48.1212 7.375H50.917M37.167 48.625H32.5837M18.8337 48.625H14.2503"
				stroke="black"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
