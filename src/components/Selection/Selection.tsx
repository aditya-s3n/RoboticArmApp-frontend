function Selection(props: { itemList: String[], className?: String }) {
    return (
        <select className={`form-select form-select-lg ${props.className}`} aria-label=".form-select-lg example">
            {props.itemList.map((name, index) => {
                return <option value={index} key={index}>{name}</option>
            })}
        </select>
    )
}

export default Selection;