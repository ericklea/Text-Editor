const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
// store the event for later
window.deferredPrompt = event;
// remove the hidden attribute from the install button
butInstall.classList.toggle('hidden', false);
});
// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
 const promptEvent = window.deferredPrompt;
if (!promptEvent) {
return;
}
// Show the install prompt
promptEvent.prompt();

// reset the deferred prompt variable, since it can only be used once
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
// clear the deferredPrompt
console.log('installed')
window.deferredPrompt = null;
});
