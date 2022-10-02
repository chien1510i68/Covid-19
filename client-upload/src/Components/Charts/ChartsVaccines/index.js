import React from 'react'
import VaccinesDaily from './VaccinesDaily'
import VaccinesProtocol from './VaccinesProtocol'
import VaccinesBooster   from "./VaccinesBooster";
import VaccinesDailyPerMilion from './VaccinesDailyPerMilion';
import VaccinesBoosterHundred from './VaccinesBoosterHundred';
function ChartsVaccines({report}) {
    return (
        <div>
            <VaccinesProtocol report={report}/>
            <VaccinesDaily report={report}/>
            <VaccinesDailyPerMilion report={report}/>
            <VaccinesBooster report={report}/>
            <VaccinesBoosterHundred report={report}/>
        </div>
    )
}

export default ChartsVaccines
