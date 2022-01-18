import Image from 'next/image';
import styles from './Contact.module.css';
const Contact = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>Send us message</h2>
					<p>
						If you went to send something, of course send a message
						here and fill it completely
					</p>
					<div className={styles.imgContainer}>
						<Image
							src={'/contact/contact.png'}
							alt="Contact image"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>
				<form>
					<div>
						<h6>Full Name</h6>
						<input type="text" placeholder="Input your name" />
					</div>
					<div>
						<h6>Email</h6>
						<input type="text" placeholder="Input your email" />
					</div>
					<div>
						<h6>Message</h6>
						<textarea placeholder="Share your message" />
					</div>
					<div>
						<button onClick={(e) => e.preventDefault()}>
							Send message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
