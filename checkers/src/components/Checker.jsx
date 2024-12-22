import React from 'react'

export default function Checker({ color, row, col, rows }) {

    function availablePath() {
        let temp;
        if (color === "white") {
            temp = row + 1
        } else {
            temp = row - 1
        }

        const paths = [];

        if (rows[temp][parseInt(col - 1)] === false) {
            paths.push(temp + "," + parseInt(col - 1))
        }

        if (rows[temp][parseInt(col + 1)] === false) {
            paths.push(temp + "," + parseInt(col + 1))
        }

        paths.forEach(el => {
            document.getElementById(el).style.backgroundColor = "grey"
            document.getElementById(el).addEventListener("click", () => { console.log("moved", el) })
        })
    }

    return (
        <div onClick={availablePath} className={'checker checker-' + color}>
        </div>
    )
}
