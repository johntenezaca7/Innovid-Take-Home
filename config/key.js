
if (process.env.NODE_ENV === 'production') {
    //We are in production
    module.exports = {
        key: process.env.KEY
    };    
} else {
    module.exports = {
        key: '48brf8pcam5mw2nqsgxtyd4g'
    };
}

