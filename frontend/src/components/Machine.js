import { Machine } from 'xstate';

export default Machine({
    id: 'document',
    initial: 'generationStarted',
    states: {
        generationStarted: {
            after: {
                2000: 'generationFinished'
            }
        },
        generationFinished: {
            after: {
                2000: 'registerStarted'
            },
            on: {
                GEN_S: 'generationStarted',
            }
        },
        registerStarted: {
            after: {
                2000: 'registerFinished'
            },
            on: {
                GEN_S: 'generationStarted',
                GEN_F: 'generationFinished'
            }
        },
        registerFinished: {
            on: {
                REVOKE: 'revokeStarted',
                GEN_S: 'generationStarted',
                GEN_F: 'generationFinished',
                REG_S: 'registerStarted'
            }
        },
        revokeStarted: {
            after: {
                2000: 'revokeFinished'
            },
            on: {
                GEN_S: 'generationStarted',
                GEN_F: 'generationFinished',
                REG_S: 'registerStarted',
                REG_F: 'registerFinished'
            }
        },
        revokeFinished: {
            on: {
                GEN_S: 'generationStarted',
                GEN_F: 'generationFinished',
                REG_S: 'registerStarted',
                REG_F: 'registerFinished',
                RVK_S: 'revokeStarted'
            }
        }
    }
});