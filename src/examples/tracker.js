console.log('This is an example of an external tracking script');

function setCookie (name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Strict';
}

//we set a tracking cookie as an example
setCookie('external-tracker', 'foo', 120);
