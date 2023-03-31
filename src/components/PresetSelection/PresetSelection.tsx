function PresetSelection(props: { name: String, preset: String}) {
    return(
        <div>
        { !(props.name && props.preset) 
            ? <p>Please Select BOTH a NAME and a PRESET...</p>

            : 
            <div>
                <p>Selected</p>
                <p>Name: {props.name}</p>
                <p>Preset: {props.preset}</p>
            </div>

        }
        </div>
    );
}

export default PresetSelection