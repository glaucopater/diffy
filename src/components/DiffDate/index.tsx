import React from "react"
import strings from "../../strings"
import "./styles.css"

const DiffDate = ({ startDate, endDate }: { startDate: string, endDate: string }) => {

    const d1 = new Date(endDate)
    const d2 = new Date(startDate)
    const diff = Math.abs(d1.getTime() - d2.getTime())
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24))

    return (
        <div className="diffDateWrapper">
            <h2>
                {strings.startDate}: {startDate}
            </h2>
            <h2>
                {strings.endDate}: {endDate}
            </h2>
            <ul className="diffDateList">
                <li>{strings.differenceInMilliseconds}: {diff}</li>
                <li>{strings.differenceInSeconds}: {diff / 1000}</li>
                <li>{strings.differenceInDays}: {diffDays}</li>
            </ul>
        </div>
    )
}

export default DiffDate
