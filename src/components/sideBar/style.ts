import { css } from "styled-components";
import styled from "styled-components";

export const SideBarContainer = styled.div.attrs(props=>{})`
    width: 20%;
    height: 100vh;
    background: #ec272e;
    padding:.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    transition: all .5s ease-in-out;

    FaBars{}

    

    
   ${props=>props.isDisplay === 'none' && css`
    &{
        width: 5rem;
        transition: all .5s ease-in-out;
    }

   ul{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size: 25px;
    }
    .signOut{
       font-size:35px ;
       cursor: pointer;
    }
`}
    
   

    .profile{
        width: 60%;
        height: 24%;
        background: #fff;
        border-radius: 50%;
    }

    .footer{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        bottom: 2px;
        font-size: 18px;
        gap: 10px;
        color: #fff;
    }
`
export const SidebarHeader= styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
    div{
        width: 10vw;
        font-size: 25px;
        text-align: center;
        color: #fff;
    }
    .bar{
        cursor: pointer;
    }
`

export const ListNavegate = styled.ul`
    color: #f2f2f2;
    font-size: 18px;
    width: 88%;
    overflow-x: hidden;
    

    li{
        margin-bottom: 1rem;
        display: flex;
        gap: 20px;
        cursor: pointer;
    }

`