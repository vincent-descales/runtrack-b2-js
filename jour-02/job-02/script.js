function myAddCount() {
    window.onload = function(){
        const btn = document.querySelector("#add-count-btn");
        let counter = 0;
        const count = document.querySelector("#count-displayer");
        console.log(btn);
        btn.addEventListener('click', function (e) {
            
            counter++;
            console.log(counter)
            count.innerHTML = counter;
        });
    }
}
myAddCount();