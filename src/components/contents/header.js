import styled from '@emotion/styled'
import {ButtonHeader} from '../ui/buttons'

const Headerdiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export default function Header (){
    const headerOptions = ["About", "Work", "Contact", "Social Media"];
    
    return (
        <Headerdiv>
            {headerOptions.map(option => {
                return(
                    <ButtonHeader>{option}</ButtonHeader>
                )
            })}
        </Headerdiv>
    )
}



