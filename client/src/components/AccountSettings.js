import {useState} from 'react';
import {useNavigate} from 'react-router-dom'


function AccountSettings({user, genderInterest, setGenderInterest, 
}) {

    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState([]);


    const navigate = useNavigate();

    
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
                gender,
                bio,
                age,
                gender_interest: genderInterest,
            }),
        }).then((r) => {
            if (r.ok) {
                navigate('/');
                window.location.reload()                
            }else{
                r.json().then((error) => setErrors(error.errors));
            }
        });
     } 
    }

  
    return(
        <div className='edit'>
        <form onSubmit={handleSubmit}>
        <label>Gender: </label>
        <input 
        type="text"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        ></input>
      <br></br>
         <label>Age: </label>
        <input 
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        ></input>
       <br></br>
         <label>Interested in: </label>
         <select  value={genderInterest} onChange={(e)=> setGenderInterest(e.target.value)}
         placeholder="enter"> 
            <option  value="none">Please choose</option>
            <option value="Any">Any/All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            
        </select>
        <br></br>
       
        <input id="choose-file"
            type="file"
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <br></br>
          <label>Bio: </label>
        <textarea 
        type="text"
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <br></br>
        <button className='button' type='submit' >Submit</button>
        </form>
        
        {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
  
        </div>
    )
}

export default AccountSettings;