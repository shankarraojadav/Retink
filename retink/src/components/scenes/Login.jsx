// import { Box, Button, Typography } from "@mui/material";
// import { Google } from "@mui/icons-material";
// import { useContext, useEffect } from "react";
// import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../auth/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { authContext } from "../../context/AuthContext";

// export default function Login() {

//   const { setUserData, handleLogin } = useContext(authContext);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (result) => {
//       if(result) {
//         const {displayName, email, photoURL} = result;
//         setUserData({  displayName, email, photoURL });

//         handleLogin();
//       } else {
        
//         handleLogin();
//       }
//     })
//     return () => unSubscribe();
//   }, []);

//   const SignUpUsingGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//     .then((result) => {
      
//       const { displayName, email, photoURL } = result.user;
//       setUserData({ displayName, email, photoURL });

//       handleLogin();
//       navigate("/");
//     }).catch((error) => {
//       console.log({error})
//     });
//   };

//   // const Logout = () => {
//   //   signOut(auth).then(() => {
//   //     setUserData({});
//   //     setLogin(false);
//   //   }).catch((error) => {
//   //     console.log({error})
//   //   })
//   // }
//   return (
//     <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center",
//     alignItems:"center", mt:"40vh"}}>
//       <Box sx={{display:"flex", justifyContent:"center", textAlign:"center"}}>
//         <Typography sx={{
//         fontSize:"5vh", fontWeight:"bold"
//       }}>Wants to get in? Login
//       <img src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696849779/hand_kpn0xq.png" width="20vh" height="20vh" />
//       </Typography>
//       </Box>
//       <Box sx={{
//         display:"flex", flexDirection:"row", margin:"2vh", alignItems:"center"
//       }}>
//         <Button variant="outlined" onClick={SignUpUsingGoogle}>
//            <Google sx={{fontSize:"6vh"}} /> <Typography sx={{
//             fontSize:"3vh", fontWeight:"bold"
//            }}>Sign in with Google</Typography></Button>
//       </Box>
//     </Box>
//   );
// }
