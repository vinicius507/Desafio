import { Machine, assign } from 'xstate';

export const stateMachine = Machine({
    id: 'document',
    initial: 'generationStarted',
    context: { regDone: 0 },
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
            },
            after: {
                2000: assign((context) => context.regDone + 1)
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