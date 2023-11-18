let arr = [
    {
        dp: "https://th-i.thgim.com/public/incoming/yugnlc/article65946416.ece/alternates/FREE_1200/_DSC2719.JPG",story: "https://im.rediff.com/sports/2019/mar/18bfc.jpg?w=670&h=900"
    },
    
    {
        dp: "https://i.pinimg.com/1200x/75/fc/70/75fc70478645092d61288722608b4c82.jpg",story: "https://i.insider.com/648090713973bf001961daa1?width=1136&format=jpeg"
    },

    {
        dp: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",story: "https://i.insider.com/60a62477f27b4c001944587c?width=1136&format=jpeg"
    },
    
    {
        dp: "https://pbs.twimg.com/media/F3hFhMZWcAA8Bro.jpg:large",story: "https://www.sportsnet.ca/wp-content/uploads/2013/06/Neymar_Goldenball640-scaled.jpg"
    },

    {
        dp: "https://static01.nyt.com/images/2023/07/24/multimedia/24mbappe-saudis-4-qgmt/24mbappe-saudis-4-qgmt-videoSixteenByNineJumbo1600.jpg",story: "https://www.psg.fr/media/9839/mbappe.jpg?anchor=center&mode=crop&width=800&height=450&quality=60"
    },
    {
        dp: "https://thebridge.in/h-upload/2023/02/05/43019-anshul-jubli-ufc-mma.webp",story: "https://images.hindustantimes.com/img/2023/02/05/1600x900/a_1675577604273_1675577614033_1675577614033.jpg"
    },
    {
        dp: "https://www.celebhow.com/wp-content/uploads/2021/01/Baichung-Bhutia-goals-Age-Net-Worth-Wife-Stadium-Awards-More.jpeg",story: "https://th-i.thgim.com/public/incoming/nkir67/article65840131.ece/alternates/FREE_1200/PTI09_01_2022_000155B.jpg"
    }

    
];
let stories = document.querySelector("#stories");
let clutter = ""
arr.forEach(function(elem,indx){
    clutter += `<div class="story">
    <img id = "${indx}" src="${elem.dp}" alt="">
</div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){
    let goldenValue = arr[dets.target.id].story;
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${goldenValue})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
    
});




