document.addEventListener("DOMContentLoaded", function () {
    const triggerTabList = [].slice.call(
      document.querySelectorAll("#myTab button")
    );
    triggerTabList.forEach(function (triggerEl) {
      const tabTrigger = new bootstrap.Tab(triggerEl);
  
      triggerEl.addEventListener("click", function (event) {
        event.preventDefault();
        tabTrigger.show();
      });
    });
  });