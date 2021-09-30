import React from 'react'

export const Skill = (props) => {
    return (
        <>
        <div className="bar flex">
            <div className={props.visible?"bar fill appear fill_bar_ani":"bar fill fade-in"} ref={props.set} style={{width:props.percent}}>
                <div className="bar_name flex appear">{props.name}</div>
            </div>
            <span className="bar_percent appear">{props.percent}</span>
        </div>
    </>
    )
}

export default Skill;
