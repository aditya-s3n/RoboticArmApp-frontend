import styles from "./queue.module.css";

function Queue() {
    return (
        <div className={`mx-5 ${styles.queue_body} text-start`}>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item active">Name: Preset</li>
                <li className="list-group-item">Name: Preset</li>
                <li className="list-group-item">Name: Preset</li>
                <li className="list-group-item">Name: Preset</li>
                <li className="list-group-item">Name: Preset</li>
            </ol>
        </div>
    );
}

export default Queue;