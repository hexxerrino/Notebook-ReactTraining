import React, {useState} from "react";
import FormNotExtended from "./FormNotExtended";
import FormExtended from "./FormExtended"

function NoteForm(props) {

    const [isExtended, setExtend] = useState(false);

    function handleExtend() {
        setExtend(true);
    }

    return <div>
        {isExtended ? <FormExtended handleClick={props.handleClick} /> : <FormNotExtended extendFunc={handleExtend}/>}
    </div>
}

export default NoteForm;