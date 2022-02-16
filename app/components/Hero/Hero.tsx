import Image from 'next/image';
import heroImg from '../../../public/hero/hero.png';
import Navbar from '../Navbar/Navbar';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Navbar />
					<section className={styles.heroSection}>
						<div className={styles.heroText}>
							<h1>Protect your software from digital thieves</h1>
							<p>
								uLicense helps developers like you to protect
								your precious software from malicious users by
								providing an advanced license layer to your
								digital product.
							</p>
							<div>
								<button>Start your 14-day free trial</button>
								<span>
									No obligations. No credit card required.
								</span>
							</div>
						</div>
						<div className={styles.heroImg}>
							<Image
								src={heroImg}
								alt="Hero image"
								quality={100}
							/>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Hero;
