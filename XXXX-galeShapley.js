// https://rosettacode.org/wiki/Stable_marriage_problem

function galeShapley(malePrefLists, femalePrefLists) {
    const wives = {};
    const husbands = {};
    const singleMales = Object.keys(malePrefLists);

    while (singleMales.length > 0) {
        const male = singleMales.pop();
        const malePrefList = malePrefLists[male];

        for (const female of malePrefList) {
            const husband = husbands[female];

            if (!husband) {
                marry(male, female);
                break;
            } else if (wouldCheatOnHusband(male, female)) {
                divorce(husband, female);
                marry(male, female);
                singleMales.push(husband);
                break;
            } else {
                continue;
            }
        }
    }

    function marry(male, female) {
        wives[male] = female;
        husbands[female] = male;
    }

    function divorce(male, female) {
        delete wives[male];
        delete husbands[female];
    }

    function wouldCheatOnWife(male, female) {
        const wife = wives[male];
        const malePrefList = malePrefLists[male];
        return malePrefList.indexOf(female) < malePrefList.indexOf(wife);
    }

    function wouldCheatOnHusband(male, female) {
        const husband = husbands[female];
        const femalePrefList = femalePrefLists[female];
        return femalePrefList.indexOf(male) < femalePrefList.indexOf(husband);
    }

    for (const male in malePrefLists) {
        for (const female in femalePrefLists) {
            if (wouldCheatOnWife(male, female) && wouldCheatOnHusband(male, female)) {
                throw `${male} and ${female} had an affair`;
            }
        }
    }

    return wives;
}

const malePrefLists =  {
    abe: ['abi', 'eve', 'cath', 'ivy', 'jan', 'dee', 'fay', 'bea', 'hope', 'gay'],
    bob: ['cath', 'hope', 'abi', 'dee', 'eve', 'fay', 'bea', 'jan', 'ivy', 'gay'],
    col: ['hope', 'eve', 'abi', 'dee', 'bea', 'fay', 'ivy', 'gay', 'cath', 'jan'],
    dan: ['ivy', 'fay', 'dee', 'gay', 'hope', 'eve', 'jan', 'bea', 'cath', 'abi'],
     ed: ['jan', 'dee', 'bea', 'cath', 'fay', 'eve', 'abi', 'ivy', 'hope', 'gay'],
   fred: ['bea', 'abi', 'dee', 'gay', 'eve', 'ivy', 'cath', 'jan', 'hope', 'fay'],
    gav: ['gay', 'eve', 'ivy', 'bea', 'cath', 'abi', 'dee', 'hope', 'jan', 'fay'],
    hal: ['abi', 'eve', 'hope', 'fay', 'ivy', 'cath', 'jan', 'bea', 'gay', 'dee'],
    ian: ['hope', 'cath', 'dee', 'gay', 'bea', 'abi', 'fay', 'ivy', 'jan', 'eve'],
    jon: ['abi', 'fay', 'jan', 'gay', 'eve', 'bea', 'dee', 'cath', 'ivy', 'hope']
};

const femalePrefLists = {
    abi: ['bob', 'fred', 'jon', 'gav', 'ian', 'abe', 'dan', 'ed', 'col', 'hal'],
    bea: ['bob', 'abe', 'col', 'fred', 'gav', 'dan', 'ian', 'ed', 'jon', 'hal'],
   cath: ['fred', 'bob', 'ed', 'gav', 'hal', 'col', 'ian', 'abe', 'dan', 'jon'],
    dee: ['fred', 'jon', 'col', 'abe', 'ian', 'hal', 'gav', 'dan', 'bob', 'ed'],
    eve: ['jon', 'hal', 'fred', 'dan', 'abe', 'gav', 'col', 'ed', 'ian', 'bob'],
    fay: ['bob', 'abe', 'ed', 'ian', 'jon', 'dan', 'fred', 'gav', 'col', 'hal'],
    gay: ['jon', 'gav', 'hal', 'fred', 'bob', 'abe', 'col', 'ed', 'dan', 'ian'],
   hope: ['gav', 'jon', 'bob', 'abe', 'ian', 'dan', 'hal', 'ed', 'col', 'fred'],
    ivy: ['ian', 'col', 'hal', 'gav', 'fred', 'bob', 'abe', 'ed', 'jon', 'dan'],
    jan: ['ed', 'hal', 'gav', 'abe', 'bob', 'jon', 'col', 'ian', 'fred', 'dan']
};

console.log(galeShapley(malePrefLists, femalePrefLists));