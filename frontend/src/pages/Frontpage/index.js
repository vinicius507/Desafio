import React from 'react';
import api from '../../services/api';

import docImg from '../../assets/document.png';

export default function Frontpage({ history }) {

    async function handleProcessing() {
        const res = await api.post('/document');

        const { _id } = res.data;

        localStorage.setItem('id', _id);
        history.push('/processing');
    }

    return (
        <>
            <img src={docImg} alt="Document" className="doc-img"/>
            <p className="doc-name">Doc.pdf</p>

            <button
                type="button"
                onClick={handleProcessing}
            >
                Iniciar Processamento
            </button>
        </>
    );
}