import React, { useEffect, useState } from 'react';

import './Steps.css';

export default function Steps({ state, setState }) {

    const [currentStep, setStep] = useState(0);

    const steps = [
        'Geração do documento iniciada...',
        'Documento gerado.',
        'Registro do documento iniciado...',
        'Documento registrado.',
        'Revogação iniciada...',
        'Documento revogado.'
    ];

    useEffect(() => {
        setStep(currentStep => currentStep + 1);
    }, [state]);

    function renderStep(step, i) {
        if (i < currentStep) {
            return (
                <>
                    <span className="circle"
                        id="finished"
                        onClick={() => {
                            setState(i);
                            setStep(i);
                        }}>
                        <strong>
                            ✔
                        </strong>
                    </span>
                    <p>
                        {step}
                    </p>
                </>
            );
        } else if (i === currentStep) {
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
        }
    }

    return (
        <>
            {state === 'revokeStarted' || state === 'revokeFinished' ? (
                steps.map((step, i) =>
                    <div className="step" key={i}>
                        {renderStep(step, i)}
                    </div>
                )
            ) : (
                    steps.slice(0,4).map((step, i) =>
                        <div className="step" key={i}>
                            {renderStep(step, i)}
                        </div>
                    )
                )
            }
        </>
    );
}