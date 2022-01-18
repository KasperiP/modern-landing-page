import Image from 'next/image';
import styles from './TrustedBy.module.css';

const TrustedBy = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Trusted by hundrets of brands</h2>
			<div>
				<span className={styles.imgContainer}>
					<Image
						src={'/brands/gopro.svg'}
						alt="gopro logo"
						layout="fill"
						objectFit="contain"
					/>
				</span>

				<span className={styles.imgContainer}>
					<Image
						src={'/brands/gopro.svg'}
						alt="gopro logo"
						layout="fill"
						objectFit="contain"
					/>
				</span>

				<span className={styles.imgContainer}>
					<Image
						src={'/brands/gopro.svg'}
						alt="gopro logo"
						layout="fill"
						objectFit="contain"
					/>
				</span>

				<span className={styles.imgContainer}>
					<Image
						src={'/brands/gopro.svg'}
						alt="gopro logo"
						layout="fill"
						objectFit="contain"
					/>
				</span>

				<span className={styles.imgContainer}>
					<Image
						src={'/brands/gopro.svg'}
						alt="gopro logo"
						layout="fill"
						objectFit="contain"
					/>
				</span>
			</div>
		</div>
	);
};

export default TrustedBy;
