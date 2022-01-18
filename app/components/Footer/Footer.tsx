import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import logo from '../../../public/uLicense-text.svg';
import { HiOutlineMail } from 'react-icons/hi';
import { FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.upper}>
					<div className={styles.footerItem}>
						<div className={styles.imgContainer}>
							<Image
								src={logo}
								alt="uLicense logo"
								layout="fill"
								objectFit="contain"
							/>
						</div>

						<p>
							Sint ab natus aut omnis et consequuntur illo
							aspernatur quia. Est rerum officiis Aut sed nesciunt
							laborum esse quam natus quos soluta eum. Cumque
							temporibus eveniet molestias enim sed sint delectus.
						</p>
					</div>
					<div className={styles.footerItem}>
						<h3>Links</h3>
						<div className={styles.links}>
							<ul>
								<li>
									<Link href="#">Product</Link>
									<Link href="#">Pricing</Link>
									<Link href="#">About us</Link>
									<Link href="#">Free trial</Link>
									<Link href="#">Developers</Link>
									<Link href="#">Contact us</Link>
									<Link href="#">Login</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href="#">Terms of service</Link>
									<Link href="#">Privacy policy</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.footerItem}>
						<h4>NEED HELP?</h4>
						<div className={styles.email}>
							<HiOutlineMail />
							<p>support@ulicense.io</p>
						</div>
						<div className={styles.socialLinks}>
							<span className={styles.socialLink}>
								<FaDiscord />
							</span>
							<span className={styles.socialLink}>
								<AiOutlineTwitter />
							</span>
							<span className={styles.socialLink}>
								<BsYoutube />
							</span>
							<span className={styles.socialLink}>
								<FaLinkedinIn />
							</span>
						</div>
					</div>
				</div>
				<p className={styles.copyright}>
					&copy; Copyright 2022 by uLicense. All rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
