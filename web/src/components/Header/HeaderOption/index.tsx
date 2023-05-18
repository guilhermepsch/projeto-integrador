import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './style.css';

interface HeaderOptionProps {
	to: string;
	children: React.ReactNode;
	rest?: any;
}

export function HeaderOption({ to, children, ...rest }: HeaderOptionProps) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? 'active' : ''}>
			<Link className="header-option-button" to={to} {...rest}>
				{children}
			</Link>
		</li>
	);
}
