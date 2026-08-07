fetch('/nav-labels.json')
  .then(function (res) { return res.json(); })
  .then(function (labels) {
    Object.keys(labels).forEach(function (key) {
      var el = document.querySelector('.topbar-nav [data-nav="' + key + '"]');
      if (el) el.textContent = labels[key];
    });
  })
  .catch(function (err) { console.error('Failed to load nav labels', err); });
