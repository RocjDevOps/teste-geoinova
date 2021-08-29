const descubra_o_que_eu_faco = (parameter01, parameter02) => {
    let var01 = {};
    let var02 = 0;

    [...parameter02].filter((p) => /[A-Za-z]/.test(p))
        .map((c) => c.toLowerCase())
        .forEach(
            (p) => {
                if (!(p in var01)) {
                    var02 += 1;
                    var01[p] = true;
                }
            });
    return var02 == parameter01;
};


/[A-Za-z]/.test(p)

//O algoritmo funciona como um regex 
que dá o resultado de P informando
quantas letras teriam em uma frase.
Por exemplo se p
for uma letra de A - Za - z....Mas se
for um número....não cai no filtro.