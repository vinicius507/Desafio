import React, { useEffect, useState, useRef } from 'react';
import { useMachine } from '@xstate/react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import api from '../../services/api';
import { stateMachine } from '../../components/Machine';
import Steps from '../../components/Steps';
import Log from '../../components/Log';

import docImg from '../../assets/document.png';

export default function Processing() {

    const [docState, send] = useMachine(stateMachine);
    const [showRevoke, setShowRevoke] = useState(false);

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

        if (docState.value === 'registerFinished') {
            setShowRevoke(true);
        } else {
            setShowRevoke(false);
        }

    }, [docState]);

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

    const RevokeButton = () => {
        const nodeRef = useRef(null);
        return (
            <CSSTransition
                in={showRevoke}
                timeout={300}
                classNames="revoke"
                nodeRef={nodeRef}
                unmountOnExit
            >
                <button className="revoke" ref={nodeRef} onClick={() => send('REVOKE')}>
                    Revogar documento
                </button>
            </CSSTransition>
        );
    }

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

            {RevokeButton()}

            <Log state={docState.value} />

        </>
    );
}