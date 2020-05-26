import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Steps.css';

export default function Steps({ state, setState }) {

    const [currentStep, setStep] = useState(0);
    const [showInitialSteps, setInitialSteps] = useState(true);
    const [showFullSteps, setFullSteps] = useState(false);

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
        if (state === 'revokeStarted' || state === 'revokeFinished') {
            setFullSteps(true);
        }
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
                            if (i < 4) { setFullSteps(false) };
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

    function RenderSteps() {
        const nodeRef = useRef(null);

        return (
            <>
                {showInitialSteps &&
                    steps.slice(0, 4).map((step, i) =>
                        <div className="step" key={i}>
                            {renderStep(step, i)}
                        </div>
                    )}

                <CSSTransition
                    in={showFullSteps}
                    timeout={300}
                    classNames="fade"
                    nodeRef={nodeRef}
                    unmountOnExit
                    onEnter={() => setInitialSteps(false)}
                    onExited={() => setInitialSteps(true)}
                >
                    <div ref={nodeRef}>
                        {steps.map((step, i) =>
                            <div className="step" key={i}>
                                {renderStep(step, i)}
                            </div>
                        )}
                    </div>
                </CSSTransition>
            </>
        );
    }

    return (
        <>
            {RenderSteps()}
        </>
    );
}