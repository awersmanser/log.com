window.onload = function () {
    document.querySelector('.auth-button').style.transition = 'all .15s ease';
    document.querySelector('#auth-circle-login').style.transition = 'all .5s ease';
    document.querySelector('#auth-circle-password').style.transition = 'all .5s ease';
    document.querySelector('.star-object').style.transition = 'all .25s ease-in-out';
    document.querySelector('.modal-notification-window').style.transition = 'all .25s ease';
    document.querySelector('.modal-notification-window-content').style.transition = 'all .25s ease-in-out';
    document.querySelector('.modal-notification-window-close-button').style.transition = 'all .25s ease';
    document.querySelector('.modal-notification-window-accept-button').style.transition = 'all .25s ease';
    callNotification();
    closeNotification();
    setTimeout(() => { document.querySelector('.preloader').style.opacity = '0', document.querySelector('.preloader').style.visibility = 'hidden' }, 500);
}

function authCheck(login, password, authLog) {
    if (document.querySelector('#login').value == 'asdfG1') {
        document.querySelector('#auth-circle-login').style.background = '#32db05';
        login = true;
    } else {
        if (document.querySelector('#login').value != '') {
            document.querySelector('#auth-circle-login').style.background = '#ff0000';
        } else {
            document.querySelector('#auth-circle-login').style.background = '#808080';
        }
        login = false;
    }
    if (document.querySelector('#password').value == 'qwertY!123z') {
        document.querySelector('#auth-circle-password').style.background = '#32db05';
        password = true;
    } else {
        if (document.querySelector('#password').value != '') {
            document.querySelector('#auth-circle-password').style.background = '#ff0000';
        } else {
            document.querySelector('#auth-circle-password').style.background = '#808080';
        }
        password = false;
    }
    if (login) {
        authLog = 'Login: true, ';
    } else {
        authLog = 'Login: false, ';
    }
    if (password) {
        authLog = authLog + 'password: true.';
    } else {
        authLog = authLog + 'password: false.';
    }
    return authLog;
}

setInterval(authCheck, 1);

function authAttention() {
    if (authCheck().includes('Login: false')) {
        document.querySelector('#auth-circle-login').style.animation = 'auth-attention .25s infinite ease alternate';
        setTimeout(() => document.querySelector('#auth-circle-login').style.animation = '', 1500);
    } else {
        if (authCheck().includes('password: false')) {
            document.querySelector('#password').focus();
        }
    }
    if (authCheck().includes('password: false')) {
        document.querySelector('#auth-circle-password').style.animation = 'auth-attention .25s infinite ease alternate';
        setTimeout(() => document.querySelector('#auth-circle-password').style.animation = '', 1500);
    } else {
        if (authCheck().includes('Login: false')) {
            document.querySelector('#login').focus();
        }
    }
    callNotification('Notification', authCheck(), 'OK');
}

function callNotification(name, text, button) {
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-notification-window').style.visibility = 'visible';
    document.querySelector('.modal-notification-window-content').style.transform = 'scale(1) translateY(0)';
    document.querySelector('.modal-notification-window').style.backdropFilter = 'blur(5px)';
    document.querySelector('.modal-notification-window').style.background = 'rgba(0, 0, 0, 0.5)';
    document.querySelector('.modal-notification-window-header-title').textContent = name;
    document.querySelector('.modal-notification-window-text').textContent = text;
    document.querySelector('.modal-notification-window-accept-button').textContent = button;
}

function closeNotification() {
    document.body.style.overflow = 'visible';
    document.querySelector('.modal-notification-window-content').style.transform = 'scale(1.5) translateY(-500%)';
    document.querySelector('.modal-notification-window').style.backdropFilter = 'blur(0px)';
    document.querySelector('.modal-notification-window').style.background = 'transparent';
    document.querySelector('.modal-notification-window').style.visibility = 'hidden';
}

document.querySelector('#login').onfocus = () => {
    document.onkeydown = (e) => {
        if (e.keyCode === 13) {
            if (authCheck().includes('Login: true')) {
                document.querySelector('#password').focus();
            } else { authAttention() }
        }
    }
}

document.querySelector('#password').onfocus = () => {
    document.onkeydown = (e) => {
        if (e.keyCode === 13) {
            if (authCheck().includes('password: true')) {
                document.querySelector('#password').blur();
                start();
            } else { authAttention() }
        }
    }
}

document.querySelector('#login').onblur = () => {
    document.querySelector('#password').onblur = () => {
        document.querySelector('#login').focus();
        document.querySelector('#login').blur();
    }
}

document.querySelector('.modal-notification-window-background').onmouseover = () => document.querySelector('.modal-notification-window-close-button').style.background = '#ff3e3e'
document.querySelector('.modal-notification-window-background').onmousedown = () => document.querySelector('.modal-notification-window-close-button').style.background = '#eb1515'
document.querySelector('.modal-notification-window-background').onmouseleave = () => document.querySelector('.modal-notification-window-close-button').style.background = ''
document.querySelector('.auth-button').onclick = () => start()
document.querySelector('.modal-notification-window-close-button').onclick = () => closeNotification()
document.querySelector('.modal-notification-window-accept-button').onclick = () => closeNotification()
document.querySelector('.modal-notification-window-background').onclick = () => closeNotification()
document.querySelector('.back-button').onclick = () => document.querySelector('.star').style.display = 'none', document.querySelector('.star').style.visibility = 'hidden';
setTimeout(() => { document.querySelector('.star').style.display = 'inline' }, 500);

document.onkeydown = (e) => {
    if (e.keyCode === 13) {
        closeNotification();
    }
    if (e.keyCode === 27) {
        closeNotification();
    }
}

function start() {
    document.querySelector('.auth-button').blur();
    if (authCheck().includes('Login: true') & authCheck().includes('password: true')) {
        document.querySelector('.star').style.visibility = 'visible';
        callNotification('Notification', 'Random 10 numbers from 0 to 9 and using as coefficient for determination of star luminosity. Creates fire effect.', 'OK');
    } else { authAttention() }
}

setInterval(() => {
    let letters = '0123456789';
    let number = 0;
    for (let i = 0; i < 10; i++) {
        number = letters[Math.floor(Math.random() * 10)];
    }
    document.querySelector('.star-object').style.transform = `scale(1.${number})`;
    document.querySelector('.star-object').style.boxShadow = `0 0 100px ${number * number}px #f7f${number}e9`;
    console.log(number * number);
}, 250)