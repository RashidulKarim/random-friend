var info;
const loadFriend = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        displayUser(data.results[0]),
        info = (data.results[0])
    })
}
loadFriend();
const displayUser = userInfo =>{
    console.log(userInfo)
    
    const imageContainer = document.getElementById('imageContainer');
    const btnContainer = document.getElementById('btnContainer');
    imageContainer.innerText = ''
    const userPic = document.createElement('img');
    imageContainer.style.width = '150px'
    imageContainer.style.margin = '20px auto'
    userPic.src = `${userInfo?.picture?.large}`
    const userDescription = document.getElementById('description')
    userDescription.innerHTML = `
    <p>Hi! My Name is </p>
    <h1 class ='userInfo'>${userInfo?.name?.title} ${userInfo?.name?.first} ${userInfo?.name?.last} </h1>
    `
    userDescription.style.textAlign = 'center'
    userPic.style.borderRadius = "50%"
    imageContainer.appendChild(userPic)
    btnContainer.style.display = 'block'
}

    const outputInfo =e =>{
        let userDescription = document.getElementById('description');
        userDescription.innerText = " ";
        const id = e.id;
        if(id == 'email'){
            document.getElementById('description').innerHTML = `
            <p>My Email is </p>
            <h1>${info.email}</h1>
            `;            
        }
        else if(id == 'birth'){
            document.getElementById('description').innerHTML = `
            <p>Hi! I am </p>
            <h1>${info.dob.age} Years old.</h1>
            `;
        }
        else if(id == 'address'){
            userDescription.innerHTML = `
            <p>I am living in </p>
            <h1>${info.location.country}</h1>
            `;
        }
        else if(id == 'phone'){
            userDescription.innerHTML = `
            <p>My number is</p>
            <h1>${info.cell}</h1>
            `;
        }
        else if(id == 'password'){
            userDescription.innerHTML = `
            <p>My Password is </p>
            <h1>${info.login.password}</h1>
            `;
        }
        else{
            userDescription.innerHTML = `
            <p>Hi! My Name is </p>
    <h1>${info?.name?.title} ${info?.name?.first} ${info?.name?.last} </h1>
            `;
        }
        
    }


