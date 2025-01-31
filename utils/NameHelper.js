import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  name: {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.5'
  }
});

export const NameHelper = (props) => {
    const classes = useStyles();
    const { setImageSrc, name } = props;

    const [ isActive, setIsActive ] = useState(false);
    const [ isTimerActive, setIsTimerActive ] = useState(false);
    let buffer = [];
    const sequence = [74, 65, 67, 79, 66, 72, 65, 82, 82, 73, 83];

    const onKeyDown = (event) => {
        const keyCode = event.keyCode;
        const nextChar = sequence[buffer.length];
        const isKeyCorrect = nextChar === keyCode;
        if(isKeyCorrect) {
            buffer.push(keyCode);
            if(buffer.length === sequence.length) {
              setImageSrc('/cardProfileImgs/ashrafClown.jpg');
              setIsActive(true);
            }
        } else {
          buffer = [];
        }
    }

    const handleClick = (event) => {
        if(name === "Ashraf Moursi" && !isTimerActive) {
          setIsTimerActive(true)
          document.addEventListener('keydown', onKeyDown);
          setTimeout(()=>{
            document.removeEventListener('keydown', onKeyDown);
            setIsTimerActive(false);
          }, 2000);
        }
    }

    return(
        <div onClick={handleClick}>
            {isActive ?
              <span className={`lettering glow1 wave ${classes.name}`}>
                <span className="char1">A</span>
                <span className="char2">s</span>
                <span className="char3">h</span>
                <span className="char4">r</span>
                <span className="char5">a</span>
                <span className="char6">f</span>
                <span className="char7">&nbsp;</span>
                <span className="char8">M</span>
                <span className="char9">o</span>
                <span className="char10">u</span>
                <span className="char11">r</span>
                <span className="char12">s</span>
                <span className="char13">i</span>
              </span>
              :
              props.children
            }
        </div>
    );
}