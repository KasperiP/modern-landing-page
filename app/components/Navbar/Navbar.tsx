import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import logo from '../../../public/uLicense-text.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<Image src={logo} alt="uLicense logo" quality={100} width={200} />
			<div className={styles.links}>
				<ul>
					<li>
						<Link href="#">Product</Link>
						<Link href="#">Pricing</Link>
						<Link href="#">About us</Link>
						<Link href="#">Developers</Link>
						<Link href="#">Discord</Link>
					</li>
				</ul>
			</div>
			<div className={styles.linksRight}>
				<div className={styles.langDropdown}>
					<span>🇺🇸</span>
					<p>EN</p>
					<RiArrowDropDownLine />
				</div>
				<button>Login</button>
				<button>Free trial</button>
			</div>
			<div className={styles.hamburger}>
				<GiHamburgerMenu />
			</div>
		</nav>
	);
};

export default Navbar;
