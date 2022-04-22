import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function AccountSettings({user, genderInterest, setGenderInterest, selectedMatch, setSelectedMatch
    // selectedUser, onSelectUser, setSelectedUser
}) {

    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    // const [genderInterest, setGenderInterest] = useState('Any');
    const [image, setImage] = useState(null)
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState('Any')

    // const [location, setLocation] = useState([]);
    // const [userLatitude, setUserLatitude] = useState([]);
    // const [userLongitude, setUserLongitude] = useState([]);

    const navigate = useNavigate();

 
    // useEffect(() => {
    //     setUserId(selectedUser.id)
    //     // setUserName(selectedUser.username)
    //     setAge(selectedUser.age)
    //     setBio(selectedUser.bio)
    //     setGender(selectedUser.gender)
    //     setGenderInterest(selectedUser.gender_interest)
       
    //   }, [selectedUser]);

    useEffect(() => {
        // setUserId(user.id)
        setAge(user.age)
        setGenderInterest(user.gender_interest)
        setBio(user.bio)
        setGender(user.gender)
       
      }, []);

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
                    window.location.reload()
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
                // id: userId,
                gender,
                bio,
                age,
                gender_interest: genderInterest,
            }),
        }).then((r) => {
            if (r.ok) {
                navigate('/');
                window.location.reload()

                console.log(r)
                
            }else{
                r.json().then((error) => setErrors(error.errors));
            }
        });
    } 
    }

    // function getLocation() {
    //     if('geolocation' in navigator) {
    //         navigator.geolocation.getCurrentPosition((position) => {
                
    //                 console.log(position.coords.latitude,  
    //                     position.coords.longitude);
    //                     setUserLatitude(position.coords.latitude)
    //                     setUserLongitude(position.coords.longitude)

                
    //         //    if(userLatitude, userLongitude) {
    //             fetch(`api/users/${user.id}`, {
    //                 method: "PATCH",
    //                 headers: {
    //                     "Content-Type" : "application/json",
    //                     "Accept" : "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     // location: location
    //                     lat: userLatitude,
    //                     lon: userLongitude
                       
    //                     })
    //             })
    //             .then((r) => r.json())
    //             .then((loc) => console.log(loc))
            
    //         })
   
        
    //         console.log(userLatitude, userLongitude, 'state');
        
        
    //     }
    // }
   

    return(
        <>
        {/* <label>Username: </label>
        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></input> */}
        {/* <button onClick={getLocation}>Add Location</button> */}
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
            <option value="Any">Any/All</option>
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
        
        {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
        {/* <p>{userLatitude} {userLongitude}</p>
        <p>{location}</p> */}



        </>
    )
}

export default AccountSettings;