export default () => {
  if (window.innerWidth <= 680) {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
  }
}