import styled from 'styled-components'
import { flexCenterColumn, h3 } from '../../global/common';
// import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3, logo } from '../../../global/common';


const S={};

S.Container=styled.div`
    width: 100%;
    /* height:100vh; */
    /* margin-bottom: 10%; */
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  
`

 
S.TitleHightlight = styled.div`
    /* position:relative; */
    width:100%;
    height:100%;
    
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }          
`

export default S;