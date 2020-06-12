import React, { useState, useEffect } from 'react';
import { fetchContryList } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';


const CountryList = ({handleCountryName}) => {
    const [fetchedCountryList, setFetchCountryList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountryList(await fetchContryList().then(res => res.data))
        }

        fetchApi()
    }, [setFetchCountryList])
    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={e =>handleCountryName(e.target.value)}>
                {fetchedCountryList.map((data, i) => <option key={i} value={data.country}>{data.country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryList;