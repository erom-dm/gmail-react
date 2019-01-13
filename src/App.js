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
                    subject: 'Some test subject',
                    text: 'Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и'
                },
                {
                    id: 2,
                    status: false,
                    from: 'test@ukr.net',
                    subject: 'Ukr.net hello!',
                    text:'Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках'
                },
                {
                    id: 3,
                    status: false,
                    from: 'test@bigmir.net',
                    subject: 'Bigmir subject',
                    text: 'Семантический анализ текста Адвего для SEO онлайн — профессиональный инструмент для оценки качества текстов, seo оптимизации статей и'
                },
            ],
            sent: [
                {
                    id: 4,
                    status: true,
                    from: 'friend@ukr.net',
                    subject: 'Hello my friend',
                    text: 'A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook'
                },
                {
                    id: 5,
                    status: true,
                    from: 'some@bigmir.net',
                    subject: 'Work proposition',
                    text: 'Функція TEXT дає змогу змінити спосіб відображення числа, застосувавши до нього форматування з кодами форматів. Це корисно, коли потрібно '
                },
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


    render() {
        let activeCategory = this.state.active;
        let mailToDisplay = this.state.mailList[activeCategory];
        let mainArea;
        if (activeCategory === 'new email'){
            mainArea = <NewEmail/>
        } else if (activeCategory === 'received' || activeCategory === 'sent') {
            mainArea = <MailList mails={mailToDisplay} readMail={this.readMail} />
        }

        return (
          <Fragment>
              <Header/>
              <div className="main-region">
                  <Menu className='main-menu' changeFolder={this.changeFolder} active={activeCategory} />
                  {mainArea}
              </div>
          </Fragment>
        );
    }
}

export default App;