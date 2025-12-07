import { page } from "@/styles/page.css";
import * as styles from "./style.css";

const PROFILE_IMAGE =
  "https://dohyun-images.s3.ap-northeast-2.amazonaws.com/IMG_5772.webp";

const About = () => {
  return (
    <div className={page}>
      <div className={styles.container}>
        <h1 className={styles.headline}>About The Author</h1>

        <div className={styles.contentContainer}>
          <div className={styles.mainColumn}>
            <p>
              <span className={styles.dropCap}>L</span>orem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            
            <h2 className={styles.subhead}>Education & Early Career</h2>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur?
            </p>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident.
            </p>

            <h2 className={styles.subhead}>Philosophy</h2>
            <p>
              Similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis
              dolor repellendus.
            </p>
          </div>

          <div className={styles.sideColumn}>
            <div>
              <img src={PROFILE_IMAGE} alt="Dohyun Ko" className={styles.image} />
              <div className={styles.caption}>
                Dohyun Ko in his natural habitat, contemplating code structure and design systems.
              </div>
            </div>
            
            <div style={{ 
              fontFamily: '"Playfair Display", serif',
              fontSize: "20px",
              fontWeight: 700,
              borderTop: "4px double #2b2b2b",
              paddingTop: "16px",
              marginTop: "24px"
            }}>
              "Good design is as little design as possible."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

