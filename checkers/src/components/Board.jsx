import React, { useState } from 'react'
import Checker from './Checker'

export default function Board() {

    const [rows, setRows] = useState(createBoard)

    function createBoard() {
        const rows = new Array(8).fill(new Array(8).fill(false))
        const temp = rows.map((el, i) => {
            return shuffleCheckers(el, i)
        })
        return temp
    }

    function shuffleCheckers(el, i) {
        return el.map((element, index) => {
            if ((i + index) % 2 !== 0) {
                if (i < 3) {
                    return "white"
                } else if (i > 4) {
                    return "black"
                } else {
                    return false
                }
            } else {
                return false
            }
        })
    }


    return (
        <div className='board'>
            {
                rows.map((el, i) => (
                    <div key={i} className="row">
                        {
                            el.map((fieldData, index) => (
                                <div key={index} id={i + "," + index} className={
                                    "field " + ((i + index) % 2 !== 0 ? "black-field" : "white-field")
                                } >
                                    {
                                        fieldData && <Checker rows={rows} row={i} col={index} color={fieldData} />
                                    }
                                </div>
                            ))
                        }
                    </div>

                ))
            }

        </div >
    )
}
