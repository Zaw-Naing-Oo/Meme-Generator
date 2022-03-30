import react,{useEffect} from "react";
import memesData from "../MemeData";

export default function Meme(){


  const [memeImage,setMemeImage] = react.useState({
      topText : "",
      bottomText : "",
      randomImage : "http://i.imgflip.com/1bij.jpg",
  });

  const [allmemeImage, setAllMemeImage] = react.useState({});


  useEffect( () => {
      console.log("hi")
    fetch(`https://api.imgflip.com/get_memes`)
    .then( res => res.json())
    .then( data => setAllMemeImage(data));
  },[memeImage])


    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allmemeImage.data.memes.length);

        const datas = allmemeImage.data.memes;
        const url = datas[randomNumber].url;   //  retrive random url from data array
        setMemeImage( previousMemeData => {
            return ({
                    ...previousMemeData,
                    randomImage : url
                  })
        })
    }


    const textFn = (event) => {
        const {name, value} = event.target;
        setMemeImage( prev => ({
            ...prev,
            [name] : value
        }))
    }


//    const submitForm = (event) => {
//      const [value, name ] = event.target;
//      console.log(event)
//    }

    return(
        <main>
            <div className="form">
                <input 
                   type="text"
                   className="form--input"
                   placeholder="Top-Text"
                   name="topText"
                   value={memeImage.topText}
                   onChange={textFn}
                 />
                <input
                   type="text"
                   placeholder="Bottom-Text"
                   className="form--input"
                   name="bottomText"
                   value={memeImage.bottomText}
                   onChange={textFn}
                  />
                <button onClick={ getMemeImage }>Get a new meme image</button>
            </div>
            <div className="meme">
            <img src={memeImage.randomImage} className="meme--image" /> 
            <h2 className="top--text">{memeImage.topText}</h2>
            <h2 className="bottom--text">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}





// const datas = memesData.data.memes;
//         const randomNumber = Math.floor(Math.random() * memesData.data.memes.length);
//         const url = datas[randomNumber].url;   //  retrive random url from data array
//         setMemeImage(url);