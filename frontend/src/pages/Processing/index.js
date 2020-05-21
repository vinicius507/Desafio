import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api';


import docImg from '../../assets/document.png';


export default function Dashboard() {

    const [docState, setDocState] = useState(1);

    useEffect(() => {
        const docId = localStorage.getItem('id');

    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="doc-container">
                    <img src={docImg} alt="Document" className="doc-img" />
                    <p className="doc-name">Doc.pdf</p>
                </div>
                <div className="steps">
                    <p><span className="circle"><strong>1</strong></span>Gerando documento...</p>
                    <p><span className="circle"><strong>2</strong></span>Documento gerado.</p>
                    <p><span className="circle"><strong>3</strong></span>Registrando documento...</p>
                    <p><span className="circle"><strong>4</strong></span>Registro finalizado.</p>
                    <p><span className="circle"><strong>5</strong></span>Revogando documento...</p>
                    <p><span className="circle"><strong>6</strong></span>Documento revogado.</p>
                </div>
            </div>

            <div className="log" id="style-1">
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
                <p>[14/04/2020 14:52:04] Geração do documento iniciada...</p>
            </div>

        </>
    );
}