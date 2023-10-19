
const $circle = document.getElementById('circle')
const $upBtn = document.getElementById('upBtn')
const $downBtn = document.getElementById('downBtn')
$circle.style.transform = 'translateY(-50%)'

$upBtn.onclick = function(){
    $circle.style.transform += 'rotate(-90deg)'
}

$downBtn.onclick = function(){
    $circle.style.transform += 'rotate(90deg)'
}

















