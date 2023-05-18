import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './styles.css';

interface HeaderOptionProps {
	to: string;
	children: React.ReactNode;
	rest?: any;
}

export function HeaderListOption({ to, children, ...rest }: HeaderOptionProps) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li>
			<Link
				className={'header-list-option' + (isActive ? ' isActive' : '')}
				to={to}
				{...rest}>
				{children}
			</Link>
		</li>
	);
}
