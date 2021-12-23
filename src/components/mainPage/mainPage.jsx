import React, {useState} from 'react'
import './mainPage.css'
import { Modal, Button } from 'react-bootstrap'
import $ from 'jquery'
import Post from '../post/post'

function MainPage({filterUsername}) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        $('body').css('overflowY', 'unset')
        setImageSelected('./images/dumyImg.jpg')
        setImageSelectedName('No Image Selected')
        uploadImage()
    }
    
    const handleShow = () => {
        setShow(true)

        $('body').css('overflowY', 'hidden')
    }

    const [imageSelected, setImageSelected] = useState('./images/dumyImg.jpg')
    const [imageSelectedName, setImageSelectedName] = useState('No Image Selected')

    let getImage = (e) => {
        setImageSelected(URL.createObjectURL(e.target.files[0]));
        setImageSelectedName(e.target.files[0].name)
        setImage(e.target.files[0])
    }

    console.log(imageSelectedName);

    const [image, setImage] = useState()

    async function uploadImage(){
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','arslan')
        data.append('cloud_name','dq2s0p5ue')

        await fetch('	https://api.cloudinary.com/v1_1/dq2s0p5ue/image/upload',{
            method: 'post',
            body : data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            sendImageToLocal(data.url)
            handleFilterUser()
        })
    }

    function sendImageToLocal(url){
        let picWithUser = {user: filterUsername[0].username, pic: url, description : textAreaVal}

        let data = JSON.parse(localStorage.getItem('posts'))

        if(!data){
            localStorage.setItem('posts', JSON.stringify([picWithUser]))
        }
        else{
            data.push(picWithUser)
            localStorage.setItem('posts', JSON.stringify(data))
        }
    }

    const [posts, setPosts] = useState([])

    function handleFilterUser() {   
        let getData = JSON.parse(localStorage.getItem('posts'))

        if(getData){
            let filteredPosts = getData.filter((item)=>{
                return item
        })       
            setPosts(filteredPosts)
        }
    }

    const [textAreaVal, setTextAreaVal] = useState('')

    let handleTextArea = (e) => {
        setTextAreaVal(e.target.value)
    }

    setTimeout(handleFilterUser,500)

    return (
        <>

            <div className="mainPageContainer">  
                
                <div className="mainPageHr"></div>
                
                <div className="uploadFileDiv">
                
                    <label>
                
                        <button type='button' onClick={handleShow} className='postBtn'>Create a Post</button>
                
                    </label>
                
                </div>
                
                <div className="mainPageHr"></div>   
            
            </div>
            
            {
                posts.length > 0 && posts.map((item,i)=>(
            
                    <Post userName={item.user} postImage={item.pic} des={item.description} />
            
                ))
            }

            { show === true && <div className='mainPageUploadSection'>

                <Modal show={show} onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >

                    <Modal.Header closeButton>

                        <Modal.Title>Create a Post</Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                        <div className='modalBody'>
                            <div className="mainPageImgDiv">

                                <img src={imageSelected} alt="" className='mainPageSelectedImg'/>

                                <p><span>Image Name:</span> {imageSelectedName}</p>

                            </div>

                            <textarea className='textAreaBox' onChange={handleTextArea} placeholder='Write a caption...' name="" id="" cols="30" rows="10"></textarea>

                        </div>

                    </Modal.Body>

                    <Modal.Footer>

                    <label htmlFor="uploadStatusInp" className="mainPageUploadLbl">

                        <i className='fas fa-plus mainPagePlusIcon'></i>

                        <p className='mainPageUploadPara'>Click to Upload</p>

                    </label>

                    <input type="file" onChange={getImage} id='uploadStatusInp'/>
                    
                        <Button className='mainPageUploadBtn' onClick={handleClose}>Post</Button>

                    </Modal.Footer>

                </Modal>

            </div>}

        </>
    )
}

export default MainPage
