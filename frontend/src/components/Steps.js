import React from 'react';

import './Steps.css';

export default function Steps({ state, setState }) {

    const steps = [
        'Geração do documento iniciada...',
        'Documento gerado.',
        'Registro de documento iniciado...',
        'Documento registrado.',
        // 'Revogação do documento iniciada...',
        // 'Documento revogado.'
    ];

    function renderStep(step, i) {
        if (state < i) {
            return (
                <>
                    <span className="circle" id="future">
                        <strong>
                            {i + 1}
                        </strong>
                    </span>
                    <p id="future">
                        {step}
                    </p>
                </>
            );
        } else if (state === i) {
            return (
                <>
                    <span className="circle">
                        <strong>
                            {i + 1}
                        </strong>
                    </span>
                    <p>
                        {step}
                    </p>
                </>
            );
        } else {
            return (
                <>
                    <span className="circle" id="finished" onClick={() => setState(i)}>
                        <strong>
                            ✔
                    </strong>
                    </span>
                    <p>
                        {step}
                    </p>
                </>
            );
        }
    }

    return (
        <>
            {steps.map((step, i) =>
                <div className="step" key={i}>
                    {renderStep(step, i)}
                </div>
            )}
        </>
    );
}