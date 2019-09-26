import React from "react";
import { Card } from 'semantic-ui-react'


const Note = props => {

    return (
        <Card>
            <div className = 'ui fluid centered card'>
                <div className="content">
                    <div className="left aligned header">{props.title}</div>
                </div>
                <div className="content">
                    <h4 className="left aligned ui sub header">{props.topic}</h4>
                    <div className="ui small feed">
                        <div className="event">
                            <div className="left aligned content">
                                <h4>{props.link}</h4>
                                <h4>{props.user_id}</h4>
                                {/* {props.notes.map(note => {
                                    return (
                                        <p>{note}</p>
                                    )
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left aligned extra content">
                    <div className="ui large transparent left icon input">
                        <i className="heart outline icon"></i>
                        <input type="text" placeholder="Add Comment..."/>
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default Note