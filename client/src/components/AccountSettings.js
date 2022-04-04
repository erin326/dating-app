import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


function AccountSettings({user, selectedUser, onSelectUser, setSelectedUser}) {

    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [genderInterest, setGenderInterest] = useState('Any/All');
    const [image, setImage] = useState(null)
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setUserId(selectedUser.id)
        // setUserName(selectedUser.username)
        setAge(selectedUser.age)
        setBio(selectedUser.bio)
        setGender(selectedUser.gender)
        setGenderInterest(selectedUser.gender_interest)
       
      }, [selectedUser]);


    

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
   

    return(
        <>
        {/* <label>Username: </label>
        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></input> */}
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
        <button className='button' type='submit' >Submit</button>

        </form>
        

        {/* {errors ? errors.map((error) => <li key={error}>{error}</li>) : null} */}


        </>
    )
}

export default AccountSettings;