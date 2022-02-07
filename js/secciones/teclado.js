const d = document;
let x = 0,
 y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
     $stage = d.querySelector(stage),
     $limitsBall = $ball.getBoundingClientRect(),
     $limitsStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode);
    

    switch (e.keyCode) {
        case 37:
            // LEFT
            if ($limitsBall.left > $limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        
        case 38:
            // UP
            if ($limitsBall.top > $limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;
            
            case 39:
            // RIGHT
            if ($limitsBall.right < $limitsStage.right) {
                e.preventDefault();
                x++;
            }
        break;
        
        case 40:
            // DOWN
            if ($limitsBall.bottom < $limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
        break;
        
        default:
            break;
    
    }

    $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
}

export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
}