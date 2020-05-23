import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import './styles.css';

import api from '../../services/api';

import Machine from '../../components/Machine';
import Steps from '../../components/Steps';
import Log from '../../components/Log';

import docImg from '../../assets/document.png';

export default function Processing() {

    const [docState, send] = useMachine(Machine);

    function listener(i) {
        const events = [
            'GEN_S',
            'GEN_F',
            'REG_S',
            'REG_F',
            'RVK_S'
        ];

        return send(events[i]);
    }



    useEffect(() => {
        const docId = localStorage.getItem('id');

        async function handleStateChange() {
            await api.patch('/document', {
                'state': docState.value
            }, {
                headers: {
                    'id': docId
                }
            })
        }
        handleStateChange();

    }, [docState]);



    return (
        <>
            <div className="dashboard">
                <div className="doc-container">
                    <img src={docImg} alt="Document" className="doc-img" onClick={() => send('TIME')} />
                    <p className="doc-name">Doc.pdf</p>
                </div>
                <div className="steps">
                    <Steps state={docState.value} setState={listener} />
                </div>
            </div>

            {docState.value === 'registerFinishedLimbo' ? (
                <button id="revoke" onClick={() => send('REVOKE')}>
                    Revogar documento
                </button>
            ) : (<></>)}

            <Log />

        </>
    );
}