import React from "react";
import s from "./filter.module.css"

const Filter = ({onChange, value}) => {
    return (
        <div className={s.filter}>
            <label className={s.label}>Find contact by name
                <input className={s.input} name="filter "type="text" value={value} onChange={onChange}/>
            </label>
        </div>
    )

}


export default Filter;