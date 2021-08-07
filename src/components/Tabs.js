import React from 'react'
import Button from './Button';

const Tabs = ({ tabContent }) => {
    return (
        <div>
            {tabContent.map((tab,i) => {
                return (
                    <div>
                        <p>{tab.header}</p>
                        {tab.active && <p>{tab.description}</p>}
                    </div>
                )
            })}
            <Button title="BOOK A TABLE" />
        </div>
    )
}
export default Tabs;