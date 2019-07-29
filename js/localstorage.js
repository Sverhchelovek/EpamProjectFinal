var a = [];
a.push(JSON.parse(localStorage.getItem('session')));
localStorage.setItem('session', JSON.stringify(a));