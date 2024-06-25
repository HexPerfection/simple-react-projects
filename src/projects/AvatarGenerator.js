import React, {useState} from "react";
import Axios from "axios";


function AvatarGenerator() {
    
    const [sprite, setSprite] = useState("bottts");
    const [seed, setSeed] = useState(1337);

    let avatarUrl =`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`

    function handleSprite(spritetype) { 
        setSprite(spritetype); 
    }
    
    function handleGenerate() { 
        let x = Math.floor(Math.random() * 1000); 
        setSeed(x); 
    } 

    function downloadImage() { 
        Axios({ 
            method: "get", 
            url: avatarUrl, 
            responseType: "arraybuffer"
        }) 
        .then((response) => { 
            var link = document.createElement("a"); 
            link.href = window.URL.createObjectURL( 
                new Blob([response.data],  
                { type: "application/octet-stream" }) 
            ); 
            link.download = `${seed}.svg`; 
            document.body.appendChild(link); 
            link.click(); 
            setTimeout(function () { 
                window.URL.revokeObjectURL(link); 
            }, 200); 
        }) 
        .catch((error) => { }); 
    } 

    return (
        <div className="container"> 
            <div className="nav"> 
                <p>Random Avatar Generator</p> 
            </div> 
            <div className="home"> 
                <div className="btns"> 
                    <button onClick={() => {  
                        handleSprite("avataaars") }}>Human</button> 
                    <button onClick={() => {  
                        handleSprite("icons") }}>Icons</button> 
                    <button onClick={() => {  
                        handleSprite("bottts") }}>Bots</button> 
                    <button onClick={() => {  
                        handleSprite("identicon") }}>Identi</button> 
                    <button onClick={() => {  
                        handleSprite("micah") }}>Avatars</button> 
                </div> 
                <div className="avatar"> 
                    <img src= {`${avatarUrl}`} alt="Sprite" width="200px" height="200px" /> 
                </div> 
                <div className="generate"> 
                    <button id="gen" onClick={() => {  
                        handleGenerate() }}>Next</button> 
                    <button id="down" onClick={() => {  
                        downloadImage() }}>Download</button> 
                </div> 
            </div> 
        </div> 
    );
}

export default AvatarGenerator;