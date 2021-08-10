// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Redirect } from 'react-router'
// import Layout from '../../components/Layout'
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import { Input } from '../../UI/Input';
// import {signup} from '../../actions/user.action'

// export default function Signup() {

//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [username, setUsername] = useState('')

//   const dispatch=useDispatch()
//   const auth=useSelector(state=>state.auth)

//   if(auth.authenticate){
//     return  <Redirect to='/' />
//   }

//   const userSignup=(e)=>{

//     e.preventDefault();
//     const user={firstname,lastname,email,password,username}
//     dispatch(signup(user))
//   }
   
//   return (
//         <div>
//           <Layout>
//             <Container >
//               <Row>
//                 <Col md={{span:8,offset:2}}>
//                 <form>
//                   <Row>
//                     <Col md="6">
//                     <Input label="firstname" type="text" placeholder="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} ></Input>
//                     </Col>                    
//                     <Col md="6">
//                     <Input label="lastname" type="text" placeholder="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} ></Input>
//                     </Col>
//                     <Col md="12">
//                     <Input label="username" type="text" placeholder="UserName" value={username} onChange={(e)=>{setUsername(e.target.value)}} ></Input>
//                     </Col>     
//                     <Col md="12">
//                     <Input label="email" type="email" placeholder="email-id" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></Input>
//                     </Col>                    
//                     <Col md="12">
//                     <Input label="password" type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></Input>
//                     </Col>                    
//                   </Row>
//                   <button type="submit" className="btn btn-primary" onClick={userSignup}>
//                     Submit
//                   </button>
//                 </form>
//                 </Col>
//               </Row>
//             </Container>
//           </Layout>
//         </div>
//     )
// }
