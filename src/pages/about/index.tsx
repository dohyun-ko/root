import * as styles from "./style.css";

const PROFILE_IMAGE =
  "https://dohyun-images.s3.ap-northeast-2.amazonaws.com/IMG_5772.webp";

const About = () => {
  return (
    <div className={styles.gridRow}>
      <div className={styles.outerLeft} />
      <div className={styles.gutterLeft} />
      <div className={styles.container}>
        <h1 className={styles.headline}>About</h1>

        <img src={PROFILE_IMAGE} alt="Dohyun Ko" className={styles.image} />
        <div className={styles.caption}>
          Dohyun Ko — Frontend engineer, design systems enthusiast.
        </div>

        <div className={styles.mainColumn}>
          <p>
            <span className={styles.dropCap}>L</span>orem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>

          <h2 className={styles.subhead}>Education & Early Career</h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

          <h2 className={styles.subhead}>Philosophy</h2>
          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
        </div>
      </div>
      <div className={styles.gutterRight} />
      <div className={styles.outerRight} />
    </div>
  );
};

export default About;
