const app = {};

app.apiUrl = 'https://api.spotify.com/v1';

app.events = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let artists = $('input[type=search]').val();
        artists = artists.split(',');
        let searched = artists.map(artistName => app.searchArtist(artistName));
        console.log(searched);
    });
};


app.searchArtist = (artistName) => $.ajax({
    url: '${api.apiUrl}/search',
    method: 'GET',
    dataType: 'jsonp',
    data: {q: artistName}
})
app.init = function() {
    app.events();
};

$(app.init);