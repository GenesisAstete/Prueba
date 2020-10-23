import React from 'react'
import {auth,db} from '../firebase'
const Save = (props) => {

    const [addCity, setAddCity] = React.useState(props.city)
    const user = auth.currentUser;
    const [id, setId] = React.useState(user.uid)
    const [citys, setCitys] = React.useState(user.uid)
   
    const edit = async (e) => {
        try {
            const newCity = {
                uid: id,
                city: addCity
            }
            const data = await db.collection('locacion').add({
                uid: id,
                city: addCity,
            })
            setCitys([
                ...citys,
                {id: data.id, ...newCity }
            ])
            setId('')
            setAddCity('')
        } catch (error) {
            console.log(error)
        }
    }
    edit()
    
    return (
        <div>
            <h1>{addCity}</h1>
        </div>
    )
}

export default Save
