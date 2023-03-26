import Image from "next/image";
import styles from "./card.module.css"

function Card() {
    return (
        <button className={`btn p-0 ${styles.card_custom}`} type="button">
            <div className="card card-custom">
                <div className="card-body text-center pb-1">
                    <Image
                        src={"/card-imgs/peace-sign.png"}
                        alt="card-img"
                        width={75}
                        height={75}
                    />
                    <p className="mt-3">Peace Sign</p>
                </div>
            </div>
        </button>
    );
}

export default Card;