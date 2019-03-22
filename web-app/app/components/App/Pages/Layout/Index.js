import React from 'react';
import Header from '../Header/Index'
import Footer from '../Footer/index'
import BoxChildren from './BoxChildren';

const Index = (props) => ( 
    <div>
        <Header/>
            <BoxChildren> 
                {props.children} 
            </BoxChildren>  
        <Footer/>
    </div>
);


export default Index;