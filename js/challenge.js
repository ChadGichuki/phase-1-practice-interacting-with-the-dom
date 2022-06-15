document.addEventListener('DOMContentLoaded', pageFunctionality)

function pageFunctionality(){
    // Increamenting the counter every second on page load
    const counter = document.querySelector('h1#counter')
    let counterValue = parseInt(counter.innerHTML)
    let timer = setInterval(() => {
        counterValue += 1
        counter.innerHTML = counterValue
    }, 1000)

    // manually increment or decrease counter with + and - buttons
    const plus = document.querySelector('#plus')
    plus.addEventListener('click', () => {
        counterValue +=1
        counter.innerHTML = counterValue
    })

    const minus = document.querySelector('#minus')
    minus.addEventListener('click', () => {
        counterValue -=1
        counter.innerHTML = counterValue
    })

    // "Like" an individual number of the counter.
    const heart = document.querySelector('#heart')
    heart.addEventListener('click', () => {
        let li = document.createElement('li')
        li.textContent = `${counterValue} has been liked 1 time.`
        document.querySelector('ul.likes').appendChild(li)
    })

    // Pause the counter.
    const pause = document.querySelector('#pause')
    pause.addEventListener('click', () => {
        if (pause.innerHTML === ' pause '){
            //Stop the timer
            clearInterval(timer)

            // Rename button label to resume
            pause.textContent = 'resume'

            // Disable all buttons except resume button
            let allButtons = document.querySelectorAll('button')
            allButtons.forEach( (button) => {
                if (button.innerHTML !== 'resume'){
                    button.disabled = true   
                }
            })
        } else if (pause.innerHTML === 'resume'){
            // clear previous timer and restart the timer
            let timer = setInterval(() => {
                counterValue += 1
                counter.innerHTML = counterValue
            }, 1000)

            //rename button label to pause
            pause.textContent = ' pause '

            // Return all buttons to functionality
            let allButtons = document.querySelectorAll('button')
            allButtons.forEach( (button) => {
                button.disabled = false
            })
        }
    })

    // Enable comments
    const form = document.querySelector('form#comment-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let comment = form.querySelector('input').value
        let p = document.createElement('p')
        p.textContent = comment
        document.querySelector('div#list').appendChild(p)
    })
}