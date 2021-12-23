import React, {useState} from 'react'
import './statusBar.css'
import { Modal, Button } from 'react-bootstrap'
import $ from 'jquery'

function StatusBar({filterUsername}) {

    const [imageSelected, setImageSelected] = useState('./images/dumyImg.jpg')

    let getImage = (e) => {
        setImageSelected(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
    }

    console.log(imageSelected);

    const [image, setImage] = useState()

    // const [url, setUrl] = useState()

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
            // setUrl(data.url)
            sendImageToLocal(data.url)
            handleFilterUser()
        })
    }

    function sendImageToLocal(url){
        let picWithUser = {user: filterUsername[0].username, pic: url}

        let data = JSON.parse(localStorage.getItem('stories'))

        if(!data){
            localStorage.setItem('stories', JSON.stringify([picWithUser]))
        }
        else{
            data.push(picWithUser)
            localStorage.setItem('stories', JSON.stringify(data))
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        $('body').css('overflowY', 'unset')
        setImageSelected('./images/dumyImg.jpg')
        uploadImage()   
    }

    const handleShow = () => {
        setShow(true)
        $('body').css('overflowY', 'hidden')
    }

    const [modelShow, setModelShow] = useState(false);

    const handleModelClose1 = () => {
        setModelShow(false)
        $('body').css('overflowY', 'unset')
    }

    const [storiesImg, setStoriesImg] = useState([])

    const handleModelShow1 = (imgPath) => {
        setModelShow(true)
        $('body').css('overflowY', 'hidden')
        setStoriesImg(imgPath)
    }

    const [stories, setStories] = useState([])

    function handleFilterUser() {   
        let getData = JSON.parse(localStorage.getItem('stories'))

        if(getData){
            let filteredStories = getData.filter((item)=>{
                return item
        })       
            setStories(filteredStories)
        }
    }

    setTimeout(handleFilterUser,500)

    return (
        <>

            <div className="statusBarContainer">

                <div>
                
                    <label>
                
                        <img className="uploadImg" src='./images/statusadd.png' onClick={handleShow} />
                
                        <div className="statusBarContent statusBarContent1">Add Story</div>
                
                    </label>
                
                </div>
                
                {
                    stories.length > 0 && stories.map((item,i)=>{
                        return(
                            <div className="status" onClick={()=>{handleModelShow1(item)}}>
                
                                <img className="statusBarStatus" src='./images/pp1.png' />
                
                                <div className="statusBarContent">{item.user}</div>
                
                            </div>
                        )
                    })
                
                }

            </div>

            { show === true && <div className='uploadSection'>

                <Modal show={show} onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                
                    <Modal.Header closeButton>
                
                    <Modal.Title>Upload a Story</Modal.Title>
                
                    </Modal.Header>
                
                    <Modal.Body>
                        
                        <div className="imgDiv">

                            <img src={imageSelected} alt="" className='selectedImg'/>

                        </div>

                    </Modal.Body>
                
                    <Modal.Footer>

                    <label htmlFor="uploadStatusInp" className="uploadLbl">

                        <i className='fas fa-plus plusIcon'></i>

                        <p className='uploadPara'>Click to Upload</p>

                    </label>

                    <input type="file" onChange={getImage} id='uploadStatusInp'/>
                    
                        <Button className='uploadBtn' onClick={handleClose}>Upload</Button>
                
                    </Modal.Footer>
                
                </Modal>

            </div>}

            { modelShow === true && <div className='uploadSection'>

                <Modal show={modelShow} onHide={handleModelClose1} 
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                
                    <Modal.Header closeButton>
                
                    <Modal.Title style={{fontWeight:'700', fontSize: '15.5px', textTransform: 'capitalize'}}>{storiesImg.user}'s Story</Modal.Title>
                
                    </Modal.Header>
                
                    <Modal.Body>
                        
                        <div className="imgDiv">

                            <img src={storiesImg.pic} alt="" className='selectedImg'/>

                        </div>

                    </Modal.Body>
                
                </Modal>

            </div>}

        </>
    )
}

export default StatusBar
