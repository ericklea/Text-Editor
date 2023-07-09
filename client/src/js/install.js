const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
console.log('hit')
console.log("event" + event)
event.preventDefault();
// store the event for later
window.deferredPrompt = event;
// remove the hidden attribute from the install button
butInstall.removeAttribute('hidden');
});
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
 const promptEvent = window.deferredPrompt;
if (!promptEvent) {
return;
}
// Show the install prompt
promptEvent.prompt();

// reset the deferred prompt variable, since it can only be used once
window.deferredPrompt = null;
butInstall.setAttribute('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
// clear the deferredPrompt
console.log('installed')
window.deferredPrompt = null;
});
