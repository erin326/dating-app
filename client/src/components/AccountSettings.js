import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function AccountSettings({user, 
    // selectedUser, onSelectUser, setSelectedUser
}) {

    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [genderInterest, setGenderInterest] = useState('Any/All');
    const [image, setImage] = useState(null)
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState([]);

    const [location, setLocation] = useState([]);
    const [userLatitude, setUserLatitude] = useState([]);
    const [userLongitude, setUserLongitude] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {
    //     setUserId(selectedUser.id)
    //     // setUserName(selectedUser.username)
    //     setAge(selectedUser.age)
    //     setBio(selectedUser.bio)
    //     setGender(selectedUser.gender)
    //     setGenderInterest(selectedUser.gender_interest)
       
    //   }, [selectedUser]);


    // useEffect(() => {
    //     fetch(`api/me`)
    //     .then((r) => r.json())
    //     .then((data) => console.log(data))

    // },[])

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('gender', gender)
        formData.append('age', age)
        formData.append('bio', bio)
        formData.append('gender_interest', genderInterest)
        formData.append('user_image', image)



        if(image) {
            fetch(`/api/users/${user.id}` , {
                method: "PATCH",
                body: formData,
            })
            .then((r) => {
                if(r.ok) {
                    navigate('/');
                    console.log(r);
                    
                }else {
                    r.json().then((error) => {
                        setErrors(error.errors)
                    })
                }
            })
        }else {

        
        fetch(`api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }, 
            body: JSON.stringify({
                id: userId,
                gender,
                bio,
                age,
                gender_interest: genderInterest,
            }),
        }).then((r) => {
            if (r.ok) {
                navigate('/');
                console.log(r)
                
            }else{
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }
    }

    function getLocation() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                
                    console.log(position.coords.latitude,  
                        position.coords.longitude);
                        setUserLatitude(position.coords.latitude)
                        setUserLongitude(position.coords.longitude)

                    // const array = [position.coords.latitude,  
                    //     position.coords.longitude]
                    //     console.log(array);
                       
                    //     const myLocation = array.join('');
                    //     setLocation(myLocation);
                    //     console.log(myLocation)

                //    console.log( {latitude: position.coords.latitude,
                //     longitude: (position.coords.longitude).replace(/\D/g, "")})
           

                
            //    if(userLatitude, userLongitude) {
            //     fetch(`api/users/${user.id}`, {
            //         method: "PATCH",
            //         headers: {
            //             "Content-Type" : "application/json",
            //             "Accept" : "application/json"
            //         },
            //         body: JSON.stringify({
            //             // location: location
            //             latitude: userLatitude,
            //             longitude: userLongitude
                       
            //             })
            //     })
            //     .then((r) => r.json())
            //     .then((loc) => console.log(loc))
            // }
            })
   
        
            console.log(userLatitude, userLongitude, 'state');
        
        
        }
    }
   
    function showLocation() {
        if(user.longitude, user.longitude) {
            fetch(`api/location/${user.id}`)
            .then((r) => r.json())
            .then((loc) => console.log(loc))
             
        }
    }

    return(
        <>
        {/* <label>Username: </label>
        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></input> */}
        <button onClick={getLocation}>Add Location</button>
        {/* <button onClick={showLocation}>show Location</button> */}

        <form onSubmit={handleSubmit}>
        <label>Gender: </label>
        <input 
        type="text"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        ></input>
      
         <label>Age: </label>
        <input 
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        ></input>
       
         <label>Interested in: </label>
         <select  value={genderInterest} onChange={(e)=> setGenderInterest(e.target.value)}
         placeholder="enter"> 
            <option  value="none">Please choose</option>
            <option value="All genders">Any/All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            
        </select>
        
        {/* <input 
        type="text"
        id="gender_interest"
        value={genderInterest}
        onChange={(e) => setGenderInterest(e.target.value)}
        ></input> */}
        <input id="choose-file"
            type="file"
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])}
        ></input>
          <label>Bio: </label>
        <textarea 
        type="text"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        ></textarea>
        {/* <input type='text' value ={}>
        Location: </input> */}
        <button className='button' type='submit' >Submit</button>


        </form>
        <p>{user.location}</p>

        {/* {errors ? errors.map((error) => <li key={error}>{error}</li>) : null} */}


        </>
    )
}

export default AccountSettings;