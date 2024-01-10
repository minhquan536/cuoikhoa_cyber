const record = document.querySelector("record");

const handleScroll = () => {
    requestAnimationFrame(()=> {
        document.documentElement.scrollTop;
    });
};

window.addEventListener("scroll",handleScroll);