// import React, { useEffect, useState } from 'react'
// import { Button, Col, Container, Row } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Layout from '../../components/Layout'
// import { addCategory, getAllCategory } from '../../actions/category.action'
// import { Input } from '../../UI/Input'
// import Modal from '../../UI/Modal'

// export default function Category() {
//     const [show, setShow] = useState(false);
//     const [categoryName, setCategoryName] = useState('')
//     const [parentCategoryId, setParentCategoryId] = useState('')
//     const [categoryImage, setCategoryImage] = useState()
//     const handleShow = () => setShow(true);

//     const dispatch = useDispatch()
//     const category = useSelector(state => state.category)


//     const handleClose = () => {

//         const form = new FormData();

//         form.append('name', categoryName)
//         form.append('parentId', parentCategoryId)
//         form.append('categoryImage', categoryImage)
//         setCategoryName('')
//         setParentCategoryId('')

//         dispatch(addCategory(form))
//         setShow(false)
//     }


//     const createCategoryList = (categories, options = []) => {
//         for (let category of categories) {
//             options.push({ value: category._id, name: category.name })
//             if (category.children.length > 0) {
//                 createCategoryList(category.children, options)
//             }
//         }
//         return options
//     }

//     const handleCategoryImage = (e) => {
//         setCategoryImage(e.target.files[0])
//     }

//     const renderCategories = (categories) => {
//         let myCategories = [];
//         for (let category of categories) {
//             myCategories.push(<li>{category.name}</li>)
//             if (category.children.length > 0) {
//                 myCategories.push(<ul>{renderCategories(category.children)}</ul>)
//             }
//         }
//         return myCategories;
//     }

//     return (
//         <Layout sidebar>
//             <Container>
//                 <Row>
//                     <Col md={12} >
//                         <ul style={{ textAlign: 'left' }}>
//                             {renderCategories(category.categories)}
//                         </ul>
//                     </Col>
//                     <Col md={12}>
//                         <div style={{ justifyContent: 'space-between', display: 'flex' }}>
//                             <Button onClick={handleShow}>Add Category</Button>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             <Modal show={show}
//                 handleClose={handleClose}
//                 Title="Add New Category">
//                 <Input type="text"
//                     placeholder="Category Name"
//                     value={categoryName}
//                     onChange={(e) => setCategoryName(e.target.value)}>
//                 </Input>
//                 <select
//                     className="form-control"
//                     value={parentCategoryId}
//                     onChange={(e) => setParentCategoryId(e.target.value)
//                     }>
//                     <option>Select Parent Category</option>
//                     {
//                         createCategoryList(category.categories).map(category =>
//                             <option key={category.value} value={category.value}>{category.name}</option>
//                         )
//                     }
//                 </select>
//                 <input type="file"
//                     name="categoryImage"
//                     onChange={handleCategoryImage}>
//                 </input>

//             </Modal>

//         </Layout>
//     )
// }
