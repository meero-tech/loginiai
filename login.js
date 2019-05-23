(function(){
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  
  const config = {
      apiKey: "AIzaSyB0qL8wCpKfJmlmuvjs5VDCUTiGtIXVKDk",
      authDomain: "rentalmobil1-a1308.firebaseapp.com",
      databaseURL: "https://rentalmobil1-a1308.firebaseio.com",
      projectId: "rentalmobil1-a1308",
      storageBucket: "rentalmobil1-a1308.appspot.com",
      messagingSenderId: "182017297427",
    };
    firebase.initializeApp(config);

    //Get Elements 
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


    //Add Login Event 
    btnLogin.addEventListener('click', e=>{
        //get email and pass 
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e=>console.log(e.message));
       
    })

    //Add signUp event
    btnSignUp.addEventListener('click', e=>{
      //get email and pass 
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //sign in
      const promise = auth.createUserWithEmailAndPassword(email,pass);
      console.log("anda sudah terdaftar");
      promise.catch(e=>console.log(e.message));
  });

  //add signout 
  btnLogout.addEventListener('click', e=>{
    firebase.auth().signOut();
   // window.location.replace("login.html");
  })

  //add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log("kamu sudah masuk");
      btnLogout.classList.remove('hide');
   
      
    } else{
      console.log('kamu sudah keluar');
      btnLogout.classList.add('hide');
    }
  });



}());
  