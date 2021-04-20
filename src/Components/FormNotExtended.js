import React from "react";

function FormNotExtended(props) {
    return <form>
        <input type="text" placeholder="click me" onClick={props.extendFunc} />
    </form>
}

export default FormNotExtended;