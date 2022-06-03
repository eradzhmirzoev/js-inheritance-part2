class Clock {
    constructor(clockNode) {
        this.clockNode = clockNode;

        this.clockNode.addEventListener('click', (event) => {
            event.target.classList.toggle('short-format');  
        });
    }

    render() {
        let date = new Date().toTimeString().split(' ')[0];

        if (this.clockNode.classList.contains('short-format')) {
            date = new Date().toTimeString().split(' ')[0].substring(0,5);
        }

        this.clockNode.innerHTML = date;
    }

    startClock() {
        setInterval(()=> this.render(), 1000);
    }
}

class ChildrenClock1 extends Clock {
    constructor(clockNode) {
        super(clockNode);
    }

    render() {
        let date = new Date().toTimeString().split(' ')[0].substring(0,5);

        if (this.clockNode.classList.contains('short-format')) {
            date = new Date().toTimeString().split(' ')[0];
        }

        this.clockNode.innerHTML = date;
    }
}

class ChildrenClock2 extends Clock {
    constructor(clockNode) {
        super(clockNode);
    }

    render() {
        let date = new Date().toTimeString().split(' ')[0];

        if (this.clockNode.classList.contains('short-format')) {
            date = new Date().toTimeString().split(' ')[0].substring(0,5);
        }

        this.clockNode.innerHTML = date;
    }
}


let childrenClock1 = new ChildrenClock1(document.querySelector('.clock1'));
let childrenClock2 = new ChildrenClock2(document.querySelector('.clock2'));

childrenClock1.startClock();
childrenClock2.startClock();