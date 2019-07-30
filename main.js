const projects = document.getElementById('projects')
const sixDegreeFlipCard = document.getElementById('sixdegreeflip')
const scrapbookFlipCard = document.getElementById('scrapbookflip')
const gracefulVenuesFlipCard = document.getElementById('gracefulvenuesflip')

// eslint-disable-next-line complexity
projects.addEventListener('click', function (event) {
    if (!event.target.classList.contains('project-link') && event.target.id !== 'projects'){
        let flipCard;
        if (event.target.id === 'six-degrees-image' || event.target.classList.contains('six-degrees-back')){
            flipCard = sixDegreeFlipCard
        } else if (event.target.id === 'scrapbook-studio-image' || event.target.classList.contains('scrapbook-back')){
            flipCard = scrapbookFlipCard
        } else if (event.target.id === 'graceful-venues-image' || event.target.classList.contains('graceful-back')){
            flipCard = gracefulVenuesFlipCard
        }
        if (!flipCard.style.transform) {
            flipCard.style.transform = 'rotateY(180deg)'
            flipCard.style.webkitTransform = 'rotateY(180deg)'
        } else {
            flipCard.style.transform = ''
            flipCard.style.webkitTransform = ''
        }

    }
})
