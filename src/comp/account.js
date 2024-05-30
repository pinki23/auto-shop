import './account.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {

    const [error, setError] = useState(false);
    const [name, setName] = useState([]);
    const [secondName, setSecondName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const queryParameters = new URLSearchParams(window.location.search)
    const phone = queryParameters.get("phone")
    const [timeDeposit, setTimeDeposit] = useState([]);
    const [demandDeposit, setDemandDeposit] = useState([]);
    const [cardDeposit, setCardDeposit] = useState([]);
    
    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const clientResponse = await axios.post('https://localhost:7212/api/user', {phone: phone})
                console.log(clientResponse);
                if (!clientResponse.data.firstName)
                    setError(true);
                setName(clientResponse.data.firstName);
                setSecondName(clientResponse.data.secondName);
                setLastName(clientResponse.data.lastName);
                setTimeDeposit(clientResponse.data.timeDeposit);
                setDemandDeposit(clientResponse.data.demandDeposit);
                setCardDeposit(clientResponse.data.cardDeposit);
            } catch (error) {
                setError(true);
            }
        }
        fetchClientData();      
    }, []);

    if (error){
        return (
            <div className="customer-container">
                <p>Что-то пошло не так</p>    
            </div>
        )
    }

  return (
    <div className="customer-container">
            <h2>Добро пожаловать</h2>
            <p>Клиент:</p>
            <div>{secondName} {name} {lastName}</div>
            <p>{phone}</p>
            

            <h3>Ваши данные:</h3>

            <div> Почта:  {timeDeposit}</div>
            <p><div>Адресс:  {demandDeposit}</div></p>
            <div>Карточный счет:  {cardDeposit}</div>

        </div>
  )
}

export default Account