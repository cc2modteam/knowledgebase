import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css';
import Logo from '../../public/Images/cc2-header.png';

export default function NavLink() {
	return (
		<div className={style.navbar}>
			<Image
				src={Logo}
				alt="CC2 Logo"
				style={{ width: '100%', height: 'auto', marginBottom: '2rem' }}
				priority
			/>
			<div className={style.nav}>
				<Link href="/">Home</Link>
				<Link href="/GeneralModAdvice">General Mod Advice</Link>
				<Link href="/SaveEditing">Save Editing</Link>
				<Link href="/">3D Modelling</Link>
				<Link href="/">Control screens and Lua mods</Link>
				<Link href="/">Missile Physics</Link>
				<Link href="/LuaScriptDebugging">Lua Script Debugging</Link>
				<Link href="/ModReferance/LuaFunctions">Lua Functions</Link>
				<Link href="/ModReferance/Units">Units</Link>
				<Link href="/ModReferance/Attachments">Attachments</Link>
				<Link href="/ModReferance/SpecialItems">Special Items</Link>
				<Link href="/ModReferance/LuaGlobalVars">Lua Global vars</Link>
			</div>
		</div>
	);
}
