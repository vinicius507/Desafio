import React from 'react';

import './Steps.css';

export default function Steps({ state, setState }) {

    let steps = [
        'Geração do documento iniciada...',
        'Documento gerado.',
        'Registro de documento iniciado...',
        'Documento registrado.',
        'Revogação do documento iniciada...',
        'Documento revogado.'
    ];

    const states = [
        'generationStarted',
        'generationFinished',
        'registerStarted',
        'registerFinished',
        'revokeStarted',
        'revokeFinished'
    ]

    if(!states.slice(5).includes(state)){
        steps = steps.slice(0,4);
    }

    function renderStep(step, i) {
        if(states.slice(0,i).includes(state)){
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
        } else if(states[i] === state) {
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