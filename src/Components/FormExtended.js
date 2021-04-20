import React, {useState} from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Zoom from '@material-ui/core/Zoom';

function FormExtended(props) {

    const [formValues, setFormValues] = useState({
        title: "",
        content: ""
    });

    const [isHighlighted, setHighlight] = useState(false);

    function handleChange(event) {
        const triggered = event.target;

        setFormValues((prev) => {
            if (triggered.name === "title") {
                return {title: triggered.value, content: prev.content};
            }else{
                return {title: prev.title, content: triggered.value};
            }
        })
    }

    function handleHighlight() {
        if (isHighlighted) {
            setHighlight(false);
        }else{
            setHighlight(true);
        }
    }

    return <form>
        <input name="title" value={formValues.title} onChange={handleChange} type="text" placeholder="title" />
        <textarea name="content" value={formValues.content} onChange={handleChange} placeholder="take a note" />
        <button style={{backgroundColor: isHighlighted ? "grey" : "#f5ba13"}} onMouseEnter={handleHighlight} onMouseLeave={handleHighlight} onClick={(event) => {event.preventDefault(); props.handleClick(formValues.title, formValues.content); setFormValues({
        title: "",
        content: ""
    })}}><Zoom in={true}><AddBoxIcon /></Zoom></button>
    </form>
}

export default FormExtended;