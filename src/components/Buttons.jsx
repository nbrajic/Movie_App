import React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-gg/arrow-right';
import arrowLeft from '@iconify/icons-gg/arrow-left';

const Buttons = ({page, setPage, numOfPages}) => {
    return (
        <div style={{position: "absolute", left: "48%", top: "10%"}}>
            <Button 
                variant="outline-danger" 
                size="sm"
                style={{display:"inline-block"}} 
                disabled={page === 1} 
                onClick={() => setPage(page - 1)}
            ><Icon icon={arrowLeft} width="25"/>
            </Button>
            <Button 
                variant="outline-danger"
                size="sm"
                style={{display:"inline-block"}} 
                disabled={page >= numOfPages} 
                onClick={() => setPage(page + 1)}
            ><Icon icon={arrowRight} width="25"/>
            </Button>
        </div>
    )
};

export default Buttons;