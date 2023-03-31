import Image from "next/image";
import styles from "./card.module.css"

function Card(props: { size: number, title: string, imgURL: string, className?: string, setPreset: any }) {
    return (
        <button 
            className={`btn p-0 ${styles.card_custom} ${props.className}`} 
            type="button"
            onClick={() => {
                props.setPreset(props.title);
            }}
        >
            <div className="card card-custom">
                <div className="card-body text-center pb-1">
                    <Image
                        src={props.imgURL}
                        alt="card-img"
                        width={props.size}
                        height={props.size}
                    />
                    <p className="mt-3">{props.title}</p>
                </div>
            </div>
        </button>
    );
}

export default Card;