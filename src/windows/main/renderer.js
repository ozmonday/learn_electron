const title = document.getElementById('title-text');
const greeting = document.getElementById('greeting');

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle();
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light';
});

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system();
  document.getElementById('theme-source').innerHTML = 'System';
});

document.getElementById('set-title').addEventListener('click', () => {
  console.log(title.value);
  greeting.name = title.value;
  window.mainService.setTitle(title.value);
});
