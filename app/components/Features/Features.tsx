import Image from 'next/image';
import dashboardImg from '../../../public/features/dashboard.png';
import devApiImg from '../../../public/features/developer_api.png';
import precursorImg from '../../../public/features/precursor.png';
import securityImg from '../../../public/features/security.png';
import supportImg from '../../../public/features/support.png';
import uptimeImg from '../../../public/features/uptime.png';
import styles from './Features.module.css';

const Features = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.featuresContainer}>
					<div>
						<h4>Features</h4>
						<h2>What does uLicense offer for you?</h2>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Inventore nam quae ipsam, enim voluptates
							explicabo alias sequi cum ex rerum in accusamus
							nihil tempora ullam autem odio eos delectus
							perferendis? <br />
							<br /> Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Enim debitis sed repellendus
							officiis, voluptates cum rem, repellat voluptatem
							eos error, autem velit blanditiis distinctio totam
							ipsum sit optio libero. Nam.
						</p>
					</div>
				</div>
				<div className={styles.featuresGrid}>
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={dashboardImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Easy-to-use dashboard</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Quia necessitatibus, est harum cumque a
							mollitia quam doloremque eum qui hic voluptates vero
							nesciunt laudantium officiis, laborum labore eius
							quod accusamus.
						</p>
					</div>
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={securityImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Security</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quae consequuntur, nam modi unde, placeat
							dolorum quas tempore quia dolores quos atque
							consectetur nesciunt! Ratione voluptatum ut, cumque
							deleniti temporibus expedita maxime dolores. Ut,
							assumenda rerum.
						</p>
					</div>{' '}
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={supportImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Support</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempora et tenetur magnam blanditiis dolore
							esse, sint, labore qui assumenda animi hic atque
							eaque sapiente quasi earum! Facere, est!
						</p>
					</div>{' '}
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={uptimeImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Up-time</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Consequuntur, dolorum? Nesciunt veniam vero
							recusandae, nemo exercitationem magni, dolorum
							accusamus distinctio sunt praesentium quaerat. Id,
							soluta. Tempora, dolores est. A, temporibus!
						</p>
					</div>{' '}
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={devApiImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Developer API</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Earum at quas dolore, modi quo nulla sit
							temporibus harum nihil, provident odio obcaecati,
							exercitationem omnis illo voluptas nemo. Dolore,
							eligendi.
						</p>
					</div>{' '}
					<div className={styles.gridItem}>
						<div className={styles.imgContainer}>
							<Image
								src={precursorImg}
								alt="asd"
								layout="fill"
								objectFit="contain"
								quality={100}
							/>
						</div>
						<h3>Precursor</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Facilis recusandae exercitationem reiciendis
							corporis suscipit rem? Accusamus officiis officia
							repudiandae, eius eveniet debitis ut provident
							facilis illo dolorem, illum, delectus odit ducimus
							commodi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
