import { useInView } from "react-intersection-observer";
import styles from "../../style/reveal.module.css";

export function Section1() {
  const { ref: img_ref, inView: isInView } = useInView();
  return (
    <div className="section1">
      <div>
        <h1 className={`${styles.reveal2} ${isInView ? styles.visible : ""}`}>
          Geocode <span>Nexus</span>
        </h1>
        <p className={`${styles.reveal3} ${isInView ? styles.visible : ""}`}>
          Car la santé de nos eau est importante, nous nous éfforçons de trouver
          des solutions pour les entretenir
        </p>
      </div>
      <div className="img-section1">
        <img
          ref={img_ref}
          className={`${styles.revealRight1} ${isInView ? styles.visible : ""}`}
          src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
