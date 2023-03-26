import Image from "next/image";

function Card() {
    return (
        <button className="btn" type="button">
            <div className="card">
                <div className="card-body text-center">
                    <Image
                        src={"/card-imgs/peace-sign.png"}
                        alt="card-img"
                        width={200}
                        height={200}
                    />
                    <p>Peace Sign</p>
                </div>
            </div>
        </button>
    )
}

export default Card;