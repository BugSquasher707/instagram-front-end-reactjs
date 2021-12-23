import React, {useState} from 'react'
import './post.css'
import $ from 'jquery'

function Post({userName,postImage,des}) {
    
    const [heartImagePink, setHeartImagePink] = useState(false)
    const [heartImageBlack, setHeartImageBlack] = useState(true)

    let setBlackImage = () => {
        setHeartImageBlack(true)
        setHeartImagePink(false)

        $('.postLikeShareImage3').css('marginLeft','10px')
    }

    let setPinkImage = () => {
        setHeartImageBlack(false)
        setHeartImagePink(true)

        $('.postLikeShareImage3').css('marginLeft','55px')
    }

    const [saveImage, setSaveImage] = useState(true)
    const [saveImageC, setSaveImageC] = useState(false)

    let handleSaveImage = () => {
        setSaveImage(false)
        setSaveImageC(true)
    }

    let handleSaveCImage = () => {
        setSaveImage(true)
        setSaveImageC(false)
    }

    const [comment, setComment] = useState('')

    let handleComments = (e) => {
        setComment(e.target.value)
    }

    let data=[
            {
                "username": "ASD",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
            },
            {
                "username": "gfdgfv",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 2"
            },
            {
                "username": "dasgupta",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 3"
            }
        ];
    
    return (
        <>

            <div className="postContainer">
            
                {/* Header Section */}
            
                <div className="postHeader">
            
                        <img className="postUserImage" src="./images/pp1.png" />
            
                        <div className="postUsername" style={{textTransform: 'capitalize'}}>{userName}</div>
            
                </div>

                {/* Image Section */}
            
                <div>
            
                    <img src={postImage} width="100%" /> 
            
                </div>

                {/* Like Share Section */}
            
                <div>
            
                    <div className='likeShareContainer' >
            
                        { heartImageBlack && <img src='./images/heart.svg' onClick={setPinkImage} className="postLikeShareImage"/>}
                        
                        { heartImagePink && <img src='./images/heartPink.svg' onClick={setBlackImage} className="postLikeShareImage2"/>}
            
                        <img src='./images/comment.svg' className="postLikeShareImage3"/>
            
                        <img src='./images/send.svg' className="postLikeShareImage"/>

                        { saveImage && <img src="./images/save.svg" onClick={handleSaveImage} alt="" className="postLikeShareImage1"/>}

                        { saveImageC && <img src="./images/saveC.png" onClick={handleSaveCImage} alt="" className="postLikeShareImage1 postLikeShareImage4"/>}
            
                    </div>

                    <div className='likeDiv'>
            
                        12 likes     
            
                    </div>

                    <div className="desDiv">
                        
                        {userName} <span>{des}</span>

                    </div>
            
                </div>

                {/* Comment Section */}
            
                <div style={{position:'relative'}}>
            
                    {
                        data.map((item,index)=>(
                            index < 4 ?
                                <div className="postComment"> <span>{userName}</span>: {item.description}</div> :<span></span>
                        ))
                    }
            
                    <input text="text" onChange={handleComments} value={comment} className="postCommentInp" placeholder="Add a comment..." />

                    {comment !== '' && <button type='button' className='commentPostBtn'>Post</button>}

                    {comment === '' && <button type='button' className='commentPostBtn commentPostBtn1'>Post</button>}
                    
                </div>
          
            </div> 

        </>
    )
}

export default Post
