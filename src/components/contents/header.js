import styled from '@emotion/styled'
import {ButtonHeader} from '../ui/buttons'

const headerOptions = ["About", "Work", "Contact", "Social Media"];

function Header (){
    return (<>
        {headerOptions.map(option => {
                <ButtonHeader>{option}</ButtonHeader>
            })
        }
    </>)
}