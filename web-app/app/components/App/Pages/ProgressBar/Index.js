import React from 'react';
import Description from '../Generic/Description';
import TitleGeneral from '../Generic/TitleGeneral';
import BoxProgress from './BoxProgress';
import Progress from './Progress';
import TwoColumnWrap from '../Generic/TwoColumnWrap';

const ProgressBar = (props) =>  (
    <div className="total-center">
        <TwoColumnWrap sizeColumns="0.5fr 2fr" maxWidth="85%">
            <div>
                <Description fontSize="16px">{props.primaryAmount}</Description>
                <TitleGeneral fontSize="12px" fontWeight="600" marginLeft="10px">of {props.secondatyAmount}</TitleGeneral>
            </div>
            <div>
                <BoxProgress>
                    <Progress progress={props.progress}/>
                </BoxProgress>
                <Description 
                    fontSize="12px" 
                    fontFamily="Open Sans"
                    textAlign="right"
                    fontWeight="600"
                    marginTop="5px"
                >
                    {props.initialDate} - {props.finalDate}
                </Description>
            </div>   
        </TwoColumnWrap>
    </div>
);
    

export default ProgressBar;
