// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// const GoogleAuthButton = () => {
//   const handleLoginSuccess = async (response: any) => {
//     try {
//       const token = response.credential;

//       // Send token to backend for verification
//       const { data } = await axios.post('/api/auth/google', { token });

//       // Save user data (you can use a state or context to store user info)
//       console.log('User data:', data.user);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const handleLoginFailure = () => {
//     console.error('Google login failed:');
//   };

//   return (
//     <div>
//       <GoogleLogin 
//         onSuccess={handleLoginSuccess} 
//         onError={handleLoginFailure} 
//       />
//     </div>
//   );
// };

// export default GoogleAuthButton;
