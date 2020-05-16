let select = 0;
let show = true;

window.onload = function () {
    document.querySelector('.auth-button').style.transition = 'all .15s ease';
    document.querySelector('#auth-circle-login').style.transition = 'all .5s ease';
    document.querySelector('#auth-circle-password').style.transition = 'all .5s ease';
    document.querySelector('.star-object').style.transition = 'all .3s ease-in-out';
    document.querySelector('.back-button').style.transition = 'all .25s ease-in-out';
    document.querySelector('.modal-notification-window').style.transition = 'all .25s ease';
    document.querySelector('.modal-notification-window-content').style.transition = 'all .25s ease-in-out';
    document.querySelector('.modal-notification-window-close-button').style.transition = 'all .25s ease';
    document.querySelector('.modal-notification-window-accept-button').style.transition = 'all .25s ease';
    callNotification();
    closeNotification();
    setTimeout(() => { document.querySelector('.preloader').style.opacity = '0', document.querySelector('.preloader').style.visibility = 'hidden' }, 500);
    setTimeout(() => { document.querySelector('#gif-loading').style.opacity = '0', document.querySelector('.gif').style.background = 'url(images/gif_background.gif)' }, 1500);
    if (document.cookie == 'cookieAccept=true') {
alert('Works.');
show=false;
    }
}

function authCheck(login, password, authLog) {
    if (document.querySelector('#login').value == 'asdfG1') {
        document.querySelector('#auth-circle-login').style.background = 'rgb(20, 223, 30)';
        login = true;
    } else {
        if (document.querySelector('#login').value != '') {
            document.querySelector('#auth-circle-login').style.background = 'rgb(255, 62, 62)';
        } else {
            document.querySelector('#auth-circle-login').style.background = 'rgb(128, 128, 128)';
        }
        login = false;
    }
    if (document.querySelector('#password').value == 'qwertY!123z') {
        document.querySelector('#auth-circle-password').style.background = 'rgb(20, 223, 30)';
        password = true;
    } else {
        if (document.querySelector('#password').value != '') {
            document.querySelector('#auth-circle-password').style.background = 'rgb(255, 62, 62)';
        } else {
            document.querySelector('#auth-circle-password').style.background = 'rgb(128, 128, 128)';
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
    document.querySelector('.modal-notification-window').style.background = 'rgba(0, 0, 0, .5)';
    document.querySelector('.modal-notification-window-header-title').textContent = name;
    document.querySelector('.modal-notification-window-text').textContent = text;
    document.querySelector('.modal-notification-window-accept-button').textContent = button;
}

function closeNotification() {
    document.body.style.overflow = 'visible';
    document.querySelector('.modal-notification-window-content').style.transform = 'scale(2) translateY(-1000%)';
    document.querySelector('.modal-notification-window').style.backdropFilter = 'blur(0px)';
    document.querySelector('.modal-notification-window').style.background = 'transparent';
    document.querySelector('.modal-notification-window').style.visibility = 'hidden';
    if (select == 'login') {
        document.querySelector('#login').focus();
    }
    if (select == 'password') {
        document.querySelector('#password').focus();
    }
}

document.querySelector('.modal-notification-window-background').onmouseover = () => document.querySelector('.modal-notification-window-close-button').style.background = 'rgb(255, 62, 62)'
document.querySelector('.modal-notification-window-background').onmousedown = () => document.querySelector('.modal-notification-window-close-button').style.background = 'rgb(235, 21, 21)'
document.querySelector('.modal-notification-window-background').onmouseleave = () => document.querySelector('.modal-notification-window-close-button').style.background = ''
document.querySelector('.auth-button').onclick = () => start()
document.querySelector('.modal-notification-window-close-button').onclick = () => closeNotification()
document.querySelector('.modal-notification-window-accept-button').onclick = () => closeNotification()
document.querySelector('.modal-notification-window-background').onclick = () => closeNotification()
document.querySelector('.back-button').onclick = () => document.querySelector('.star').style.display = 'none';

function start() {
    document.querySelector('.auth-button').blur();
    if (authCheck().includes('Login: true') & authCheck().includes('password: true')) {
        document.querySelector('.star').style.display = 'flex';
        if (show) { callNotification('Notification', 'Random 10 numbers from 0 to 9 generating and using as coefficient for determination of star luminosity. Creates fire effect.', 'OK'); 
        show = false;
        document.cookie = 'cookieAccept=true; domain=;';
    }
    } else { authAttention() }
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelector('.modal-notification-window-close-button').style.background = 'rgb(235, 21, 21)'
        closeNotification();
    }
    if (evt.keyCode == 13) {
        document.querySelector('.modal-notification-window-close-button').style.background = 'rgb(235, 21, 21)';
        closeNotification();

    }
};

document.querySelector('#login').onfocus = () => {
    select = 'login';
}

document.querySelector('#password').onfocus = () => {
    select = 'password';
}

setInterval(() => {
    let numbers = '0123456789';
    let number = 0;
    for (let i = 0; i < 10; i++) {
        number = numbers[Math.floor(Math.random() * 10)];
    }
    document.querySelector('.star-object').style.transform = `scale(1.${Math.round(number / 4)})`;
    document.querySelector('.star-object').style.boxShadow = `0 0 100px ${Math.pow(number, 2)}px rgb(24${number}, 24${number}, 23${number})`;
}, 300)