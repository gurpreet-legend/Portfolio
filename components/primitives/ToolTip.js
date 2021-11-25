import ReactTooltip from "react-tooltip";
import { useColorModeValue } from "@chakra-ui/color-mode";



const ToolTip = ({id, tooltipContent, children}) => {

    return (
        <>
            {children}
            <ReactTooltip
                id={id}
                place='bottom'
                type='info'
                effect='solid'
                className='tooltip'
                // backgroundColor={useColorModeValue('teal.500', 'teal.300')}
                backgroundColor="teal.300"
                borderColor={useColorModeValue('#000000', '#ffffff')}
                delayHide={500}
                delayShow={500}
                arrowColor= {useColorModeValue('#000000', '#ffffff')}
                delayUpdate={500}
            >
            {tooltipContent}
            </ReactTooltip>  
        </>
    )
}

export default ToolTip
