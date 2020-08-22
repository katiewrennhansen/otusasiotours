const footerTrips = document.getElementById('js-footer-trips');

upcomingTrips.forEach(trip => createTripLink(trip))

//create footer links and append them to parent container
function createTripLink(trip){
    const listItem = document.createElement('li');
    const listLink = document.createElement('a');
    listLink.innerText = `${trip.name}`;
    listLink.setAttribute('href', trip.path)
    listItem.appendChild(listLink);
    footerTrips.appendChild(listItem)
}