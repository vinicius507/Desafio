import React, { useEffect, useState } from 'react';

export default function Log({ state }) {

    const [actions, setActions] = useState([]);

    let steps = {
        generationStarted: 'Geração do documento iniciada...',
        generationFinished: 'Documento gerado.',
        registerStarted: 'Registro do documento iniciado...',
        registerFinished: 'Documento registrado.',
        revokeStarted: 'Revogação do documento iniciada...',
        revokeFinished: 'Documento revogado.'
    };

    useEffect(() => {
        let line = {};
        const time = new Date(Date.now()).toLocaleString("pt-BR");
        line[`${time}`] = state;
        const log = actions => actions.concat([line]);
        setActions(log);
    }, [state]);

    function renderLog(action) {

        return (
            <p>
                [{Object.keys(action)[0]}] {steps[action[Object.keys(action)[0]]]}
            </p>
        );
    }

    return (
        <>
            <div className="log" id="style-1">
                {
                    actions.map((action, i) =>
                        <div key={i}>
                            {renderLog(action, i)}
                        </div>
                    )
                }
            </div>
        </>
    );
}