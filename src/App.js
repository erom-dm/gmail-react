import React, { Component, Fragment } from 'react';

import Header from './components/Header'
import Menu from './components/Menu'
import MailList from './components/MailList'
import NewEmail from './components/NewEmail'

import './App.scss';

class App extends Component {
    state = {
        active: 'received',
        mailList: {
            received: [
                {
                    id: 1,
                    status: false,
                    from: 'test@test.ua',
                    to: 'test@test.ua',
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 2,
                    status: true,
                    from: 'test@ukr.net',
                    to: 'test@test.ua',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
            ],
            sent: [
            ],
        },

    }

    changeFolder = (folderId) => {
        this.setState({
            active: folderId
        })
    };

    readMail = (id) => {
        let mailListUpd = this.state.mailList[this.state.active].map((item) => {
            let newObj = {...item};
            if(newObj.id === id){
                newObj.status = true;
            }
            return newObj;
        });

        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: mailListUpd
            },
        });
    };

    handleNewEmailSubmit = (newEmail) => {
        let newSentFolder = this.state.mailList['sent'].map((item) => {
            return {...item};
        });

        newSentFolder.push(newEmail);

        this.setState(() => ({
            mailList: {
                ...this.state.mailList,
                ['sent']: newSentFolder
            }
        }))
    };

    render() {
        let activeCategory = this.state.active;
        let mailToDisplay = this.state.mailList[activeCategory];
        let mainArea;
        if (activeCategory === 'new email'){
            mainArea = <NewEmail onSubmit={this.handleNewEmailSubmit} changeFolder={this.changeFolder}/>
        } else if (activeCategory === 'received' || activeCategory === 'sent') {
            mainArea = <MailList mails={mailToDisplay} readMail={this.readMail} />
        }

        return (
          <Fragment>
              <Header/>
              <div className="main-region">
                  <Menu className='main-menu'
                        changeFolder={this.changeFolder}
                        active={activeCategory}
                  />
                  {mainArea}
              </div>
          </Fragment>
        );
    }
}

export default App;