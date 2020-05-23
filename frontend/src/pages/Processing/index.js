import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api';

import Steps from '../../components/Steps';
import Log from '../../components/Log';

import docImg from '../../assets/document.png';

export default function Processing() {

    const [docState, setDocState] = useState(1);

    useEffect(() => {
        const docId = localStorage.getItem('id');
        async function loadDocState() {
            const response = await api.get('/document', {
                headers: {
                    'id': docId
                }
            });

            setDocState(response.data.state);
        }
        loadDocState();
    }, []);

    useEffect(() => {
        const docId = localStorage.getItem('id');
        async function handleStateChange() {
            await api.patch('/document', {
                'state': docState
            }, {
                headers: {
                    'id': docId
                }
            })
        }
        handleStateChange();
        console.log(docState);
    }, [docState]);

    return (
        <>
            <div className="dashboard">
                <div className="doc-container">
                    <img src={docImg} alt="Document" className="doc-img" onClick={() => setDocState(docState + 1)} />
                    <p className="doc-name">Doc.pdf</p>
                </div>
                <div className="steps">
                    <Steps state={docState} setState={setDocState} />
                </div>
            </div>

            {docState === 4 ? (
                <button id="revoke">
                    Revogar documento
                </button>
            ) : (<></>)}

            <Log />

        </>
    );
}