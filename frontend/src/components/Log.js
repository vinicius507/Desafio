import React, { useEffect, useState } from 'react';

export default function Log({ state, isManual, setManual }) {

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
        line[`${time}`] = [state, isManual];
        const log = actions => actions.concat([line]);
        setActions(log);
        setManual(false);
    }, [state]);

    useEffect(() => {
        updateScroll();
    })

    function renderLog(action) {

        return (
            <>
                <p>
                    {action[Object.keys(action)[0]][1] &&
                        `[${Object.keys(action)[0]}] RETORNADO MANUALMENTE PARA ESTADO ANTERIOR:`
                    }
                </p>
                <p>
                    [{Object.keys(action)[0]}] {steps[action[Object.keys(action)[0]][0]]}
                </p>
            </>
        );
    }

    function updateScroll() {
        var element = document.getElementById("style-1");
        element.scrollTo(0, element.scrollHeight);
    }

    return (
        <>
            <div className="log" id="style-1">
                {
                    actions.map((action, i) =>
                        <div key={i}>
                            {renderLog(action)}
                        </div>
                    )
                }
            </div>
        </>
    );
}