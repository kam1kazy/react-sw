import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'

import styles from './PersonPage.module.css';

const PersonPage = ({ match, setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null)
    match = useParams().id;
 
    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${match}/`);

            if (res) {
                setPersonInfo([
                   { title: 'Height: ', data: res.height },
                   { title: 'Mass: ', data: res.mass },
                   { title: 'Skin_color: ', data: res.skin_color },
                   { title: 'Hair_color: ', data: res.hair_color },
                   { title: 'Eye_color: ', data: res.eye_color },
                   { title: 'Birth_year: ', data: res.birth_year },
                   { title: 'Gender: ', data: res.gender },
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(match))
                // res.film 

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }

        })();
    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span> 

                <div className={styles.container}>

                    <PersonPhoto 
                        personPhoto={personPhoto}
                        personName={personName} 
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>
            </div>
        </>
    )
}

PersonPage.prototype = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object
}

export default withErrorApi(PersonPage);