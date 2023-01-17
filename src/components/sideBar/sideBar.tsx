import { SideBarContainer,SidebarHeader,ListNavegate } from './style'
import { FaInstagram, FaBars, FaHome, FaArchive, FaPhone,FaSignOutAlt} from 'react-icons/fa'
import { useState} from 'react'

export default function SideBar() {

    const [ isDisplay, setIsDisplay ]= useState('') 

    function handleCloseSideBar() {
        
        if (isDisplay==='') {

            setIsDisplay('none')

            return
        }
        setIsDisplay('')
    }

    return(
        <SideBarContainer isDisplay={ isDisplay } >
            <SidebarHeader >
               <div style={{display:isDisplay}} ><FaInstagram/></div>
                <div className='bar'><FaBars onClick={ handleCloseSideBar }/></div>
            </SidebarHeader>
            <div className="profile" style={{display:isDisplay}}></div>
            <ListNavegate>
                <li><FaHome/> <span style={{display:isDisplay}}>Lorem ipsum d olor si </span> </li>
                <li><FaArchive/>  <span style={{display:isDisplay}}>Contatos </span> </li>
                <li><FaArchive/>  <span style={{display:isDisplay}}>Sinceramente </span> </li>
                <li><FaPhone/> <span style={{display:isDisplay}}> Agarde </span> </li>
                <li> <FaHome/> <span style={{display:isDisplay}}>Codagem </span> </li>
                <li><FaArchive/>  <span style={{display:isDisplay}}>Logarítmo da vida </span> </li>
                <li> <FaPhone/> <span style={{display:isDisplay}}> Agarde </span> </li>
            </ListNavegate>
            <div className="footer">
                <FaSignOutAlt className='signOut'/>  <span style={{display:isDisplay}} >Sair da aplicação</span> 
            </div>
        </SideBarContainer>
    )
    
}