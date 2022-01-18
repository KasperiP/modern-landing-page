import Image from 'next/image';
import styles from './Stories.module.css';

const Stories = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>Latest stories</h2>
					<p>
						Ea sint et eveniet omnis veniam optio magnam aut
						assumenda.{' '}
					</p>
				</div>
				<div className={styles.storyGrid}>
					<div className={styles.storyItem}>
						<div className={styles.imgContainer}>
							<Image
								src="/blog/hacker.png"
								alt="asd"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Esse est sedeveniet id vaniam</h4>
						<p>11th November 2021</p>
						<p>
							Magnam dolores modi quis ipsa autem quas sed dolore
							rem. Error mollitia sed ipsum officia autem quia.
						</p>
						<button>Read more</button>
					</div>
					<div className={styles.storyItem}>
						<div className={styles.imgContainer}>
							<Image
								src="/blog/hacker.png"
								alt="asd"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Esse est sedeveniet id vaniam</h4>
						<p>11th November 2021</p>
						<p>
							Magnam dolores modi quis ipsa autem quas sed dolore
							rem. Error mollitia sed ipsum officia autem quia.
						</p>
						<button>Read more</button>
					</div>
					<div className={styles.storyItem}>
						<div className={styles.imgContainer}>
							<Image
								src="/blog/hacker.png"
								alt="asd"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Esse est sedeveniet id vaniam</h4>
						<p>11th November 2021</p>
						<p>
							Magnam dolores modi quis ipsa autem quas sed dolore
							rem. Error mollitia sed ipsum officia autem quia.
						</p>
						<button>Read more</button>
					</div>
					<div className={styles.storyItem}>
						<div className={styles.imgContainer}>
							<Image
								src="/blog/hacker.png"
								alt="asd"
								layout="fill"
								objectFit="contain"
							/>
						</div>
						<h4>Esse est sedeveniet id vaniam</h4>
						<p>11th November 2021</p>
						<p>
							Magnam dolores modi quis ipsa autem quas sed dolore
							rem. Error mollitia sed ipsum officia autem quia.
						</p>
						<button>Read more</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stories;
