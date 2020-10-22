#!/usr/bin/env node

const [,,...textArray] = process.argv;

const text = textArray.length ? textArray.join(' ') : 'Moo';

const whitespaceLine = Array.from({ length: text.length }, () => ' ').join('');
const bottomLine = Array.from({ length: text.length }, () => '_').join('');

const cowSay = `
                   _${bottomLine}_
                  / ${whitespaceLine} \\
                  | ${text} |
                  \\_${bottomLine}_/
                  /
            ^__^
    _______/(o o)
   /(       /(__)
 \\/ | w---||
    ||    ||
`;

process.stdout.write(cowSay);
