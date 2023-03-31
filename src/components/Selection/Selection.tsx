function Selection(props: { itemList: String[], className?: String, setSelectionVariable: any, selectionList: String[] }) {
    const selectionList = props.selectionList;
    
    return (
        <select 
            className={`form-select form-select-lg ${props.className}`} 
            aria-label=".form-select-lg example"
            onChange={
                event => {
                    const index: number = Number(event.target.value);
                    props.setSelectionVariable(selectionList[index]);
                }
            }
        >
            
            <option selected>Please Select a Name</option>
            
            {props.itemList.map((name, index) => {
                return <option value={index} key={index}>{name}</option>
            })}
            
        </select>
    )
}

export default Selection;