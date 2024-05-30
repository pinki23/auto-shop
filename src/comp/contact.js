import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [user, setUser] = useState(
        {
            Name: '', email: '', Subject:'', Message: ''
        }
    )
    
    let values, names
    const data = async (e) => 
        {
            values = e.target.value
            names = e.target.name
            setUser({...user, [names]: values})
        } 

    const send = async (e) => 
        {
            const {Name, email, Subject, Message} = user
            e.preventDefault()
            const option = 
            {
                method: 'POST',
                headers:    {
                    'Content-Type' : 'aplication/json'
                },
                body: JSON.stringify({
                    Name, email, Subject, Message
                })
            }

            const send = await fetch(
                'https://react-project-3956e-default-rtdb.europe-west1.firebasedatabase.app/Message.json', option
            )

            if (send){
                alert("Сообщение отправлено")
            }
            else{
                alert("Сообщение не получилось отправить")
            }
        }

  return (
    <>
    <div className='contact'>
        <div className='container'>
            <div className='form'>
                <form method='POST'>
                    <div className='box'>
                    <div className='lable'>
                        <h4>Имя</h4>
                        <div className='input'>
                            <input type='text' placeholder='Имя' value={user.Name} name='Name' onChange={data}></input>
                        </div>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='lable'>
                        <h4>Почта</h4>
                        <div className='input'>
                            <input type='emial' placeholder='E-Mail' value={user.email} name='email' onChange={data}></input>
                        </div>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='lable'>
                        <h4>Тема</h4>
                        <div className='input'>
                            <input type='text' placeholder='Тема' value={user.Subject} name='Subject' onChange={data}></input>
                        </div>
                    </div>
                    </div>

                    <div className='box'>
                    <div className='lable'>
                        <h4>Вопрос</h4>
                        <div className='input'>
                            <textarea placeholder='Ваш вопрос' value={user.Message} name='Message' onChange={data}></textarea>
                        </div>
                    </div>
                    </div>
                    <button type='submit' onClick={send}>Отправить обращение</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact