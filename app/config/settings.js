export const URLs = {
    URL: 'http://ap001g.servicios.oca:8105/Mobile',
    LOGIN: function(strings, ...values){
        return `${URLs.URL}/Autenticar?usuario=${values[0]}&clave=${values[1]}`;
    }
};

