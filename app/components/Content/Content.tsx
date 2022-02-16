import Image from 'next/image';
import businessManImg from '../../../public/content/man.png';
import businessWomanImg from '../../../public/content/woman.png';
import styles from './Content.module.css';

const Content = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.contentContainer}>
					<div className={styles.imgContainer}>
						<Image
							src={businessManImg}
							alt="manImg"
							layout="fill"
							objectFit="contain"
							quality={100}
						></Image>
					</div>
					<div className={styles.textContainer}>
						<h2>Built by Developers, for Developers</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Illum dignissimos eligendi voluptatum placeat
							quaerat cupiditate autem neque dolore praesentium
							totam voluptatibus libero ipsam consequatur maxime
							omnis repellendus sint, et ex voluptatem reiciendis
							quibusdam sed dolores excepturi iusto. Ducimus
							nostrum, officia totam nisi esse reiciendis, quas
							labore, illo omnis perspiciatis voluptate!
						</p>
						<button>Read our full story</button>
					</div>
				</div>

				<div className={styles.contentContainer}>
					<div className={styles.imgContainer}>
						<Image
							src={businessWomanImg}
							alt="manImg"
							layout="fill"
							objectFit="contain"
							quality={100}
						></Image>
					</div>
					<div className={styles.textContainer}>
						<h2>Don’t give digital thieves a chance</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis ab explicabo voluptatibus, magni
							exercitationem fugit placeat sed maiores nostrum
							consectetur laudantium laborum ipsum tempora illum
							atque voluptatem ratione similique commodi,
							perferendis cupiditate aspernatur ea dolore dolorem?
							Ipsam corrupti numquam excepturi architecto. Iure
							rem qui excepturi ipsa laborum mollitia quidem nisi!
						</p>
						<button>View our pricing</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
