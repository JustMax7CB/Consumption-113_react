const AddButton = (props) => {
    return (
        <button id="add_missile_btn" className="btn btn-primary" onClick={props.onclick}>{props.text}</button>
    );
}

export default AddButton;