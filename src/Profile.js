import React from 'react';


class Profile  extends React.Component{
    btnClick(){
        window.open('https://www.gomycode.tn/');}
    render() {
        return(<>
 <button  onClick={this.btnClick.bind(this)}>Go to gomycode</button>
       </>);
        }

        
    
}
export default Profile ; 