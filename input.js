let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

console.log("successfully loaded inputs")

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            console.log("Pressed Up")
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            console.log("Pressed Down") 
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            console.log("Pressed Left") 
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            console.log("Pressed Right") 
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}