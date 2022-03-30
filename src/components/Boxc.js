import React from "react";

export default function Boxc(props) {
    
    const styles = {
        backgroundColor : props.on ? '#222222' : 'none',
      };

    return (
             <div 
                style={styles}
                onClick={ () =>  props.toggle(props.id) }
                className="cls"
              >
            </div>
    )
}