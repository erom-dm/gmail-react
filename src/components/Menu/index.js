import React, { Component, Fragment } from 'react';
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

    writeNewMail = () => {
        this.props.changeFolder('new email');
    };

    render() {
        let folderList = this.state.folders.map( (item) => {
            let classN = null;
            if(item.id === this.props.active){
                classN = "active";
            }
            return (<li
                    key = {item.id}
                    onClick = {() => this.props.changeFolder(item.id)}
                    className = {classN}
                    >
                        {item.name}
                    </li>)
        });


        return (
            <Fragment>
                <div className='main-menu'>
                    <button className='new-mail-btn'
                            onClick={this.writeNewMail}
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
