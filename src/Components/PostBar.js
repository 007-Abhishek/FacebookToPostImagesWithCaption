import React, {useState} from "react";
import Dp from '../images/dp.png';
import Gl from '../images/gallerylogo.png';

var file='';
var Text='';
function PostBar(){
    const [selectedImageSrc, setSelectedImageSrc] = useState('');
    const [inputText, setInputText] = useState('');

    const handleImageChange = (event) => {
        file = event.target.files[0];
    }
    const handleTextChange = (event) => {
        Text = event.target.value;
    }

    function postImg(){
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImageSrc(imageURL);
        }
        if (Text) {
            const inputText=Text;
            setInputText(inputText);
        }
      }
  
    return (
      <div>
        <div className="Area">
            <div className="bar">
                <img src={Dp} style={{height:"50px", margin:"8px"}}/>
                <div>
                    <input type="textArea" style={{height:"35px", marginTop:"15px", borderRadius:"10px"}} onChange={handleTextChange}/>
                    <input type="file" accept="image/*" style={{display:"none"}} onChange={handleImageChange} id="image-input"/>
                    <label htmlFor="image-input"><img src={Gl} style={{height:"35px", margin:"8px"}}/></label>
                </div>
                <button className="btn btn-primary" onClick={postImg} style={{width:"70px", margin:"10px"}}>Post</button>
            </div>
        </div>
        <div className="card">
          {inputText && <span><img src={Dp} style={{height:"35px", marginRight:"15px"}}/><span>Abhishek Singh</span><br></br>{inputText}</span>}
          {selectedImageSrc && <img src={selectedImageSrc} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />}
        </div>
      </div>
    );
  }
export default PostBar;