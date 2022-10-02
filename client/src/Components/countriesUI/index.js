import React, { useEffect } from 'react';
import { sortBy } from 'lodash';
import { getReportByCountry2, getCountries2 } from '../../API/history';
import CountrieSelector from './CountrieSelector';
import PageChartConaVirus from '../Charts/ChartsConaVirus';


export default function CountriesUI() {
    const [countries, setCountries] = React.useState([]);
    const [selectedCountryId, setSelectedCountryId] = React.useState('');
    const [report, setReport] = React.useState([]);

    useEffect(() => {
        getCountries2().then((res) => {
            console.log({ res })
            const { data } = res;
            const countries = sortBy(data, 'name');
            setCountries(countries);
            setSelectedCountryId('VietNam');

        });
    }, []);


    const handleOnChange = React.useCallback((e) => {
        setSelectedCountryId(e.target.value);
    }, []);


    /*  console.log('tiel',selectedCountryId);  */

    useEffect(() => {
        if (selectedCountryId) {
            const selectedCountry = countries.find(
                (name) => name.name === selectedCountryId.toString()
            );
            console.log('test1', selectedCountry);
            getReportByCountry2(selectedCountry.name).then((res) => {
                console.log('t', res)
                // remove last item = current date

                // Sắp xếp thời gian 
                res.data.response.sort(function (a, b) {
                    var c = new Date(a.day);
                    var d = new Date(b.day);
                    return c - d;
                });
                setReport(res.data.response);

            })


        }
    }, [selectedCountryId, countries]);


    return (
        <div className=''>
            <CountrieSelector
                handleOnChange={handleOnChange}
                countries={countries}
                value={selectedCountryId}
            />
            <PageChartConaVirus report={report} />
        </div>
    )
}
