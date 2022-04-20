import React from 'react'
import helpApi from './HelpApi'
const HelpItems = () => {
    const record = helpApi;
    return (
       <>
        <div className="row mb-4">
                <div className="col-12 col-lg-12">
                <div className="help-cat">
                   {
                        record.map((currItem) => {
                        const {id,icon,title,description} = currItem;
                        return (
                            
                            <div className="help-cat-item"  key={id}>
                                <span className="icon"><i className={icon}></i></span>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <a href="index.html">Read More</a>
                            </div>
                           
                        )
                       })
                   }
                   </div>
                </div>
            </div> 
       </>
    )

}

export default HelpItems;
