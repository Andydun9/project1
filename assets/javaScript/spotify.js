
// Spotify
// var token = "BQCoyr4JyNpokBwxCsprCe640BmGxMzn3EA3IZRt4sQTJbMAHV6dyYF-I7AWAub8KH05HRz0y5MdkkDLh0C3ogypwSXWNfTZYR7qFb34RXqgQhRxqOnC1L3bIwMtjtwNw4kXGqsFNxpNV7ymIB1V7jjDuARdXevv1w";

// intialize the player
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBtl3DIXRQMVMd0yKjWmyxkVFmw63ELz4GGUoeAKHCIPBcoQRuCFRvAeERjgUfDxZwUyUc71ZqujurR2vHe9jbwvqoVmuwxZk1APmgNSHkcWy5SOmU_Vu4AvVStk96M-ts_DXXDb3vGz3TuW-Lj8vTNtEdPsCLczQ';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };
