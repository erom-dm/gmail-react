import React, { Component, Fragment } from 'react';
import { setActiveFolder } from '../../actions/appState';
import './menu.scss'

class Menu extends Component {
    state = {
        folders: [
            {
                name: 'Inbox',
                id: 'received'
            },
            {
                name: 'Outbox',
                id: 'sent'
            }
        ]
    };

    render() {
        let folderList = this.state.folders.map( (item) => {
            let classN = null;
            if(item.id === this.props.active){
                classN = "active";
            }
            return (<li
                    key = {item.id}
                    onClick = {() => this.props.dispatch(setActiveFolder({active:item.id}))}
                    className = {classN}
                    >
                        {item.name}
                    </li>)
        });


        return (
            <Fragment>
                <div className='main-menu'>
                    <button className='new-mail-btn'
                            onClick={this.props.dispatch(setActiveFolder({active:'new email'}))}
                    >
                        Write
                    </button>
                    <ul className='folder-list'>
                        {folderList}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Menu;
