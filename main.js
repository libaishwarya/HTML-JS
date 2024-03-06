async function login(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let response = await fetch("http://127.0.0.1:5000/login",{
        method:"post",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: email, password: password})
    })
    let responseJSON = await response.json()
    localStorage.setItem("user_id", responseJSON.id)
    localStorage.setItem("token", responseJSON.token)
}

function login2() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    fetch("http://127.0.0.1:5000/login",{
        method:"post",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: email, password: password})
    }).then(function getData(response){
        response.json().then(function(jsonData){
            localStorage.setItem("user_id", jsonData.id)
            localStorage.setItem("token", jsonData.token)
        }).catch()
    }).catch()



}