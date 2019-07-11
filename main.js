const sixDegrees = document.getElementById('six-degrees')
const sixDegreesLink = document.getElementById('six-degrees-link')
const scrapBookStudio = document.getElementById('scrapbook-studio')
const scrapBookStudioGitHubLink = document.getElementById('scrapbook-studio-github-link')
const scrapBookStudioSiteLink = document.getElementById('scrapbook-studio-site-link')
const gracefulVenues = document.getElementById('graceful-venues')
const gracefulVenuesGitHubLink = document.getElementById('graceful-venues-github-link')
const gracefulVenuesSiteLink = document.getElementById('graceful-venues-site-link')

sixDegrees.addEventListener('mouseover', function () {
    sixDegreesLink.innerHTML = 'GitHub Repository'
})

sixDegrees.addEventListener('mouseout', function () {
    sixDegreesLink.innerHTML = ''
})

scrapBookStudio.addEventListener('mouseover', function () {
    scrapBookStudioGitHubLink.innerHTML = 'GitHub Repository'
    scrapBookStudioSiteLink.innerHTML = 'Visit Site'
})

scrapBookStudio.addEventListener('mouseout', function () {
    scrapBookStudioGitHubLink.innerHTML = ''
    scrapBookStudioSiteLink.innerHTML = ''
})

gracefulVenues.addEventListener('mouseover', function () {
    gracefulVenuesGitHubLink.innerHTML = 'GitHub Repository'
    gracefulVenuesSiteLink.innerHTML = 'Visit Site'
})

gracefulVenues.addEventListener('mouseout', function () {
    gracefulVenuesGitHubLink.innerHTML = ''
    gracefulVenuesSiteLink.innerHTML = ''
})
