const deviceSize = {
    xs: `max-width: 360px`,
    s: `max-width: 768px`,
    m: `max-width: 1024px`,
    l: `max-width: 1440px`,
};

const media = (size, css) => {
    return `
        @media (${deviceSize[size]}) {
            ${css}
        }
    `;
};

export default {
    deviceSize,
    media,
};
