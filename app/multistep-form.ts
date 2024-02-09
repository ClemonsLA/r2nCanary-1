const interviewFormQuestionSets = [
    {
        label: `first set`,
    },
    {
        label: `second set`,
    },
    {
        label: `third set`,
    },
    {
        label: `fourth set`,
    },
    {
        label: `fifth set`,
    },
]

const interviewState = {
    currentSet: 0,
    steps:{
        firstSet: {
            valid: false,
            dirty: false,
            values: {},
        },
        secondSet: {
            valid: false,
            dirty: false,
            values: {},
        },
        thirdSet: {
            valid: false,
            dirty: false,
            values: {},
        },
        fourthSet: {
            valid: false,
            dirty: false,
            values: {},
        },
        fifthSet: {
            valid: false,
            dirty: false,
            values: {},
        },
    }
}